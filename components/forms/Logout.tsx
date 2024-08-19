"use client";

import { logout } from "@/app/actions";
import { Button } from "../ui/button";

const Logout = () => {
  return (
    <form action={logout}>
      <Button>logout</Button>
    </form>
  );
};

export default Logout;
