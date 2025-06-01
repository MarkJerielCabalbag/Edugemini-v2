"use client";

import { Button } from "@/components/ui/button";
import { useGetClasswork } from "@/hooks/instructor.hooks";
import { FileProps } from "@/types/types";
import { formatFileSize } from "@/utils/formatFileSizes";
import { ArrowLeft, Book, Loader, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { toDate, format, isAfter, isPast, isSameHour } from "date-fns";
import {
  useGetFiles,
  usePostRemoveFile,
  usePostSelectedFiles,
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

  const queryClient = useQueryClient();

  const isOverdueDate = isAfter(date, data?.date);
  const isOverdueTime = isSameHour(data?.time, time);

  return (
    <div className="p-8 bg-background max-w-7xl mx-auto">
      <Link
        href={`/student/classroom/${userId}/${roomId}/classwork`}
        className="inline-flex items-center text-gray-600 hover:text-primary mb-6 transition-all"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Link>

      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-start pb-4 border-b">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {data?.title}
            </h1>
            {data?.date && (
              <p className="text-sm text-gray-500 mt-1">
                Due on {format(toDate(data.date), "MMM d, yyyy")}, {data?.time}
              </p>
            )}
          </div>
        </div>

        {/* Instructions */}
        {data?.instruction && (
          <div className="rounded-lg border p-5">
            <h2 className="text-lg font-medium mb-3">Instructions</h2>
            <p className="text-gray-700 leading-relaxed">{data.instruction}</p>
          </div>
        )}

        {/* Criteria Files */}
        {data?.criteria && data.criteria.length > 0 && (
          <div className="rounded-lg border p-5">
            <h2 className="text-lg font-medium mb-4">Criteria Files</h2>
            <div className="space-y-3">
              {data?.criteria.map((file: FileProps) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between p-3 rounded-md border hover:border-primary transition-colors"
                >
                  <div className="flex items-center">
                    <Book className="w-4 h-4 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium text-sm">{file.filename}</p>
                      <p className="text-xs text-gray-500">
                        {formatFileSize(file.fileSize as number)}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-primary/10"
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
          <div className="rounded-lg border p-6 bg-white shadow-sm">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-semibold mb-4">Submitted Files</h2>
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
                    reload
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
                      className="flex items-center justify-between p-4 rounded-lg border bg-gray-50 hover:bg-gray-100 transition-all duration-200"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-full bg-primary/10">
                          <Book className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {file.filename}
                          </p>
                          <p className="text-sm text-gray-500">
                            {formatFileSize(file.fileSize as number)}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-red-50 hover:text-red-600 transition-colors"
                        disabled={
                          isPendingRemovingFile ||
                          (date === data?.date && time === data?.time)
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
                <p className="text-sm text-gray-400">
                  Upload files to submit your work
                </p>
              </div>
            )}
          </div>
        )}

        <label
          htmlFor="file-upload"
          className="flex gap-2 items-center justify-center bg-primary text-white p-2 rounded-sm"
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
          <p className="font-medium text-sm">Select Files</p>
        </label>

        {files?.length !== 0 && (
          <Button
            className="w-full rounded-sm"
            disabled={isOverdueDate || (time === data?.time && isOverdueDate)}
          >
            Submit
          </Button>
        )}

        <div className="rounded-lg border p-6 bg-white shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Score</h2>
          <p>90</p>
        </div>

        <div className="rounded-lg border p-6 bg-white shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Feedback</h2>
          <p>here is the feedback</p>
        </div>
      </div>
    </div>
  );
};

export default page;
