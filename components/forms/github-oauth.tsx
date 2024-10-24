import { doLogin } from "@/app/actions";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const GithubOAuth = () => {
  return (
    <Card className="w-[340px] h-[200px] bg-white flex justify-center items-center shadow-lg">
      <form action={doLogin} className={""}>
        <h2 className="text-center my-6">Login to urbanmarket</h2>
        <Button type="submit" value={"github"} className="mx-5">
          Login with github
        </Button>
      </form>
    </Card>
  );
};
