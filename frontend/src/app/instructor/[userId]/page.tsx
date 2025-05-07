"use client";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { userId } = useParams();
  return <div>hi {userId}</div>;
};

export default page;
