"use client";
import { useGetStudentInfo } from "@/hooks/instructor.hooks";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { studentId, roomId } = useParams();
  const { data: student } = useGetStudentInfo(
    Number(roomId),
    Number(studentId)
  );
  return (
    <div className="p-8 bg-background max-w-7xl mx-auto">
      <div className="space-y-4">
        {/* Student Header - Simplified and prominent */}
        <div className="flex items-center gap-3 bg-card p-4 rounded-lg">
          <h1 className="text-xl font-semibold">
            {student?.lastname}, {student?.firstname}{" "}
            {student?.middlename.charAt(0)}.
          </h1>
          <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-sm">
            Student
          </span>
        </div>

        {/* Combined Information Card - All essential info in one place */}
        <div className="p-4 border rounded-lg bg-card">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground">Student Username</p>
              <p className="font-medium">{student?.relatedToUser?.username}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Email</p>
              <p className="font-medium">{student?.relatedToUser?.email}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Submission Status</p>
              <p className="font-medium">Pending</p>
            </div>
            <div>
              <p className="text-muted-foreground">Last Updated</p>
              <p className="font-medium">N/A</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
