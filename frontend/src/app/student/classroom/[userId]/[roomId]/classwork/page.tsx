"use client";
import { useGetClassworks } from "@/hooks/instructor.hooks";
import { ClassworkProps } from "@/types/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { userId, roomId } = useParams();

  const { data } = useGetClassworks(Number(roomId));

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-background max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 mb-6 md:mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Classwork</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Here&apos;s a list of all your assignments and tasks
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:gap-6">
        {data?.map((classworkItem: ClassworkProps) => (
          <Link
            href={`/student/classroom/${userId}/${roomId}/classwork/${classworkItem.id}`}
            key={classworkItem.id}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center p-3 md:p-4 rounded-lg border bg-card hover:bg-accent transition-colors">
              <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-between w-full">
                <div>
                  <h3 className="font-semibold text-base md:text-lg">
                    {classworkItem.title}
                  </h3>
                  {classworkItem.instruction && (
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">
                      {classworkItem.instruction}
                    </p>
                  )}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-2 sm:mt-0 sm:ml-6">
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
