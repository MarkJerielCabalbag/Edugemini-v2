"use client";
import { useGetAnnouncements } from "@/hooks/instructor";
import { AnnouncementProps } from "@/types/types";
import { formatTimestampToRelativeTime } from "@/utils/formatDate";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { userId, roomId } = useParams();

  const { data } = useGetAnnouncements(Number(roomId));
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-background max-w-7xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Announcements</h1>
        <p className="text-xs sm:text-sm text-muted-foreground">
          These are the announcements
        </p>
      </div>
      <div className="grid gap-4 sm:gap-6">
        {data?.map((announceItem: AnnouncementProps) => (
          <Link
            key={announceItem.id}
            href={`/student/classroom/${userId}/${roomId}/announcement/${announceItem.id}`}
            className="block"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="border rounded-lg p-3 sm:p-4 transition-shadow hover:shadow-md bg-background">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg">
                      {announceItem.title}
                    </h3>
                    {announceItem.description && (
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        {announceItem.description}
                      </p>
                    )}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
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
