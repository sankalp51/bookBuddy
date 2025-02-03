"use client";

import { useChat } from "ai/react";
import { useRef, useEffect, useState, ChangeEvent } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function BookRecommendationChat() {
  const { messages, input, handleInputChange, handleSubmit, stop, isLoading } =
    useChat();
  const bottomRef = useRef<HTMLDivElement>(null);

  const [genre, setGenre] = useState("");
  const [mood, setMood] = useState("");
  const [timePeriod, setTimePeriod] = useState("");

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const prompt = `Recommend a book with the following criteria:
    Genre: ${genre}
    Mood: ${mood}
    Time Period: ${timePeriod}
    Please provide a brief summary and explain why this book fits the criteria.`;
    handleInputChange({
      target: { value: prompt },
    } as ChangeEvent<HTMLInputElement>);
  }, [genre, mood, timePeriod, handleInputChange]);

  return (
    <Card className="mx-auto w-full h-full flex flex-col">
      <CardHeader>
        <CardTitle>Find your desired book</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 overflow-hidden">
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
                        m.role === "user"
                          ? "/user-avatar.png"
                          : "/ai-avatar.png"
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
      </CardContent>

      <CardFooter className="p-4">
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="flex space-x-4">
            <Select onValueChange={setGenre}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fiction">Fiction</SelectItem>
                <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                <SelectItem value="mystery">Mystery</SelectItem>
                <SelectItem value="science-fiction">Science Fiction</SelectItem>
                <SelectItem value="fantasy">Fantasy</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={setMood}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select mood" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="uplifting">Uplifting</SelectItem>
                <SelectItem value="thought-provoking">
                  Thought-provoking
                </SelectItem>
                <SelectItem value="suspenseful">Suspenseful</SelectItem>
                <SelectItem value="romantic">Romantic</SelectItem>
                <SelectItem value="adventurous">Adventurous</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={setTimePeriod}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="contemporary">Contemporary</SelectItem>
                <SelectItem value="20th-century">20th Century</SelectItem>
                <SelectItem value="19th-century">19th Century</SelectItem>
                <SelectItem value="historical">Historical</SelectItem>
                <SelectItem value="futuristic">Futuristic</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Input type="hidden" value={input} onChange={handleInputChange} />

          {!isLoading ? (
            <Button
              type="submit"
              className="w-full"
              disabled={!genre || !mood || !timePeriod}
            >
              <Send className="w-4 h-4 mr-2" />
              Get Recommendation
            </Button>
          ) : (
            <Button onClick={() => stop()} className="w-full">
              <Ban className="w-4 h-4 mr-2" />
              Stop
            </Button>
          )}
        </form>
      </CardFooter>
    </Card>
  );
}
