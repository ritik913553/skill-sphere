"use client";
import React from "react";
import FeatureCard from "./FeatureCard";
import { BookOpen, Briefcase, Users } from "lucide-react";

export default function FeatureSection() {
    return (
        <div className="min-h-[500px] flex items-center justify-center flex-col gap-y-8 my-5">
            <div className="">
                <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white sm:text-4xl relative inline-block text-center">
                    Everything you need to succeed in tech
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto text-center">
                    Our platform combines the essential tools and resources for
                    your tech career journey
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
                <FeatureCard
                    title="Find Mentors"
                    description="Connect with industry experts who can provide personalized guidance to accelerate your learning journey."
                    icon={Briefcase}
                />
                <FeatureCard
                    title="Join Groups"
                    description="Collaborate with like-minded peers in specialized groups to enhance your skills through teamwork."
                    icon={Users}
                />
                <FeatureCard
                    title="Work on Projects"
                    description="Gain practical experience by contributing to real-world projects that showcase your abilities."
                    icon={BookOpen}
                />
            </div>
        </div>
    );
}
