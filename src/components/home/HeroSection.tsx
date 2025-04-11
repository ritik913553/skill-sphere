"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import SearchModal from "./SearchModal";

const titles = ["courses", "tutorials", "blogs", "resources"];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [openModal, setOpenModal] = React.useState(false);

    const handleModalState = () => setOpenModal(!openModal);

    useEffect(() => {
        const interval = setInterval(() => {
            // Start fade-out
            setFade(false);

            // Wait for fade-out to complete
            setTimeout(() => {
                // Change the title after fade-out
                setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);

                // Trigger fade-in shortly after changing the title
                setTimeout(() => {
                    setFade(true);
                }, 150); // Tiny delay to allow new text to mount before fading in
            }, 300); // Match the duration of fade-out
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="min-h-[400px] flex items-center justify-center flex-col gap-y-8 ">
                <h1 className="max-w-[90%] md:max-w-[70%] text-center font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    Welcome to{" "}
                    <span className="text-blue-500 text-shadow-sm dark:text-shadow-blue-800">
                        {" "}
                        SkillSphere{" "}
                    </span>{" "}
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto text-center">
                    Elevate your skills through mentorship, collaboration, and
                    real-world projects in our vibrant community.
                </p>
            </div>
        </>
    );
}
