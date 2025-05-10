"use client";
import Modal from "@/components/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileProps, ModalProps } from "@/types/types";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";
import { FileIcon, Paperclip } from "lucide-react";
import React from "react";

const CreateAnnouncementModal = ({ open, onOpenChange }: ModalProps) => {
  const [fileData, setFileData] = React.useState<FileProps[]>([]);

  console.log(fileData);

  const handleFileUploadChange = (data: any) => {
    if (data.target.files) {
      if (data.target.files.length > 0) {
        let fileData: any = [];
        for (let index = 0; index < data.target.files.length; index++) {
          fileData.push({
            name: data.target.files[index].name,
            size: data.target.files[index].size,
          });
        }
        setFileData(fileData);
      }
    }
  };
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
              //   className={`${
              //     isError ? "border-red-500 focus:border-red-500" : "w-full"
              //   } transition-all`}
              //   value={classroom.classname}
              //   name="classname"
              //   ref={inputRef}
              //   onChange={handleOnChange}
              //   autoFocus
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium">Description</Label>
            <Input
              placeholder="e.g., Mathematics"
              //   value={classroom.subject}
              //   name="subject"
              //   onChange={handleOnChange}
              //   className={`${
              //     isError ? "border-red-500 focus:border-red-500" : "w-full"
              //   } transition-all`}
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
                onChange={handleFileUploadChange}
                accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/png, application/pdf, image/jpeg"
              />
            </div>
          </div>

          {fileData &&
            fileData.length > 0 &&
            fileData.map((item: any, index: any) => {
              return (
                <div key={index} className="flex gap-2">
                  <FileIcon /> - {item.name}
                </div>
              );
            })}
        </div>
      }
      modalFooter={
        <>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button>Create</Button>
        </>
      }
    />
  );
};

export default CreateAnnouncementModal;
