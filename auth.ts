import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import "next-auth/jwt";
import Cognito from "next-auth/providers/cognito";
import { prisma } from "./prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Cognito],
  session: { strategy: "jwt" },
  debug: true,
  callbacks: {},
});

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}

// https://ui.shadcn.com/