import { AuthForm } from "@/components/auth/AuthForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Welcome back, AlgoDev",
  description:
    "A One-Stop Solution for all your tech related queries. Be it Jobs, tutorials, courses, blogs, helper mini apps",
};

export default function page() {
  return (
    <div className="min-h-[800px] flex flex-col gap-y-10 justify-center items-center">
      <h2 className="text-4xl font-extrabold">
        Welcome Back, to{" "}
        <span className="bg-gradient-to-r from-blue-300 to-purple-500 text-transparent bg-clip-text">
          Skill Sphere
        </span>
      </h2>
      <AuthForm isLogin={true} />
    </div>
  );
}
