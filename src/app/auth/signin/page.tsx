import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { signIn, auth } from "@/auth";
import { redirect } from "next/navigation";
import GoogleLogo from "@/components/GoogleLogo";

export default async function page() {
  const session = await auth();
  if (session?.user) {
    redirect("/home");
  }
  return (
    <section className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <BookOpen className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to BookBuddy
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Sign in with Google to start your reading journey and discover
                  new favorites.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-4">
                <form
                  action={async () => {
                    "use server";
                    await signIn("google", { redirectTo: "/home" });
                  }}
                  className="w-full"
                >
                  <Button variant="outline" className="w-full">
                    <GoogleLogo />
                    Sign in with Google
                  </Button>
                </form>

                <Link
                  href="/"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "text-sm text-gray-500 dark:text-gray-400"
                  )}
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
