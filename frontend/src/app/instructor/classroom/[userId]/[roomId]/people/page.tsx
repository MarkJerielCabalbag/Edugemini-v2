"use client";

import ApprovedStudentModal from "@/components/modals/instructor/ApprovedStudentModal";
import DeclinedStudentModal from "@/components/modals/instructor/DeclinedStudentModal";
import { Button } from "@/components/ui/button";
import { useGetPeople } from "@/hooks/instructor.hooks";
import { StudentProps } from "@/types/types";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const { roomId, workId } = useParams();

  const { data } = useGetPeople(Number(roomId), Number(workId));
  const [openDeclinedModal, setdeclinedModal] = useState(false);
  const [openApprovedModal, setApprovedModal] = useState(false);
  const [studentId, setStudentId] = useState(0);

  const pending = data?.filter(
    (student: StudentProps) => student.relatedToStudent?.status === "PENDING"
  );

  const approved = data?.filter(
    (student: StudentProps) => student?.relatedToStudent?.status === "APPROVED"
  );

  const declined = data?.filter(
    (student: StudentProps) => student?.relatedToStudent?.status === "DECLINED"
  );

  return (
    <div className="p-8 bg-background max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Class Participants</h2>
        <p className="text-muted-foreground mt-2">
          Manage student enrollment requests and current participants.
        </p>
      </div>

      {openApprovedModal && (
        <ApprovedStudentModal
          studentId={studentId}
          open={openApprovedModal}
          onOpenChange={setApprovedModal}
        />
      )}

      {openDeclinedModal && (
        <DeclinedStudentModal
          studentId={studentId}
          open={openDeclinedModal}
          onOpenChange={setdeclinedModal}
        />
      )}

      {pending && pending.length > 0 && (
        <div className="mt-8 p-6 border rounded-lg bg-card shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">Pending Requests</h2>
            <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-full font-medium">
              {pending.length} {pending.length === 1 ? "request" : "requests"}
            </span>
          </div>
          <div className="space-y-3">
            {pending.map((student: StudentProps) => (
              <div
                key={student.userId}
                className="flex items-center justify-between p-4 bg-card border rounded-lg hover:bg-accent/10 transition-colors"
              >
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-yellow-200 flex items-center justify-center">
                    <span className="text-yellow-800 text-lg font-semibold">
                      {student.firstname[0]}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      {student.firstname} {student.lastname}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Awaiting your approval
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white"
                    size="sm"
                    onClick={() => {
                      setApprovedModal(!openApprovedModal);
                      setStudentId(student.userId as number);
                    }}
                  >
                    Approve Request
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => {
                      setdeclinedModal(!openDeclinedModal);
                      setStudentId(studentId as number);
                    }}
                  >
                    Decline
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {approved && approved.length > 0 && (
        <div className="mt-8 p-6 border rounded-lg bg-card shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">Active Students</h2>
            <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full font-medium">
              {approved.length} {approved.length === 1 ? "student" : "students"}
            </span>
          </div>
          <div className="space-y-3">
            {approved.map((student: StudentProps) => (
              <div
                key={student.userId}
                className="flex items-center justify-between p-4 bg-card border rounded-lg hover:bg-accent/10 transition-colors"
              >
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-green-200 flex items-center justify-center">
                    <span className="text-green-800 text-lg font-semibold">
                      {student.firstname[0]}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      {student.firstname} {student.lastname}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Active student
                    </p>
                  </div>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => {
                    setdeclinedModal(!openDeclinedModal);
                    setStudentId(studentId as number);
                  }}
                >
                  Remove Student
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {declined && declined.length > 0 && (
        <div className="mt-8 p-6 border rounded-lg bg-card shadow-sm opacity-75">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">Declined Requests</h2>
            <span className="px-3 py-1 text-sm bg-red-100 text-red-800 rounded-full font-medium">
              {declined.length} declined
            </span>
          </div>
          <div className="space-y-3">
            {declined.map((student: StudentProps) => (
              <div
                key={student.userId}
                className="flex items-center justify-between p-4 bg-card border rounded-lg hover:bg-accent/10 transition-colors"
              >
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-red-200 flex items-center justify-center">
                    <span className="text-red-800 text-lg font-semibold">
                      {student.firstname[0]}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      {student.firstname} {student.lastname}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Request declined
                    </p>
                  </div>
                </div>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  size="sm"
                  onClick={() => {
                    setApprovedModal(!openApprovedModal);
                    setStudentId(student.userId as number);
                  }}
                >
                  Approve Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
