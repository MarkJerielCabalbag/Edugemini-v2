"use client";
import { useGetClassroom } from "@/hooks/instructor.hooks";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { userId, roomId } = useParams();
  const { data } = useGetClassroom(Number(roomId));
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Button
                onClick={() => router.push(`instructor/${userId}`)}
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span>Dashboard</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Class Header */}
      <div className="relative"></div>
      <div className="bg-primary h-48 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-8 text-white">
            <h1 className="text-4xl font-bold">{data?.classname}</h1>
            <div className="mt-2">
              <span className="text-lg">{data?.section}</span>
              {data?.subject && <span className="mx-2">•</span>}
              <span className="text-lg">{data?.subject}</span>
            </div>
            <div className="mt-2">
              <span className="bg-white/20 px-3 py-1 rounded text-sm">
                Class Code: {data?.classcode}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
          <Link
            href={`/instructor/classroom/${userId}/${roomId}/`}
            className="px-3 py-4 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-primary hover:text-primary transition-colors"
          >
            Stream
          </Link>
          <Link
            href={`/instructor/classroom/${userId}/${roomId}/classwork`}
            className="px-3 py-4 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-primary hover:text-primary transition-colors"
          >
            Classwork
          </Link>
          <Link
            href={`/instructor/classroom/${userId}/${roomId}/people`}
            className="px-3 py-4 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-primary hover:text-primary transition-colors"
          >
            People
          </Link>
          <Link
            href={`/instructor/classroom/${userId}/${roomId}/settings`}
            className="px-3 py-4 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-primary hover:text-primary transition-colors"
          >
            Settings
          </Link>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
