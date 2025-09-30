import { currentUser } from "@/modules/authentication/actions";
import UserButton from "@/modules/components/user-button";

export default async function Home() {
  
  const user = await currentUser();

  return (
    <div className="flex h-screen items-center justify-center">
      <UserButton user={user} />
    </div>
  );
}