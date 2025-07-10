"use client";
import Modal from "@/components/modal";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePostClassroom } from "@/hooks/instructor.hooks";
import { ModalProps } from "@/types/types";
import { useParams } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const CreateClassroomModal = ({ open, onOpenChange }: ModalProps) => {
  const [classroom, setClassroom] = React.useState({
    classname: "",
    subject: "",
    section: "",
    room: "",
  });

  const { userId } = useParams();

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setClassroom({ ...classroom, [e.target.name]: e.target.value });

  const { mutateAsync, isPending, isError, error } = usePostClassroom(
    classroom.classname,
    classroom.subject,
    classroom.section,
    classroom.room,
    Number(userId),
    () => onOpenChange(false),
    () => onOpenChange(true)
  );

  return (
    <Modal
      modalHeader={"Create New Classroom"}
      modalBody={
        <div className="space-y-3">
          <p className="text-gray-600 text-md leading-relaxed">
            Create a new classroom to start managing your courses and students.
          </p>
          <div className="space-y-2">
            <Label className="text-sm font-medium">Classroom Name*</Label>
            <Input
              placeholder="e.g., Mathematics 101"
              className={`${
                isError ? "border-red-500 focus:border-red-500" : "w-full"
              } transition-all`}
              value={classroom.classname}
              name="classname"
              ref={inputRef}
              onChange={handleOnChange}
              autoFocus
              disabled={isPending}
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium">Subject*</Label>
            <Input
              placeholder="e.g., Mathematics"
              value={classroom.subject}
              name="subject"
              onChange={handleOnChange}
              className={`${
                isError ? "border-red-500 focus:border-red-500" : "w-full"
              } transition-all`}
              disabled={isPending}
            />
          </div>

          <div className="flex flex-row justify-between sm:flex-col gap-3">
            <div className="space-y-3">
              <Label className="text-sm font-medium">Section</Label>
              <Input
                placeholder="e.g., A-1"
                value={classroom.section}
                name="section"
                onChange={handleOnChange}
                className={`${
                  isError ? "border-red-500 focus:border-red-500" : "w-full"
                } transition-all`}
                disabled={isPending}
              />
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-medium">Room</Label>
              <Input
                placeholder="e.g., 301"
                name="room"
                value={classroom.room}
                onChange={handleOnChange}
                className={`${
                  isError ? "border-red-500 focus:border-red-500" : "w-full"
                } transition-all`}
                disabled={isPending}
              />
            </div>
          </div>

          {isError && (
            <p className="text-sm text-red-500">
              Please fill in all required fields marked with *
            </p>
          )}
        </div>
      }
      modalFooter={
        <div className="flex gap-3">
          <AlertDialogCancel
            className="flex-1"
            disabled={isPending}
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </AlertDialogCancel>
          <Button
            className="flex-1"
            disabled={isPending}
            onClick={async () => {
              try {
                await mutateAsync();
                toast.success("Classroom created successfully!");
              } catch (error) {}
            }}
          >
            {isPending ? "Creating..." : "Create Classroom"}
          </Button>
        </div>
      }
      open={open}
      onOpenChange={() => onOpenChange(!open)}
    />
  );
};

export default CreateClassroomModal;
