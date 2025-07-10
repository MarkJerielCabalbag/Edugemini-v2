"use client";
import { useGetClasses } from "@/hooks/instructor";
import { School } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";
import { ClassProps } from "../types";
import { ArrowLeft, PlusCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import CreateClassroomModal from "@/components/modals/instructor/CreateClassroomModal";
import Link from "next/link";
const page = () => {
  const { userId } = useParams();
  const [showCreateClassroomModal, setCreateClassroomModal] =
    React.useState(false);
  const { data, isLoading, isPending } = useGetClasses(Number(userId));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link
                href={`/home/${userId}`}
                className="flex items-center text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="font-medium text-base sm:text-lg">
                  Dashboard
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="bg-primary w-full overflow-hidden py-4 sm:py-6 lg:py-8">
        <div className="inset-0 bg-gradient-to-r from-primary/90 to-primary">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative">
            <div className="text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
                My Classes
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center text-white/90 gap-1 sm:gap-3">
                <span className="text-base sm:text-lg">
                  You have {data?.length || 0} active{" "}
                  {data?.length === 1 ? "class" : "classes"}
                </span>
              </div>
              <div className="mt-3 sm:mt-4">
                <Button
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-3 py-2 sm:px-4 rounded-lg text-sm sm:text-base"
                  onClick={() =>
                    setCreateClassroomModal(!showCreateClassroomModal)
                  }
                >
                  <PlusCircleIcon className="w-5 h-5" />
                  <span className="font-medium">Create New Class</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showCreateClassroomModal && (
        <CreateClassroomModal
          open={showCreateClassroomModal}
          onOpenChange={setCreateClassroomModal}
        />
      )}

      <main className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-6 sm:py-8">
        {isLoading || isPending ? (
          <div className="flex justify-center items-center h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-primary border-t-transparent" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {data?.map((classItem: ClassProps) => (
              <Link
                key={classItem.id}
                href={`classroom/${userId}/${classItem.id}`}
              >
                <div className="bg-white border border-gray-200 rounded-xl shadow group hover:shadow-lg hover:border-primary/40 transition-all p-4 sm:p-6 cursor-pointer flex items-center gap-4 min-h-[110px]">
                  {/* Classroom Icon */}
                  <div className="flex-shrink-0 bg-primary/10 rounded-full p-3">
                    <School className="h-8 w-8 text-primary" />
                  </div>
                  {/* Classroom Info */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors break-words">
                      {classItem.classname}
                    </h2>
                    {/* Optionally add more info here, e.g., <p className='text-sm text-gray-500 mt-1'>Section: {classItem.section}</p> */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default page;
