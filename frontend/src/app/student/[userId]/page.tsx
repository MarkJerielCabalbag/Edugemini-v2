"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, PlusCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { useGetClassrooms } from "@/hooks/student.hooks";
import { ClassroomProps } from "@/types/types";
import JoinClassroomModal from "@/components/modals/student/JoinClassroomModal";

const page = () => {
  const [showJoinClassroomModal, setShowClassroomModal] = React.useState(false);
  const { userId } = useParams();

  const { data, isLoading, isPending } = useGetClassrooms(Number(userId));

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link
                href={`/home/${userId}`}
                className="flex items-center text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="font-medium text-sm sm:text-base">
                  Dashboard
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {showJoinClassroomModal && (
        <JoinClassroomModal
          open={showJoinClassroomModal}
          onOpenChange={setShowClassroomModal}
        />
      )}

      <div className="bg-primary h-44 sm:h-56 w-full overflow-hidden">
        <div className="inset-0 bg-gradient-to-r from-primary/90 to-primary">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative">
            <div className="pt-8 sm:pt-12 text-white">
              <h1 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4">
                My Classes
              </h1>
              <div className="flex items-center text-white/90">
                <span className="text-base sm:text-lg">
                  Currently enrolled in {data?.length || 0}{" "}
                  {data?.length === 1 ? "class" : "classes"}
                </span>
              </div>
              <div className="mt-3 sm:mt-4">
                <Button
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base"
                  onClick={() => setShowClassroomModal(!showJoinClassroomModal)}
                >
                  <PlusCircleIcon className="w-5 h-5" />
                  <span className="font-medium">Join a Class</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-6 sm:py-8">
        {isLoading || isPending ? (
          <div className="flex justify-center items-center h-[40vh] sm:h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-primary border-t-transparent" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {data?.map((classItem: ClassroomProps) => {
              return (
                <Link
                  key={classItem.userId}
                  href={
                    classItem.status === "APPROVED"
                      ? `classroom/${userId}/${classItem.roomId}`
                      : ""
                  }
                  tabIndex={classItem.status === "APPROVED" ? 0 : -1}
                  aria-disabled={classItem.status !== "APPROVED"}
                  className="focus:outline-none"
                >
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4 sm:p-6 cursor-pointer group min-h-[110px] flex flex-col justify-between">
                    <div className="flex flex-col gap-3 sm:gap-4">
                      <div className="flex justify-between items-start">
                        <span
                          className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full ${
                            classItem.status === "APPROVED"
                              ? "text-green-700 bg-green-50"
                              : classItem.status === "DECLINED"
                              ? "text-red-700 bg-red-50"
                              : "text-yellow-700 bg-yellow-50"
                          }`}
                        >
                          {classItem.status.charAt(0).toUpperCase() +
                            classItem.status.slice(1)}
                        </span>
                      </div>
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors break-words">
                        {classItem.relatedtoClassroom.classname}
                      </h2>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};

export default page;
