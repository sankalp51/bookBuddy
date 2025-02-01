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
      {/* Use the AlertDialogTrigger to open the dialog */}
      <AlertDialogTrigger asChild>
        <Button className="bg-[#fff0f0] text-red-500 hover:bg-destructive/20 dark:bg-destructive/30">
          Sign out
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will log you out of your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {/* Wrap the destructive action in a form that triggers the signOut server action */}

          <AlertDialogAction onClick={() => signOut()}>
            Sign out
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
