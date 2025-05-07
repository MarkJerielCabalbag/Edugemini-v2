"use client";
import React, { ReactNode, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { useSignUp } from "@/hooks/user.hooks";

type SignUpProps = {
  showButton: ReactNode;
};
const SignUp = ({ showButton }: SignUpProps) => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const { mutateAsync } = useSignUp(user.username, user.email, user.password);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">EduGemini</h2>
          <p className="text-gray-600">Sign Up to create account</p>
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
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </Label>
            <Input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full px-3 py-2 border rounded-md"
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
            />
          </div>

          <Button
            className="w-full"
            onClick={async () => {
              try {
                await mutateAsync();
              } catch (error) {
                console.log(error);
              }
            }}
          >
            Sign Up
          </Button>

          {showButton}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
