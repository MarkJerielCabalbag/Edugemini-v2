"use client";
import { useGetClasses } from "@/hooks/instructor.hooks";
import { useParams } from "next/navigation";
import React from "react";
import { ClassProps } from "../types";
import { ArrowLeft, PlusCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import CreateClassroomModal from "@/components/modals/instructor/CreateClassroomModal";
const page = () => {
  const { userId } = useParams();
  const [showCreateClassroomModal, setCreateClassroomModal] =
    React.useState(false);
  const { data, isLoading, isPending } = useGetClasses(Number(userId));

  return (
    <div className="p-6 bg-background m-auto w-[90%]">
      <div className="my-5">
        <ArrowLeft />
      </div>
      {showCreateClassroomModal && (
        <CreateClassroomModal
          open={showCreateClassroomModal}
          onOpenChange={setCreateClassroomModal}
        />
      )}
      {isLoading || isPending ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
        </div>
      ) : (
        <>
          <div className="bg-primary rounded-lg w-full p-5 text-white my-5 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">My Classes</h1>
              <p className="text-primary-foreground">
                You have {data?.length || 0} active{" "}
                {data?.length === 1 ? "class" : "classes"}
              </p>
            </div>
            <Button
              className="flex justify-between gap-2 items-center bg-white text-primary px-4 py-2 rounded-md hover:bg-primary-foreground transition-colors"
              onClick={() => setCreateClassroomModal(!showCreateClassroomModal)}
            >
              <PlusCircleIcon /> Create New Class
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data?.map((classItem: ClassProps) => (
              <div
                key={classItem.id}
                className="bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-border"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground">
                      {classItem.classname}
                    </h2>
                    <span
                      className={`text-sm ${
                        classItem.status === "APPROVED"
                          ? "text-green-500"
                          : classItem.status === "DECLINED"
                          ? "text-red-500"
                          : "text-yellow-500"
                      }`}
                    >
                      {classItem.status.charAt(0).toUpperCase() +
                        classItem.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default page;
