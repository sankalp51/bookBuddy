"use client";

import { useChat } from "ai/react";
import { useRef, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Ban, Bot, Send, User } from "lucide-react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, stop, isLoading } =
    useChat();
  // Instead of referencing the ScrollArea, we reference a "bottom" div.
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Whenever messages update, scroll the "bottom" div into view.
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Card className="mx-auto w-full h-full flex flex-col">
      <CardHeader>
        <CardTitle>Find your desired book</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 overflow-hidden">
        {/* Scrollable area */}
        <ScrollArea className="h-full pr-4">
          <div className="space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`
                    flex items-start space-x-2
                    ${
                      m.role === "user"
                        ? "flex-row-reverse space-x-reverse"
                        : "flex-row"
                    }
                  `}
                >
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>
                      {m.role === "user" ? <User /> : <Bot />}
                    </AvatarFallback>
                    <AvatarImage
                      src={
                        m.role === "user"
                          ? "/user-avatar.png"
                          : "/ai-avatar.png"
                      }
                    />
                  </Avatar>

                  <div
                    className={`
                      rounded-lg p-3
                      ${
                        m.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }
                    `}
                  >
                    <Markdown
                      remarkPlugins={[remarkGfm]}
                      className="prose dark:prose-invert"
                    >
                      {m.content}
                    </Markdown>
                  </div>
                </div>
              </div>
            ))}
            {/* This empty div stays at the bottom; we scroll it into view */}
            <div ref={bottomRef} />
          </div>
        </ScrollArea>
      </CardContent>

      <CardFooter className="p-2">
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input
            type="text"
            value={input}
            placeholder="Type your message..."
            onChange={handleInputChange}
            className="flex-grow"
          />
          {!isLoading ? (
            <Button type="submit" disabled={isLoading}>
              <Send className="w-4 h-4 mr-2" />
              Send
            </Button>
          ) : (
            <Button onClick={() => stop()}>
              <Ban />
            </Button>
          )}
        </form>
      </CardFooter>
    </Card>
  );
}
