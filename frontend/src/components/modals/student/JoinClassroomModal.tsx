"use client";

import Modal from "@/components/modal";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePostJoinClassroom } from "@/hooks/student.hooks";
import { ModalProps } from "@/types/types";
import { useQueryClient } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const JoinClassroomModal = ({ open, onOpenChange }: ModalProps) => {
  const [student, setStudent] = React.useState({
    firstname: "",
    middlename: "",
    lastname: "",
    sex: "",
    classcode: "",
  });

  const { userId } = useParams();

  const queryClient = useQueryClient();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setStudent({ ...student, [e.target.name]: e.target.value });

  const { mutateAsync, isPending } = usePostJoinClassroom(
    Number(userId),
    student.firstname,
    student.middlename,
    student.lastname,
    student.sex,
    student.classcode
  );

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      modalHeader="Join Classroom"
      modalBody={
        <div className="space-y-3">
          <p className="text-gray-600 text-md leading-relaxed">
            Join a classroom to receive updates, assignments, and announcements.
            Please fill in your information below.
          </p>
          <div className="space-y-2">
            <Label className="text-sm font-medium">Firstname*</Label>
            <Input
              placeholder="Enter your firstname"
              name="firstname"
              value={student.firstname}
              onChange={handleOnChange}
              disabled={isPending}
              autoFocus
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium">Middlename*</Label>
            <Input
              placeholder="Enter your middlename"
              name="middlename"
              value={student.middlename}
              onChange={handleOnChange}
              disabled={isPending}
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium">Lastname*</Label>
            <Input
              placeholder="Enter your lastname"
              name="lastname"
              value={student.lastname}
              onChange={handleOnChange}
              disabled={isPending}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <Label className="text-sm font-medium">Sex</Label>
              <Select
                onValueChange={(value) =>
                  setStudent({ ...student, sex: value })
                }
                disabled={isPending}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your sex" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-medium">Classcode</Label>
              <Input
                placeholder="Enter classcode"
                name="classcode"
                value={student.classcode}
                onChange={handleOnChange}
                disabled={isPending}
              />
            </div>
          </div>
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
                queryClient.invalidateQueries({ queryKey: ["classrooms"] });
              } catch (error) {
                console.log(error);
              }
            }}
          >
            {isPending ? "Joining..." : "Join"}
          </Button>
        </>
      }
    />
  );
};

export default JoinClassroomModal;
