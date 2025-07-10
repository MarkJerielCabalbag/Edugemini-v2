"use client";
import Modal from "@/components/modal";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useDeleteAnnouncement } from "@/hooks/instructor";
import { ModalProps } from "@/types/types";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const DeleteAnnouncementModal = ({ open, onOpenChange }: ModalProps) => {
  const { announceId, userId, roomId } = useParams();
  const { mutateAsync, isPending } = useDeleteAnnouncement(Number(announceId));
  const router = useRouter();
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      modalHeader="Delete Announcement"
      modalBody={
        <div className="text-center px-3 py-2 opacity-75">
          Are you sure to delete this announcement? This action cannot be
          undone.
        </div>
      }
      modalFooter={
        <>
          <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
          <Button
            disabled={isPending}
            variant={"destructive"}
            onClick={async () => {
              try {
                await mutateAsync();
                onOpenChange(false);
                router.push(`/instructor/classroom/${userId}/${roomId}`);
              } catch (error) {}
            }}
          >
            {isPending ? "Deleting" : "Delete"}
          </Button>
        </>
      }
    />
  );
};

export default DeleteAnnouncementModal;
