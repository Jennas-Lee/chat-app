import { signIn } from "@/auth"
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("cognito");
      }}
    >
      <Button className="w-full" size="lg" type="submit">
        <LogIn size={16} className="mr-2" />
        Signin with Cognito
      </Button>
    </form>
  );
}