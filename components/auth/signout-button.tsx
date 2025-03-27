import { signOut } from "@/auth";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button variant="outline" className="w-full" type="submit">
        <LogOut size={16} className="mr-2" />
        Sign Out
      </Button>
    </form>
  );
}