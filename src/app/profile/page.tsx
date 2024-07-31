import Logout from "@/components/forms/Logout";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth/auth";

const ProfilePage = async () => {
  const session = await auth();
  // console.log("sesseion", session);

  return (
    <div>
      Profile {session?.user?.email}
      {session?.user?.name}
      <Logout />
    </div>
  );
};

export default ProfilePage;
