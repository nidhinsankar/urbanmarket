import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "../db";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  secret: "4563476nfvjbgbgdjb",
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  session: { strategy: "jwt" },
  events: {
    createUser(message) {
      console.log(message.user.name + " is logged in and user is created");
    },
  },
  // pages: { signIn: "/login" },
});
