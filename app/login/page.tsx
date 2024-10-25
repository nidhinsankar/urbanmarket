import GithubOAuth from "@/components/forms/github-oauth";
import LoginForm from "../../components/forms/LoginForm";

const LoginPage = () => {
  return (
    <>
      <div className="h-[calc(100vh-64px)] w-full flex flex-col justify-center items-center">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
