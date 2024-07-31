import LoginForm from "@/components/forms/LoginForm";

const LoginPage = () => {
  return (
    <>
      <div className="h-[calc(100vh-64px)] bg-red-400 w-full flex justify-center items-center">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
