"use client";

import { Button } from "@/components/ui/button";
import { useGetClasswork } from "@/hooks/instructor.hooks";
import { FileProps } from "@/types/types";
import { formatFileSize } from "@/utils/formatFileSizes";
import { ArrowLeft, Book, Loader, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { toDate, format, isAfter, isSameHour } from "date-fns";
import {
  useGetFiles,
  usePostCancelSubmition,
  usePostRemoveFile,
  usePostSelectedFiles,
  usePostSubmit,
} from "@/hooks/student.hooks";

import { useQueryClient } from "@tanstack/react-query";
import { formatToStandardTime } from "@/utils/formatTimeStandard";

const page = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { workId, userId, roomId } = useParams();
  const { data } = useGetClasswork(Number(workId));

  const date = format(new Date(), "MMM d, yyyy");
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  let time = formatToStandardTime(`${hours}:${minutes}`);

  const {
    data: files,
    refetch: reloadSelectedFiles,
    isRefetching: refetchingSelectedFiles,
    isFetching,
    isLoading,
  } = useGetFiles(Number(roomId), Number(workId), Number(userId));

  const { mutateAsync: selectFiles, isPending: isPendingSelecteingFiles } =
    usePostSelectedFiles(
      Number(roomId),
      Number(workId),
      Number(userId),
      selectedFiles
    );

  const { mutateAsync: removeFile, isPending: isPendingRemovingFile } =
    usePostRemoveFile();

  const {
    mutateAsync: submitFile,
    isPending: isPendingSubmit,
    isSuccess: isSuccessSubmitted,
  } = usePostSubmit(Number(workId), Number(roomId), Number(userId), time, date);

  const { mutateAsync: cancel, isPending: isPendingCancel } =
    usePostCancelSubmition(Number(workId), Number(roomId), Number(userId));

  const queryClient = useQueryClient();

  // console.log(
  //   "Files: ",
  //   files?.flatMap((file: FileProps) => file.status === "SUBMITTED")
  // );

  const isOverdueDate = isAfter(date, data?.date);
  const isOverdueTime = isSameHour(data?.time, time);
  console.log(data);
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-background max-w-7xl mx-auto">
      <Link
        href={`/student/classroom/${userId}/${roomId}/classwork`}
        className="inline-flex items-center text-gray-600 hover:text-primary mb-4 sm:mb-6 transition-all"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Link>

      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start pb-4 border-b gap-2">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
              {data?.title}
            </h1>
            {data?.date && (
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Due on {format(toDate(data.date), "MMM d, yyyy")}, {data?.time}
              </p>
            )}
          </div>
        </div>

        {/* Instructions */}
        {data?.instruction && (
          <div className="rounded-lg border p-4 sm:p-5">
            <h2 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">
              Instructions
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {data.instruction}
            </p>
          </div>
        )}

        {/* Criteria Files */}
        {data?.criteria && data.criteria.length > 0 && (
          <div className="rounded-lg border p-4 sm:p-5">
            <h2 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">
              Criteria Files
            </h2>
            <div className="space-y-3">
              {data?.criteria.map((file: FileProps) => (
                <div
                  key={file.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 rounded-md border hover:border-primary transition-colors gap-2"
                >
                  <div className="flex items-center">
                    <Book className="w-4 h-4 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium text-xs sm:text-sm">
                        {file.filename}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatFileSize(file.fileSize as number)}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-primary/10 mt-2 sm:mt-0"
                    onClick={() => window.open(file.publicFileUrl, "_blank")}
                  >
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {isFetching || isLoading || isPendingSelecteingFiles ? (
          <div className="rounded-lg border p-8 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-500">Loading please wait...</p>
          </div>
        ) : (
          <div className="rounded-lg border p-4 sm:p-6 bg-white shadow-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-5 gap-2">
              <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-0">
                Submitted Files
              </h2>
              <Button
                size="sm"
                disabled={
                  refetchingSelectedFiles ||
                  (date === data?.date && time === data?.time)
                }
                onClick={() => reloadSelectedFiles()}
              >
                {refetchingSelectedFiles ? (
                  <div className="flex gap-2 items-center">
                    <LoaderCircle className="animate-spin" /> reloading...
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <Loader />
                    Reload
                  </div>
                )}
              </Button>
            </div>
            {files?.length !== 0 ? (
              <>
                <div className="space-y-3">
                  {files?.map((file: FileProps) => (
                    <div
                      key={file.outputId}
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg border bg-gray-50 hover:bg-gray-100 transition-all duration-200 gap-2"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-full bg-primary/10">
                          <Book className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">
                            {file.filename}
                          </p>
                          <p className="text-xs text-gray-500">
                            {formatFileSize(file.fileSize as number)}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-red-50 hover:text-red-600 transition-colors mt-2 sm:mt-0 "
                        disabled={
                          isPendingRemovingFile ||
                          (date === data?.date && time === data?.time) ||
                          files?.some(
                            (file: FileProps) => file.status === "SUBMITTED"
                          )
                        }
                        onClick={async () => {
                          try {
                            await removeFile(file?.outputId as number);

                            queryClient.invalidateQueries({
                              queryKey: ["files"],
                            });
                          } catch (error) {
                            console.log(error);
                          }
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed">
                <Book className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">
                  No files attached yet
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Upload files to submit your work
                </p>
              </div>
            )}
          </div>
        )}

        <label
          htmlFor="file-upload"
          className="flex gap-2 items-center justify-center bg-primary text-white p-2 rounded-sm cursor-pointer w-full mx-auto"
        >
          <input
            id="file-upload"
            type="file"
            multiple
            className="w-full"
            style={{ display: "none" }}
            onChange={async (e) => {
              try {
                e.target.files && setSelectedFiles(Array.from(e.target.files));

                await selectFiles();
                await queryClient.invalidateQueries({ queryKey: ["files"] });
                await queryClient.cancelQueries({ queryKey: ["files"] });
              } catch (error) {}
            }}
          />
          <p className="font-medium text-xs sm:text-sm">Select Files</p>
        </label>

        {files?.length !== 0 && (
          <div className="flex flex-col sm:flex-row w-full gap-2 items-center">
            <Button
              className="w-full sm:w-1/2 rounded-sm bg-transparent border border-primary text-primary hover:bg-primary/10"
              disabled={
                isOverdueDate ||
                (time === data?.time && isOverdueDate) ||
                isPendingSubmit ||
                !files?.length ||
                files?.some((file: FileProps) => file.status === "SUBMITTED")
              }
              onClick={async () => {
                try {
                  await submitFile();
                  await queryClient.invalidateQueries({ queryKey: ["files"] });
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              {isPendingSubmit ? "Submitting..." : "Submit"}
            </Button>
            <Button
              className="w-full sm:w-1/2"
              variant={"destructive"}
              disabled={
                isOverdueDate ||
                (time === data?.time && isOverdueDate) ||
                isPendingSubmit ||
                !files?.length ||
                isPendingCancel
              }
              onClick={async () => {
                try {
                  await cancel();
                  await queryClient.invalidateQueries({ queryKey: ["files"] });
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              {isPendingCancel ? "Cancelling..." : "Cancel"}
            </Button>
          </div>
        )}

        {files?.map((feedback: FileProps) => (
          <div key={feedback.outputId}>
            {feedback.relatedToOutput?.relatedToScore?.score ? (
              <div className="rounded-lg border p-4 sm:p-6 bg-white shadow-sm">
                <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">
                  Score
                </h2>
                <div>
                  <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">
                    {feedback.relatedToOutput?.relatedToScore?.score}
                  </h2>
                </div>
              </div>
            ) : null}
          </div>
        ))}

        {files?.map((feedback: FileProps) => (
          <div key={feedback.outputId}>
            {feedback.relatedToOutput?.relatedToFeedback?.feedback ? (
              <div className="rounded-lg border p-4 sm:p-6 bg-white shadow-sm">
                <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">
                  Feedback
                </h2>
                <div>
                  <pre className="w-full h-full text-pretty text-justify opacity-80 leading-7 sm:leading-9 text-xs sm:text-base">
                    {feedback.relatedToOutput?.relatedToFeedback?.feedback}
                  </pre>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
