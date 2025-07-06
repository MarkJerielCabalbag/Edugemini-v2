"use client";
import {
  useGetStudentFiles,
  useGetStudentInfo,
} from "@/hooks/instructor.hooks";
import { FileProps } from "@/types/types";
import { formatFileSize } from "@/utils/formatFileSizes";
import { ArrowLeft, Book } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const page = () => {
  const { studentId, roomId, workId, userId } = useParams();
  const { data: student } = useGetStudentInfo(
    Number(roomId),
    Number(studentId)
  );

  const { data: studentFiles } = useGetStudentFiles(
    Number(studentId),
    Number(workId),
    Number(roomId)
  );

  const router = useRouter();

  console.log("Student Files:", studentFiles);

  return (
    <div className="p-8 bg-background max-w-7xl mx-auto">
      <Link
        href={`/instructor/classroom/${userId}/${roomId}/classwork/${workId}`}
        className="inline-flex items-center text-gray-600 hover:text-primary mb-6 transition-all"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Link>
      <div className="space-y-4">
        {/* Student Header - Simplified and prominent */}
        <div className="flex items-center gap-3 bg-card rounded-lg">
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
              <p className="font-medium">
                {studentFiles?.map((file: FileProps) => file.status)}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Score</p>
              <p className="font-medium">
                {studentFiles?.map(
                  (file: FileProps) =>
                    file?.relatedToOutput?.relatedToScore.score
                )}
              </p>
            </div>
          </div>
        </div>

        {studentFiles?.length === 0 && (
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Submitted Files</h2>
            <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg bg-muted/50">
              <Book className="w-12 h-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-muted-foreground">
                No Submissions Found
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {student?.firstname} {student?.lastname} hasn't uploaded any
                files yet.
              </p>
            </div>
          </div>
        )}

        {studentFiles?.length > 0 && studentFiles && (
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Submitted Files</h2>
            {studentFiles.map((file: FileProps) => (
              <div
                key={file.outputId}
                className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/10 transition-all duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Book className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{file.filename}</p>
                    <p className="text-sm text-muted-foreground">
                      {formatFileSize(file.fileSize as number)} • Submitted on{" "}
                      {new Date().toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                    onClick={() => window.open(file?.publicFileUrl, "_blank")}
                  >
                    View
                  </button>
                  <button
                    className="px-3 py-1 text-sm border border-input bg-background hover:bg-accent rounded-md"
                    onClick={() => window.open(file?.publicFileUrl, "_blank")}
                  >
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {studentFiles?.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Student Feedback</h2>
            {studentFiles?.map((file: FileProps) => (
              <div
                key={file.outputId}
                className="p-4 rounded-lg border bg-card"
              >
                <pre className="w-full h-full text-pretty text-justify opacity-80 leading-9">
                  {file.relatedToOutput?.relatedToFeedback.feedback}
                </pre>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
