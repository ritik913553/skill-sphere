"use server";
import { prisma } from "@/config/db";
import { saltAndHashPassword } from "@/lib/utils";
import { registerValidation } from "@/validations/auth";
import { z } from "zod";

const signupAction = async (reqBody: z.infer<typeof registerValidation>) => {
  try {
    const { success, data, error } = await registerValidation.safeParseAsync(
      reqBody
    );

    if (!success) {
      return {
        success: false,
        message: error.issues.map((issue) => {
          return {
            path: issue.path[0],
            message: issue.message,
          };
        }),
      };
    }

    let user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (user) {
      return {
        success: false,
        message: "user already exist",
      };
    }

    const hasPass = await saltAndHashPassword(data.password);

    user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hasPass,
        profile: {
          create: {},
        },
      },
    });

    return {
      success: true,
      data: user,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Internal server error ",
    };
  }
};

export default signupAction;
