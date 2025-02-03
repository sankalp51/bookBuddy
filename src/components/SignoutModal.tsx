"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

export default function SignoutModal() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-[#fff0f0] text-red-500 hover:bg-destructive/20 dark:bg-destructive/30">
          Sign out
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Sign out</AlertDialogTitle>
          <AlertDialogDescription>
            Are your sure you want to sign out?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <AlertDialogAction onClick={() => signOut()}>
            Sign out
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
