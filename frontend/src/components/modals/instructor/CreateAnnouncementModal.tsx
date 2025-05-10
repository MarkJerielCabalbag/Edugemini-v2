"use client";
import { instructor } from "@/api/instructor.api";
import Modal from "@/components/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePostAnnouncement } from "@/hooks/instructor.hooks";
import { AnnouncementProps, FileProps, ModalProps } from "@/types/types";
import { baseUrl } from "@/utils/baseUrl";
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

  //   async function handleUpload() {
  //     try {
  //       const formData = new FormData();
  //       formData.append("title", announcement?.title as string);
  //       formData.append("description", announcement?.description as string);

  //       fileData.forEach((file) => {
  //         formData.append("files", file);
  //       });

  //       console.log(formData);

  //       const response = await fetch(
  //         `${baseUrl}/instructor/createAnnouncement/${roomId}`,
  //         {
  //           method: "POST",
  //           body: formData,
  //         }
  //       );

  //       if (!response.ok) {
  //         const errorData = await response.json();
  //         throw new Error(errorData.message || "An Error Occurred");
  //       }

  //       const data = await response.json();
  //       return data;
  //     } catch (e) {
  //       console.error(e);
  //       throw e;
  //     }
  //   }

  const { mutateAsync } = usePostAnnouncement(
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
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium">Description</Label>
            <Input
              placeholder="e.g., Mathematics"
              value={announcement.description}
              name="description"
              onChange={handleOnChange}
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Attachments</Label>
            <div className="flex items-center gap-2">
              <label
                htmlFor="file-upload"
                className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-700 transition-colors"
              >
                <Paperclip size={16} />
                <span>Select Files</span>
              </label>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                multiple
                onChange={(e) => handleFileUploadChange(e)}
                accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/png, application/pdf, image/jpeg"
              />
            </div>
          </div>

          {fileData &&
            fileData.length > 0 &&
            fileData.map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between px-3 py-2 bg-slate-50 rounded-md"
                >
                  <div className="flex items-center gap-2">
                    <FileIcon className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-700">{item.name}</span>
                  </div>
                  <button
                    onClick={() => handleFilterFile(item.name)}
                    className="p-1 hover:bg-slate-200 rounded-full transition-colors"
                  >
                    <XIcon className="h-4 w-4 text-slate-500" />
                  </button>
                </div>
              );
            })}
        </div>
      }
      modalFooter={
        <>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            onClick={async () => {
              try {
                await mutateAsync();
                onOpenChange(false);
              } catch (error) {
                console.log(error);
              }
            }}
          >
            Create
          </Button>
        </>
      }
    />
  );
};

export default CreateAnnouncementModal;
