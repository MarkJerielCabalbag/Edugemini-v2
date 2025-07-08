"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useGetStudentsScore } from "@/hooks/instructor.hooks";
const page = () => {
  const { roomId } = useParams();
  const { data } = useGetStudentsScore(Number(roomId));
  console.log(data);
  return (
    <div className="p-8 bg-background max-w-7xl mx-auto">Settings page</div>
  );
};

export default page;
