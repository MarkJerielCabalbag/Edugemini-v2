"use client";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const { userId } = useParams();
  const router = useRouter();
  return (
    <nav className="flex items-center space-x-4 bg-white p-4 shadow-sm">
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
    </nav>
  );
};

export default Navbar;
