"use client";

import CreateAnnouncementModal from "@/components/modals/instructor/CreateAnnouncementModal";
import { Button } from "@/components/ui/button";
import { useGetAnnouncements } from "@/hooks/instructor.hooks";
import { AnnouncementProps } from "@/types/types";
import { formatTimestampToRelativeTime } from "@/utils/formatDate";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { roomId } = useParams();
  const { data } = useGetAnnouncements(Number(roomId));
  const [showCreateAnnouncementModal, setShowCreateAnnouncementModal] =
    React.useState(false);
  return (
    <div className="p-8 bg-background max-w-7xl mx-auto">
      {showCreateAnnouncementModal && (
        <CreateAnnouncementModal
          open={showCreateAnnouncementModal}
          onOpenChange={setShowCreateAnnouncementModal}
        />
      )}
      <div className="flex justify-between items-center mb-8">
        <div className="">
          <h1 className="text-3xl font-bold">Announcements</h1>
          <p className="text-muted-foreground">Keep your students informed</p>
          <Button
            className="mt-4"
            onClick={() => setShowCreateAnnouncementModal(true)}
          >
            New Announcement
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 my-4">
          <div className="border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">24</div>
            <div className="text-sm text-muted-foreground">
              Total Announcements
            </div>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">156</div>
            <div className="text-sm text-muted-foreground">Student Views</div>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">12</div>
            <div className="text-sm text-muted-foreground">Comments</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6">
        {data?.map((announceItem: AnnouncementProps) => (
          <div className="space-y-4" key={announceItem.id}>
            <div className="border rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{announceItem.title}</h3>
                  {announceItem.decription && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {announceItem.decription}
                    </p>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">
                  {formatTimestampToRelativeTime(announceItem?.createdAt)}
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Recent Announcement */}
        {/* <div className="border rounded-lg p-6 bg-muted/10">
          <div className="flex items-start justify-between">
            <div>
              <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                New
              </span>
              <h2 className="text-xl font-semibold mt-2">
                Important: Midterm Exam Schedule
              </h2>
              <p className="text-muted-foreground mt-2">
                The midterm exam will be held next Monday. Please ensure you've
                reviewed all materials from chapters 1-5.
              </p>
            </div>
            <div className="text-sm text-muted-foreground">2 hours ago</div>
          </div>
        </div>

       
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">
                  Project Submission Deadline Extended
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Due to multiple requests, the project deadline has been
                  extended to Friday.
                </p>
              </div>
              <div className="text-sm text-muted-foreground">1 day ago</div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">Guest Speaker Session</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Join us for an industry expert talk this Thursday at 2 PM.
                </p>
              </div>
              <div className="text-sm text-muted-foreground">2 days ago</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default page;
