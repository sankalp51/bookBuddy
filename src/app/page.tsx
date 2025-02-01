import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, BookmarkIcon, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <section className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Discover Your Next Favorite Book
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  BookBuddy uses AI to recommend books tailored to your taste.
                  Start your reading journey today!
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <form className=" flex flex-col items-center space-x-2">
                  <Button className="w-full sm:w-[200px]">Get Started</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start with a book you love. We'll handle the rest.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <BookmarkIcon className="h-10 w-10 text-primary" />
                <h2 className="text-xl font-bold">
                  Personalized Recommendations
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Our AI analyzes your reading history to suggest books you'll
                  love.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <TrendingUp className="h-10 w-10 text-primary" />
                <h2 className="text-xl font-bold">Trending Titles</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Stay up-to-date with the most popular books in your favorite
                  genres.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <BookOpen className="h-10 w-10 text-primary" />
                <h2 className="text-xl font-bold">Diverse Library</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Explore a vast collection of books across all genres and
                  languages.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Find Your Next Read?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of book lovers who have discovered new
                  favorites with BookBuddy.
                </p>
              </div>
              <Button className="w-full sm:w-auto" size="lg">
                Sign Up for Free
              </Button>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
