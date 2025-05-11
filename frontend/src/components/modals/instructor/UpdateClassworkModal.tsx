"use client";
import Modal from "@/components/modal";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePatchClasswork } from "@/hooks/instructor.hooks";
import { ModalProps } from "@/types/types";
import { useQueryClient } from "@tanstack/react-query";
import { FileIcon, Paperclip, XIcon } from "lucide-react";
import { useParams } from "next/navigation";
import React, { ChangeEvent } from "react";

const UpdateClassworkModal = ({ open, onOpenChange }: ModalProps) => {
  const [classwork, setClasswork] = React.useState({
    title: "",
    instruction: "",
    date: "",
    time: "",
    file: null as File | null,
  });
  const { roomId, workId } = useParams();

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = usePatchClasswork(
    Number(roomId),
    Number(workId),
    classwork.title,
    classwork.instruction,
    classwork.date,
    classwork.time,
    classwork.file
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setClasswork({ ...classwork, [e.target.name]: e.target.value });
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      modalHeader="Update Classwork"
      modalBody={
        <div className="space-y-3">
          <p className="text-gray-600 text-md leading-relaxed">
            Update your classwork for your students.
          </p>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Classwork Title*</Label>
            <Input
              placeholder="e.g., Mathematics 101"
              value={classwork.title}
              name="title"
              onChange={handleChange}
              disabled={isPending}
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium">
              Instruction (Optional)
            </Label>
            <Input
              placeholder="e.g., Mathematics 101"
              value={classwork.instruction}
              name="instruction"
              onChange={handleChange}
              disabled={isPending}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <Label className="text-sm font-medium">Due Date</Label>
              <Input
                type="date"
                placeholder="e.g., 301"
                name="date"
                value={classwork.date}
                disabled={isPending}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-medium">Time</Label>
              <Input
                type="time"
                placeholder="e.g., 301"
                name="time"
                value={classwork.time}
                onChange={handleChange}
                disabled={isPending}

                // className={`${
                //   isError ? "border-red-500 focus:border-red-500" : "w-full"
                // } transition-all`}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Attachments</Label>
            <div className="flex items-center gap-2">
              <label
                htmlFor="file-upload"
                className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-700 transition-colors"
              >
                <Paperclip size={16} />
                <span>Select the criteria</span>
              </label>
              <input
                disabled={isPending}
                id="file-upload"
                type="file"
                className="hidden"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setClasswork({
                    ...classwork,
                    file: e.target.files?.[0] || null,
                  })
                }
                accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, image/png, application/pdf, image/jpeg"
              />
            </div>
          </div>

          {classwork.file && (
            <div className="flex items-center justify-between px-3 py-2 bg-slate-50 rounded-md">
              <div className="flex items-center gap-2">
                <FileIcon className="h-4 w-4 text-slate-500" />
                <span className="text-sm text-slate-700">
                  {classwork.file.name}
                </span>
              </div>
              <button
                disabled={isPending}
                onClick={() => setClasswork({ ...classwork, file: null })}
                className="p-1 hover:bg-slate-200 rounded-full transition-colors"
              >
                <XIcon className="h-4 w-4 text-slate-500" />
              </button>
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
                queryClient.invalidateQueries({ queryKey: ["classwork"] });
              } catch (error) {
                throw error;
              }
            }}
          >
            {isPending ? "Updating..." : "Update"}
          </Button>
        </>
      }
    />
  );
};

export default UpdateClassworkModal;
