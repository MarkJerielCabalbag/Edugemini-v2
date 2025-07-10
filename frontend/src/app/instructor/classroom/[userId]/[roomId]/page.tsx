"use client";

import CreateAnnouncementModal from "@/components/modals/instructor/CreateAnnouncementModal";
import { Button } from "@/components/ui/button";
import { useGetAnnouncements } from "@/hooks/instructor.hooks";
import { AnnouncementProps } from "@/types/types";
import { formatTimestampToRelativeTime } from "@/utils/formatDate";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { roomId, userId } = useParams();
  const { data } = useGetAnnouncements(Number(roomId));
  const [showCreateAnnouncementModal, setShowCreateAnnouncementModal] =
    React.useState(false);
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-background max-w-7xl mx-auto">
      {showCreateAnnouncementModal && (
        <CreateAnnouncementModal
          open={showCreateAnnouncementModal}
          onOpenChange={setShowCreateAnnouncementModal}
        />
      )}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-6">
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-3xl font-bold break-words">
            Announcements
          </h1>
          <p className="text-muted-foreground">Keep your students informed</p>
          <Button
            className="mt-4 w-full sm:w-auto"
            onClick={() => setShowCreateAnnouncementModal(true)}
          >
            New Announcement
          </Button>
        </div>
      </div>

      {data?.length === 0 && (
        <div className="text-center text-muted-foreground">
          No Announcements
        </div>
      )}

      {/* Main Content */}
      <div className="grid gap-6">
        {data?.map((announceItem: AnnouncementProps) => (
          <Link
            key={announceItem.id}
            href={`/instructor/classroom/${userId}/${roomId}/announcement/${announceItem.id}`}
            className="block"
          >
            <div className="space-y-4">
              <div className="border rounded-lg p-4 hover:shadow transition-shadow bg-background">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="font-semibold break-words">
                      {announceItem.title}
                    </h3>
                    {announceItem.description && (
                      <p className="text-sm text-muted-foreground mt-1 break-words">
                        {announceItem.description}
                      </p>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground sm:text-right whitespace-nowrap">
                    {formatTimestampToRelativeTime(
                      announceItem.createdAt as string
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
