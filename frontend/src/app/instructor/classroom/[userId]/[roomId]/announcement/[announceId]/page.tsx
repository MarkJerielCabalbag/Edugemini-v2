"use client";
import DeleteAnnouncementModal from "@/components/modals/instructor/DeleteAnnouncementModal";
import { Button } from "@/components/ui/button";
import { useGetAnnouncement } from "@/hooks/instructor.hooks";
import { FileProps } from "@/types/types";
import { formatTimestampToRelativeTime } from "@/utils/formatDate";
import { formatFileSize } from "@/utils/formatFileSizes";
import { ArrowLeft, DeleteIcon, Trash } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { userId, roomId, announceId } = useParams();
  const [showDeleteAnnouncementModal, setShowDeleteModal] =
    React.useState(false);

  const { data } = useGetAnnouncement(Number(announceId));

  return (
    <div className="p-8 bg-background max-w-7xl mx-auto">
      <div className="flex items-center mb-8">
        <Link
          href={`/instructor/classroom/${userId}/${roomId}`}
          className="flex items-center text-gray-600 hover:text-primary transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="font-medium">Back to Announcements</span>
        </Link>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between">
          <div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {data?.title}
              </h1>
              <div className="text-sm text-gray-500 mt-2">
                Posted{" "}
                {data?.createdAt &&
                  formatTimestampToRelativeTime(data?.createdAt as string)}
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed">
                {data?.description}
              </p>
            </div>
          </div>

          {showDeleteAnnouncementModal && (
            <DeleteAnnouncementModal
              open={showDeleteAnnouncementModal}
              onOpenChange={setShowDeleteModal}
            />
          )}

          <div>
            <Button
              onClick={() => setShowDeleteModal(!showDeleteAnnouncementModal)}
              variant={"destructive"}
            >
              Delete Announcement
              <Trash />
            </Button>
          </div>
        </div>

        {data?.listOfFiles && data.listOfFiles.length > 0 && (
          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Attached Files</h2>
            <div className="grid gap-4">
              {data?.listOfFiles.map((file: FileProps) => (
                <div
                  key={file.id}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">
                      {file.filename}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {formatFileSize(file.fileSize as number)}
                    </p>
                  </div>
                  <button className="px-4 py-2 text-sm text-primary hover:text-primary/80 font-medium">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
