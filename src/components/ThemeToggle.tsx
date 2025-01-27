"use client";

import { Moon, Sun } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component only renders after mounting to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevent rendering until the component is mounted
  }

  return (
    <Button className={cn(buttonVariants({variant:"outline"}),"bg-transparent dark:text-white text-black bg-none border-none shadow-none hover:bg-transparent")} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
}
