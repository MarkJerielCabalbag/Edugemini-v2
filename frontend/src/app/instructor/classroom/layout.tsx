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
                href={`/instructor/${userId}`}
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
          <div className="pt-12 text-white">
            <h1 className="text-5xl font-bold mb-4">{data?.classname}</h1>
            <div className="flex items-center text-white/90">
              <span className="text-lg font-medium">{data?.section}</span>
              {data?.subject && <span className="mx-2 text-white/70">•</span>}
              <span className="text-lg">{data?.subject}</span>
            </div>
            <div className="mt-4">
              <button
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg cursor-pointer"
                onClick={() => handleCopy(data?.classcode as string)}
              >
                <CopyIcon className="w-4 h-4" />
                <span className="font-medium">{data?.classcode}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={`/instructor/classroom/${userId}/${roomId}/${item.href}`}
                  className={`flex items-center gap-2 px-4 py-4 text-sm font-medium transition-colors
                    ${
                      activeTab === item.href.toLowerCase()
                        ? "text-primary border-b-2 border-primary"
                        : "text-gray-600 hover:text-primary border-b-2 border-transparent hover:border-primary"
                    }`}
                  onClick={() => setActiveTab(item.href.toLowerCase())}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
