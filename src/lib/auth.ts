import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { checkPass, saltAndHashPassword } from "./utils";
import { loginValidation } from "@/validations/auth";
import { prisma } from "@/config/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        const { success, data } = await loginValidation.safeParseAsync(
          credentials
        );

        if (!success) return null;

        user = await prisma.user.findUnique({
          where: {
            email: data?.email,
          },
        });

        if (!user) {
          throw new Error("Invalid credentials.");
        }

        const isValidPass = await checkPass(data.password, user?.password!);

        if (!isValidPass) return null;

        return user;
      },
    }),
  ],
});
