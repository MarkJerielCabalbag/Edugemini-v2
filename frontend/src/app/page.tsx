"use client";
import SignIn from "@/components/signin";
import SignUp from "@/components/signup";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export default function Home() {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      {show ? (
        <SignIn
          showButton={
            <Button
              variant="ghost"
              className="w-full text-primary hover:text-primary/80"
              onClick={() => setShow(!show)}
            >
              Don't have an account? Sign up
            </Button>
          }
        />
      ) : (
        <SignUp
          showButton={
            <Button
              variant="ghost"
              className="w-full text-primary hover:text-primary/80"
              onClick={() => setShow(!show)}
            >
              Already have an account? Sign in
            </Button>
          }
        />
      )}
    </div>
  );
}
