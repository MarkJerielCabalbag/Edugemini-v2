"use client";

import Modal from "@/components/modal";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { usePostApprovedStudent } from "@/hooks/instructor";
import { ModalProps } from "@/types/types";
import { useParams } from "next/navigation";
import React from "react";

type AcceptStudentProps = {
  studentId: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
} & ModalProps;

const ApprovedStudentModal = ({
  open,
  onOpenChange,
  studentId,
}: AcceptStudentProps) => {
  const { roomId } = useParams();

  const { mutateAsync, isPending } = usePostApprovedStudent(
    studentId,
    Number(roomId)
  );
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      modalHeader="Approve Student"
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
            {isPending ? "Accepting..." : "Accept Approval"}
          </Button>
        </>
      }
    />
  );
};

export default ApprovedStudentModal;
