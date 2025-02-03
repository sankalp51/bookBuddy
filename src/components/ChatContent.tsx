import { useEffect, useRef } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Bot, User } from "lucide-react";
import type { Message } from "ai";

type Props = {
  messages: Message[];
};

export default function ChatContent({ messages }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
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
              className={`flex items-start space-x-2 ${
                m.role === "user"
                  ? "flex-row-reverse space-x-reverse"
                  : "flex-row"
              }`}
            >
              <Avatar className="w-8 h-8">
                <AvatarFallback>
                  {m.role === "user" ? <User /> : <Bot />}
                </AvatarFallback>
                <AvatarImage
                  src={
                    m.role === "user" ? "/user-avatar.png" : "/ai-avatar.png"
                  }
                />
              </Avatar>
              <div
                className={`rounded-lg p-3 ${
                  m.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
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
        <div ref={bottomRef} />
      </div>
    </ScrollArea>
  );
}
