"use client";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const { userId } = useParams();
  const router = useRouter();
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Button
              variant="ghost"
              onClick={() => router.push(`/home/${userId}`)}
              className="flex items-center gap-2"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push(`/instructor/${userId}`)}
              className="flex items-center gap-2"
            >
              Class
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push(`/student/${userId}`)}
              className="flex items-center gap-2"
            >
              Enrolled
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push(`/profile/${userId}`)}
              className="flex items-center gap-2"
            >
              Profile
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
