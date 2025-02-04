import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NotFoundPage() {
  return (
    <section className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center">
        <section className="w-full py-12 md:py-24 lg:py-32 text-center">
          <div className="container px-4 md:px-6 flex flex-col items-center space-y-6">
            <Ghost className="h-16 w-16 text-primary" />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Oops! Page Not Found
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s
              get you back on track.
            </p>
            <div className="w-full max-w-md space-y-2">
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full sm:w-[200px]"
                )}
              >
                Return Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
