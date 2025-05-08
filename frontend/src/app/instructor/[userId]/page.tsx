"use client";
import { useGetClasses } from "@/hooks/instructor.hooks";
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
    <div className="p-8 bg-background max-w-7xl mx-auto">
      <div className="flex items-center mb-8 hover:text-primary transition-colors cursor-pointer">
        <ArrowLeft className="mr-2" />
        <span>Back to Dashboard</span>
      </div>

      {showCreateClassroomModal && (
        <CreateClassroomModal
          open={showCreateClassroomModal}
          onOpenChange={setCreateClassroomModal}
        />
      )}

      {isLoading || isPending ? (
        <div className="flex justify-center items-center h-[60vh]">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent" />
        </div>
      ) : (
        <>
          <div className="bg-primary/95 rounded-xl w-full p-8 text-white mb-8 flex justify-between items-center shadow-lg hover:bg-primary transition-all">
            <div>
              <h1 className="text-3xl font-bold mb-2">My Classes</h1>
              <p className="text-primary-foreground/90 text-lg">
                You have {data?.length || 0} active{" "}
                {data?.length === 1 ? "class" : "classes"}
              </p>
            </div>
            <Button
              className="flex items-center gap-3 bg-white text-primary px-6 py-5 rounded-lg hover:bg-primary-foreground transition-all text-lg font-semibold shadow-md"
              onClick={() => setCreateClassroomModal(!showCreateClassroomModal)}
            >
              <PlusCircleIcon size={24} /> Create New Class
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.map((classItem: ClassProps) => (
              <Link
                key={classItem.id}
                href={
                  classItem.status === "APPROVED"
                    ? `classroom/${userId}/${classItem.id}`
                    : classItem.status === "DECLINED"
                    ? ""
                    : ""
                }
              >
                <div className="bg-card rounded-xl shadow-md hover:shadow-xl transition-all p-8 border border-border/50 cursor-pointer group">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <p
                        className={`text-sm font-semibold py-1.5 px-3 rounded-full inline-flex items-center ${
                          classItem.status === "APPROVED"
                            ? "text-green-700 bg-green-100 border border-green-200"
                            : classItem.status === "DECLINED"
                            ? "text-red-700 bg-red-100 border border-red-200"
                            : "text-yellow-700 bg-yellow-100 border border-yellow-200"
                        }`}
                      >
                        {classItem.status.charAt(0).toUpperCase() +
                          classItem.status.slice(1)}
                      </p>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        {classItem.classname}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default page;
