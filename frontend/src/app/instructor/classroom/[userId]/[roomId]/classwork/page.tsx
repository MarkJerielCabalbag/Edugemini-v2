"use client";
import CreateClassworkModal from "@/components/modals/instructor/CreateClassworkModal";
import { Button } from "@/components/ui/button";
import { useGetClassworks } from "@/hooks/instructor.hooks";
import { ClassworkProps } from "@/types/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
const page = () => {
  const { roomId, userId } = useParams();
  const { data } = useGetClassworks(Number(roomId));
  const [showCreateClassworkModal, setShowCreateClassworkModal] =
    React.useState(false);

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-background max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl md:text-3xl font-bold break-words">
            Classwork
          </h2>
          <p className="text-muted-foreground text-sm md:text-base break-words">
            Here&apos;s a list of all assignments and tasks
          </p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          {showCreateClassworkModal && (
            <CreateClassworkModal
              open={showCreateClassworkModal}
              onOpenChange={setShowCreateClassworkModal}
            />
          )}
          <Button
            className="w-full md:w-auto"
            onClick={() => setShowCreateClassworkModal(true)}
          >
            Create Classwork
          </Button>
        </div>
      </div>
      {data?.length === 0 && (
        <div className="text-center text-muted-foreground">No Classwork</div>
      )}

      <div className="grid gap-4 sm:gap-6">
        {data?.map((classworkItem: ClassworkProps) => (
          <Link
            href={`/instructor/classroom/${userId}/${roomId}/classwork/${classworkItem.id}`}
            key={classworkItem.id}
            className="block"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 rounded-lg border bg-card hover:bg-accent transition-colors gap-2 sm:gap-0">
              <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-between w-full min-w-0">
                <div className="min-w-0">
                  <h3 className="font-semibold text-base md:text-lg truncate">
                    {classworkItem.title}
                  </h3>
                  {classworkItem.instruction && (
                    <p className="text-sm text-muted-foreground mt-1 break-words line-clamp-2">
                      {classworkItem.instruction}
                    </p>
                  )}
                </div>
                <div className="text-sm text-muted-foreground mt-2 sm:mt-0 sm:ml-4 whitespace-nowrap">
                  Due: {classworkItem.date}
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
