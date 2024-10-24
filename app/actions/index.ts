"use server";
// import { signin, signout } from "@/lib/auth/auth";
import { signIn, signOut } from "../../lib/auth/auth";

export const doLogin = async (FormData: any) => {
  const action = FormData.get("action");
  //   console.log("eee", nextvalueauth);

  await signIn(action, { redirectTo: "/admin" });
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
};
