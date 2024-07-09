import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  return (
    <Card className="max-w-[450px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Label>Email</Label>
        <Input type="email" />
        <Label>Password</Label>
        <Input type="password" />
      </CardContent>
      <CardFooter>
        <Button>Login</Button>
        <Button className="mx-4">Cancel</Button>
      </CardFooter>
    </Card>
  );
};

export default Login;
