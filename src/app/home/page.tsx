import { auth } from "@/auth";
import Chat from "@/components/Chat";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <main
      className="h-[calc(100vh-56px)]">
      <Chat />
    </main>
  );
}
