"use client";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Briefcase,
  GraduationCap,
  Menu,
  Moon,
  PackageSearch,
  Sun,
  X,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";
import React from "react";
import ProfileSheet from "../dashboard/profile/ProfileSheet";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const session = useSession();
  const router = useRouter();

  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScroll, setLastScroll] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        setIsVisible(true);
        return;
      }
      if (currentScroll > lastScroll) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div
      className={`bg-white dark:bg-neutral-900 py-4 px-5 md:px-10 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        typeof window !== "undefined" && window.scrollY > 0 ? "shadow" : ""
      }`}
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div className="w-full max-w-[1400px] mx-auto flex justify-between items-center">
        <Link className="font-bold text-xl " href={"/"}>
          Skill Sphere
        </Link>
        <div className="lg:hidden">
          <Button variant={"ghost"}>
            <Menu />
          </Button>
        </div>
        <div className="lg:flex gap-2 items-center hidden">
         
          
          
          <div className="flex gap-2 items-center ml-5">
            {session.status === "authenticated" ? (
              <ProfileSheet />
            ) : (
              <>
                <Button
                  variant={"outline"}
                  className="cursor-pointer"
                  onClick={() => router.push("/login")}
                >
                  Sign in
                </Button>
                <Button
                  className="cursor-pointer"
                  onClick={() => router.push("/signup")}
                >
                  Sign up
                </Button>
              </>
            )}

            <Button
              onClick={() =>
                theme === "light" ? setTheme("dark") : setTheme("light")
              }
              variant={"outline"}
              className="cursor-pointer"
              size={"icon"}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
