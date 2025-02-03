import { BookOpen } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { auth, signIn } from "@/auth";
import { Button } from "./ui/button";
import SignoutModal from "./SignoutModal";

export default async function Header() {
  const session = await auth();

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      <Link className="flex items-center justify-center" href="/">
        <BookOpen className="h-6 w-6" />
        <span className="ml-2 text-xl sm:text-2xl font-bold">BookBuddy</span>
      </Link>

      <div className="flex justify-center items-center space-x-2">
        {!session?.user && (
          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/home" });
            }}
          >
            <Button>Sign in</Button>
          </form>
        )}

        {session?.user && <SignoutModal />}

        <ThemeToggle />
      </div>
    </header>
  );
}
