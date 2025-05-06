"use client";
import SignIn from "@/components/signin";
import SignUp from "@/components/signup";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Home() {
  return (
    <div>
      <SignIn />
    </div>
  );
}
