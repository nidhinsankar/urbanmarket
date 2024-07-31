import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { auth } from "@/lib/auth/auth";
import Logout from "../forms/Logout";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className=" bg-white bg-opacity-30   sticky top-0">
      <div className="flex max-w-7xl h-16 px-5 justify-between items-center mx-auto">
        <Link href={"/"} className="font-bold text-lg md:text-2xl">
          Urban Market
        </Link>
        <div className="flex gap-4 ">
          {session ? (
            <Logout />
          ) : (
            <>
              <Link
                className={cn(buttonVariants({ variant: "default" }))}
                href={"/sign-in"}
              >
                Login
              </Link>
              <Link
                className={cn(buttonVariants({ variant: "default" }))}
                href={"/sign-up"}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
