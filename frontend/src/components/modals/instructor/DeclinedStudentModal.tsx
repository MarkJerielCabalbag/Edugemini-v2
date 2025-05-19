import Modal from "@/components/modal";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { usePostDeclinedStudent } from "@/hooks/instructor.hooks";
import { ModalProps } from "@/types/types";
import { useParams } from "next/navigation";

import React from "react";

type DeclinedStudentProps = {
  studentId: number;
} & ModalProps;

const DeclinedStudentModal = ({
  open,
  onOpenChange,
  studentId,
}: DeclinedStudentProps) => {
  const { roomId } = useParams();
  const { mutateAsync, isPending } = usePostDeclinedStudent(
    studentId,
    Number(roomId)
  );
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      modalHeader="Decline Student"
      modalBody={
        <div className="text-center px-3 py-2 opacity-75">
          Are you sure to accept this student to join this class?
        </div>
      }
      modalFooter={
        <>
          <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
          <Button
            disabled={isPending}
            onClick={async () => {
              try {
                await mutateAsync();
                onOpenChange(false);
              } catch (error) {
                console.log(error);
              }
            }}
          >
            {isPending ? "Declining..." : "Decline Approval"}
          </Button>
        </>
      }
    />
  );
};

export default DeclinedStudentModal;
