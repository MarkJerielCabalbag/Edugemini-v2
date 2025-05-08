import { ReactNode } from "react";

export type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  modalHeader?: string;
  modalBody?: ReactNode;
  modalFooter?: ReactNode;
};
