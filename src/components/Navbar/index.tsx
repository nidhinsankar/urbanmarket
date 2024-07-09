import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <h2>This is navbar component</h2>
      <Link href={"/sign-in"}>Login</Link>
      <Link href={"/sign-up"}>Register</Link>
    </div>
  );
};

export default Navbar;
