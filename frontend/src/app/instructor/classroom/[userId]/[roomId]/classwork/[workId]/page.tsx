"use client";
import DeleteClassworkModal from "@/components/modals/instructor/DeleteClassworkModal";
import UpdateClassworkModal from "@/components/modals/instructor/UpdateClassworkModal";
import { Button } from "@/components/ui/button";
import { useGetClasswork, useGetPeople } from "@/hooks/instructor.hooks";
import { FileProps, StudentProps } from "@/types/types";
import { formatFileSize } from "@/utils/formatFileSizes";
import { ArrowLeft, Book, Trash } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { toDate, format } from "date-fns";
import DataTable from "@/components/table/table";
import { columns } from "@/components/table/column";
const page = () => {
  const { workId, userId, roomId } = useParams();
  const { data } = useGetClasswork(Number(workId));
  console.log(data);
  const [showDeleteClassworkModal, setShowDeleteClassworkModal] =
    React.useState(false);
  const [showUpdateClassworkModal, setShowUpdateClassworkModal] =
    React.useState(false);

  const { data: students } = useGetPeople(Number(roomId));

  const approvesStudents = students?.filter(
    (student: StudentProps) => student.status === "APPROVED"
  );

  console.log(approvesStudents);

  const router = useRouter();

  return (
    <div className="p-8 bg-background max-w-7xl mx-auto">
      <Link
        href={`/instructor/classroom/${userId}/${roomId}/classwork`}
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
                Due {format(toDate(data.date), "MMM d, yyyy")}
              </p>
            )}
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              className="hover:bg-gray-50"
              onClick={() => setShowUpdateClassworkModal(true)}
            >
              <Book className="w-4 h-4 mr-2" />
              Edit
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-red-600 hover:bg-red-50"
              onClick={() => setShowDeleteClassworkModal(true)}
            >
              <Trash className="w-4 h-4 mr-2" />
              Delete
            </Button>
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
              {data.criteria.map((file: FileProps) => (
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

        {/* {students submissions part} */}
        {approvesStudents && approvesStudents?.length > 0 && (
          <div className="rounded-lg border p-5">
            <h2 className="text-lg font-medium mb-4">Students Submissions</h2>
            <div className="space-y-3">
              <DataTable
                data={approvesStudents}
                columns={columns}
                onRowClick={(row: any) =>
                  router.push(
                    `/instructor/classroom/${userId}/${roomId}/classwork/${workId}/${row.userId}`
                  )
                }
              />
            </div>
          </div>
        )}
      </div>

      <UpdateClassworkModal
        open={showUpdateClassworkModal}
        onOpenChange={setShowUpdateClassworkModal}
      />
      <DeleteClassworkModal
        open={showDeleteClassworkModal}
        onOpenChange={setShowDeleteClassworkModal}
      />
    </div>
  );
};

export default page;
