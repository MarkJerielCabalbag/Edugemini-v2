import { AccessorKeyColumnDef } from "@tanstack/react-table";
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

export type StudentProps = {
  userId?: number;
  firstname: string;
  middlename: string;
  lastname: string;
  roomId?: number;
  sex: string;
  status: string;
};

export type TableProps<T> = {
  tableHeader?: React.ReactNode;
  tableBody?: React.ReactNode;
  tableFooter?: React.ReactNode;
  onRowClick: (row: T) => void;
  data?: T[];
  column?: AccessorKeyColumnDef<T>[];

  // setPagination: (prev: PaginationProps) => void;
  rowLength: number;
};
