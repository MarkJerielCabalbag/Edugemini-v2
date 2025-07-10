"use client";

import Modal from "@/components/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePostAnnouncement } from "@/hooks/instructor.hooks";
import { AnnouncementProps, ModalProps } from "@/types/types";

import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";
import { FileIcon, Paperclip, XIcon } from "lucide-react";
import { useParams } from "next/navigation";
import React, { ChangeEvent } from "react";

const CreateAnnouncementModal = ({ open, onOpenChange }: ModalProps) => {
  const [fileData, setFileData] = React.useState<File[]>([]);

  const [announcement, setAnnouncement] = React.useState<AnnouncementProps>({
    title: "",
    description: "",
    listOfFiles: [],
  });

  const { roomId } = useParams();

  const handleFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputElement = e.target;
    const files = inputElement.files;
    if (files) {
      setFileData(Array.from(files));
    }
  };

  const handleFilterFile = (filteredValue: string) => {
    const filterValue = fileData.filter((file) => file.name !== filteredValue);

    setFileData(filterValue);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAnnouncement({ ...announcement, [e.target.name]: e.target.value });

  const { mutateAsync, isPending } = usePostAnnouncement(
    Number(roomId),
    announcement?.title as string,
    announcement?.description as string,
    fileData
  );
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      modalHeader="Create Announcement"
      modalBody={
        <div className="space-y-3">
          <p className="text-gray-600 text-md leading-relaxed">
            Create a new announcement to communicate important information to
            your students.
          </p>
          <div className="space-y-2">
            <Label className="text-sm font-medium">Title*</Label>
            <Input
              placeholder="e.g., Mathematics 101"
              value={announcement.title}
              name="title"
              onChange={handleOnChange}
              disabled={isPending}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium">Description</Label>
            <Input
              placeholder="e.g., Mathematics"
              value={announcement.description}
              name="description"
              onChange={handleOnChange}
              disabled={isPending}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Attachments</Label>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full">
              <label
                htmlFor="file-upload"
                className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-700 transition-colors w-full sm:w-auto justify-center"
              >
                <Paperclip size={16} />
                <span className="truncate">Select Files</span>
              </label>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                multiple
                onChange={handleFileUploadChange}
                disabled={isPending}
                accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/png, application/pdf, image/jpeg"
              />
            </div>
          </div>

          {fileData && fileData.length > 0 && (
            <div
              className="space-y-2 max-h-40 overflow-y-auto pr-1"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "thin",
              }}
            >
              {fileData.map((item: any, index: any) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-3 py-2 bg-slate-50 rounded-md gap-2 w-full hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-2 break-all max-w-full">
                    <FileIcon className="h-4 w-4 text-slate-500 flex-shrink-0" />
                    <span className="text-sm text-slate-700 truncate max-w-[140px] xs:max-w-[180px] sm:max-w-xs md:max-w-sm lg:max-w-md">
                      {item.name}
                    </span>
                  </div>
                  <button
                    onClick={() => handleFilterFile(item.name)}
                    className="p-1 hover:bg-slate-200 rounded-full transition-colors self-start sm:self-auto"
                    aria-label="Remove file"
                    type="button"
                  >
                    <XIcon className="h-4 w-4 text-slate-500" />
                  </button>
                </div>
              ))}
            </div>
          )}
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
            {isPending ? "Creating..." : "Create"}
          </Button>
        </>
      }
    />
  );
};

export default CreateAnnouncementModal;
