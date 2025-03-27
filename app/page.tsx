import { auth } from "@/auth";
import SignIn from "@/components/auth/signin-button";
import SignOut from "@/components/auth/signout-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <Card className="w-full max-w-md p-6 shadow-lg">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center gap-2 text-primary">
              <MessageCircle size={32} />
              <h1 className="text-3xl font-bold">Chatting with Friends</h1>
            </div>

            <div className="w-full">
              <SignIn />
            </div>
          </div>
        </Card>
      </main>
    );
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <Card className="w-full max-w-md p-6 shadow-lg">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center gap-2 text-primary">
              <h1 className="text-3xl font-bold">Chatting with Friends</h1>
            </div>

            <div className="w-full">
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground">Signed in as</p>
                  <p className="font-medium text-primary">{session.user.email}</p>
                </div>
                  <Button variant="default" className="w-full">
                    Start Chatting
                  </Button>
                  <SignOut />
              </div>
            </div>
          </div>
        </Card>
      </main>
    );
  }
}
