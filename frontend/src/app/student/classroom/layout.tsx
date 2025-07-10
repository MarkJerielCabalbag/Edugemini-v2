"use client";
import { useGetClassroom } from "@/hooks/instructor.hooks";
import {
  ArrowLeft,
  CopyIcon,
  Users,
  BookOpen,
  Settings,
  Home,
} from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { userId, roomId } = useParams();
  const { data } = useGetClassroom(Number(roomId));
  const [activeTab, setActiveTab] = useState("stream");

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success(`Copied to clipboard: ${value}`);
    } catch (error) {
      console.log(error);
      toast.error(`Error: Try again`);
    }
  };

  const navItems = [
    { name: "Stream", href: "", icon: Home },
    { name: "Classwork", href: "classwork", icon: BookOpen },
    { name: "People", href: "people", icon: Users },
    { name: "Settings", href: "settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}

      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link
                href={`/student/${userId}`}
                className="flex items-center text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="font-medium">Dashboard</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Class Header */}
      <div className="bg-primary h-56 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="pt-8 md:pt-12 text-white">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 truncate">
              {data?.classname}
            </h1>
            <div className="flex flex-wrap items-center text-white/90 text-base sm:text-lg">
              <span className="font-medium">{data?.section}</span>
              {data?.subject && (
                <span className="mx-2 text-white/70 hidden sm:inline">•</span>
              )}
              <span className="truncate">{data?.subject}</span>
            </div>
            <div className="mt-3 sm:mt-4">
              <button
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-3 py-2 sm:px-4 sm:py-2 rounded-lg cursor-pointer text-xs sm:text-base"
                onClick={() => handleCopy(data?.classcode as string)}
              >
                <CopyIcon className="w-4 h-4" />
                <span className="font-medium truncate">{data?.classcode}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex flex-wrap space-x-0 sm:space-x-8">
            <Link
              href={`/student/classroom/${userId}/${roomId}`}
              className={`flex items-center gap-2 px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-medium transition-colors
        ${
          activeTab === "stream"
            ? "text-primary border-b-2 border-primary"
            : "text-gray-600 hover:text-primary border-b-2 border-transparent hover:border-primary"
        }`}
              onClick={() => setActiveTab("stream")}
            >
              <Home className="w-4 h-4" />
              <span className="hidden xs:inline">Announcement</span>
              <span className="inline xs:hidden">Stream</span>
            </Link>
            <Link
              href={`/student/classroom/${userId}/${roomId}/classwork`}
              className={`flex items-center gap-2 px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-medium transition-colors
        ${
          activeTab === "classwork"
            ? "text-primary border-b-2 border-primary"
            : "text-gray-600 hover:text-primary border-b-2 border-transparent hover:border-primary"
        }`}
              onClick={() => setActiveTab("classwork")}
            >
              <BookOpen className="w-4 h-4" />
              <span>Classwork</span>
            </Link>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
