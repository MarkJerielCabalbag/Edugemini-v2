"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { ModalProps } from "@/types/types";

const Modal = ({
  open,
  onOpenChange,
  modalBody,
  modalFooter,
  modalHeader,
}: ModalProps) => {
  return (
    <AlertDialog onOpenChange={onOpenChange} open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{modalHeader}</AlertDialogTitle>
          {modalBody}
        </AlertDialogHeader>
        <AlertDialogFooter>{modalFooter}</AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Modal;
