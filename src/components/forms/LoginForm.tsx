"use client";
import { Button } from "../ui/button";
import { doLogin } from "@/app/actions";

const LoginForm = () => {
  return (
    <form action={doLogin}>
      <Button type="submit" value={"github"}>
        Login with github
      </Button>
    </form>
  );
};

export default LoginForm;
