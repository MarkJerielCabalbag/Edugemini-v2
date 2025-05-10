import { ReactNode } from "react";

export type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  modalHeader?: string;
  modalBody?: ReactNode;
  modalFooter?: ReactNode;
};

export type FileProps = {
  id?: number;
  activityId?: number | null;
  announceId?: number | null;
  filePath?: string;
  fileSize?: number;
  filename?: string;
  folderPath?: string;
  mimetype?: string;
};

export type AnnouncementProps = {
  id?: number;
  title?: string;
  description: string;
  roomId?: number;
  createdAt?: string;

  listOfFiles: FileProps[];
};

export type ClassworkProps = {
  id?: number;
  title: string;
  date: string;
  time: string;
  instruction: string;
  roomId?: number;
};
