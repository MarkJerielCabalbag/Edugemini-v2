import { ReactNode } from "react";

export type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  modalHeader?: string;
  modalBody?: ReactNode;
  modalFooter?: ReactNode;
};

type RelatedToClassroom = {
  classname: string;
  classcode: string;
  section: string;
};

export type ClassroomProps = {
  userId?: number;
  room: string;
  status: string;
  roomId?: number;

  relatedtoClassroom: RelatedToClassroom;
};

export type FileProps = {
  id?: number;
  activityId?: number | null;
  announceId?: number | null;
  outputId?: number | null;
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
