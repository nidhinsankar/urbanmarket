"use client";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { doLogin } from "../../app/actions";
import { Card } from "../ui/card";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import GithubOAuth from "./github-oauth";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid Email Address",
  }),
  password: z
    .string()
    .min(6, { message: "Password length should minimum of 6 characters" }),
});
type formData = z.infer<typeof formSchema>;
const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: formData) => {
    console.log("the values", data);
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" p-4 w-2/3 border-[1.5px] border-gray-300 flex flex-col gap-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Provide Email</FormLabel>
                <FormControl>
                  <Input
                    className="text-black"
                    placeholder="Provide Email"
                    {...field}
                    type="text"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Provide Password</FormLabel>
                <FormControl>
                  <Input
                    className="text-black"
                    placeholder="Hasło"
                    {...field}
                    type="password"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="hover:scale-110 hover:bg-cyan-700"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Opening...." : "Open Sesame!"}
          </Button>
        </form>
      </Form>
      <GithubOAuth />
    </>
  );
};

export default LoginForm;
