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
    <div className="p-8 bg-background max-w-7xl mx-auto">
      <div className="flex items-center justify-between space-y-2 mb-8">
        <div>
          <h2 className="text-3xl font-bold">Classwork</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of all assignments and tasks
          </p>
        </div>
        {showCreateClassworkModal && (
          <CreateClassworkModal
            open={showCreateClassworkModal}
            onOpenChange={setShowCreateClassworkModal}
          />
        )}
        <Button onClick={() => setShowCreateClassworkModal(true)}>
          Create Classwork
        </Button>
      </div>
      <div className="grid gap-6">
        {data?.map((classworkItem: ClassworkProps) => (
          <Link
            href={`/instructor/classroom/${userId}/${roomId}/classwork/${classworkItem.id}`}
            key={classworkItem.id}
          >
            <div
              key={classworkItem.id}
              className="flex items-center p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
            >
              <div className="flex flex-1 items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">
                    {classworkItem.title}
                  </h3>
                  {classworkItem.instruction && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {classworkItem.instruction}
                    </p>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">
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
