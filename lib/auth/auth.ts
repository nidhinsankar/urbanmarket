import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
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
    GitHub({
      profile(profile) {
        return { role: "CUSTOMER", ...profile };
      },
    }),
  ],
  callbacks: {
    session({ session, user }) {
      session.user.role = user.role;
      return session;
    },
  },
  session: { strategy: "jwt" },
  events: {
    createUser(message) {
      console.log(message.user.name + " is logged in and user is created");
    },
  },
  // pages: { signIn: "/login" },
});
