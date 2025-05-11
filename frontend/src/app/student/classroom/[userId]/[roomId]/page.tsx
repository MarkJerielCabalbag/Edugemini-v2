"use client";
import { useGetAnnouncements } from "@/hooks/instructor.hooks";
import { AnnouncementProps } from "@/types/types";
import { formatTimestampToRelativeTime } from "@/utils/formatDate";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { userId, roomId } = useParams();

  const { data } = useGetAnnouncements(Number(roomId));
  return (
    <div className="p-8 bg-background max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Announcements</h1>
        <p className="text-sm text-muted-foreground">
          These are the announcements
        </p>
      </div>
      <div className="grid gap-6">
        {data?.map((announceItem: AnnouncementProps) => (
          <Link
            key={announceItem.id}
            href={`/student/classroom/${userId}/${roomId}/announcement/${announceItem.id}`}
          >
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{announceItem.title}</h3>
                    {announceItem.description && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {announceItem.description}
                      </p>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
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
