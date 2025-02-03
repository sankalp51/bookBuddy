import { ollama } from "ollama-ai-provider";
import { auth } from "@/auth";
import { streamText } from "ai";
import { NextResponse } from "next/server";
export const maxDuration = 30;

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ message: "unauthorized" }, { status: 401 });
  }
  const { messages } = await req.json();

  const result = streamText({
    model: ollama("llama3.2"),
    messages,
    system:
      "You are a helpfull librarian who knows all the books in the world, help the user to find their new read. If the user asks anything that is not related to books just say `I don't know`",
  });

  return result.toDataStreamResponse();
}
