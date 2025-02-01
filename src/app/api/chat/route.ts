import { ollama } from "ollama-ai-provider";
import { auth } from "@/auth";
import { streamText } from "ai";
import { NextResponse } from "next/server";
export const maxDuration = 30;

export const POST = auth(async function POST(req) {
  const { messages } = await req.json();

  const result = streamText({
    model: ollama("llama3.2"),
    messages,
  });

  return req?.auth
    ? result.toDataStreamResponse()
    : NextResponse.json({ message: "Not authenticated" }, { status: 401 });
});
