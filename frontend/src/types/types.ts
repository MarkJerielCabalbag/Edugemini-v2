import { ReactNode } from "react";

export type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  modalHeader?: string;
  modalBody?: ReactNode;
  modalFooter?: ReactNode;
};

export type FileProps = {
  id: number;
  activityId?: number | null;
  announceId?: number | null;
  filePath?: string;
  fileSize: number;
  filename: string;
  folderPath: string;
  mimetype?: string;
};

export type AnnouncementProps = {
  id: number;
  title: string;
  decription: string;
  roomId?: number;
  createdAt: string;

  listOfFiles: FileProps[];
};
