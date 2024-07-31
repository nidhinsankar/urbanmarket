import Link from "next/link";
export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <h2>Welcome to Home page</h2>
      <Link href={"/login"}>Login</Link>
    </div>
  );
}
