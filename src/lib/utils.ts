import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import bcryptjs from "bcryptjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const saltAndHashPassword = async (password: string) => {
  return await bcryptjs.hash(password, 10);
};

export const checkPass = async (password: string, originalPass: string) =>
  await bcryptjs.compare(password, originalPass);
