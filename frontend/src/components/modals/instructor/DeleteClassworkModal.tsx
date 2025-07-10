"use client";
import Modal from "@/components/modal";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useDeleteClasswork } from "@/hooks/instructor";
import { ModalProps } from "@/types/types";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const DeleteClassworkModal = ({ open, onOpenChange }: ModalProps) => {
  const { workId, roomId, userId } = useParams();
  const { isPending, mutateAsync } = useDeleteClasswork(
    Number(roomId),
    Number(workId)
  );
  const router = useRouter();
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      modalHeader="Delete Classwork"
      modalBody={
        <div className="text-center px-3 py-2 opacity-75">
          Are you sure to delete this classwork? This action cannot be undone.
        </div>
      }
      modalFooter={
        <>
          <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
          <Button
            variant={"destructive"}
            disabled={isPending}
            onClick={async () => {
              try {
                await mutateAsync();
                onOpenChange(false);
                router.push(
                  `/instructor/classroom/${userId}/${roomId}/classwork`
                );
              } catch (error) {
                onOpenChange(true);
              }
            }}
          >
            {isPending ? "Deleting..." : "Delete"}
          </Button>
        </>
      }
    />
  );
};

export default DeleteClassworkModal;
