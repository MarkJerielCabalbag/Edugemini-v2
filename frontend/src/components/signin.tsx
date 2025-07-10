"use client";
import React, { ReactNode, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useSignIn } from "@/hooks/user.hooks";

type SignInProps = {
  showButton: ReactNode;
};

const SignIn = ({ showButton }: SignInProps) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const { mutateAsync, data, isPending } = useSignIn(user.email, user.password);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">EduGemini</h2>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </Label>
            <Input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md"
              disabled={isPending}
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </Label>
            <Input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md"
              disabled={isPending}
            />
          </div>

          <Button
            className="w-full"
            disabled={isPending}
            onClick={async () => {
              try {
                await mutateAsync();
              } catch (error) {
                console.log(error);
              }
            }}
          >
            {isPending ? "Signing In..." : "Sign In"}
          </Button>

          {showButton}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
