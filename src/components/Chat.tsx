"use client";

import { useChat } from "ai/react";
import { useEffect, useState, ChangeEvent } from "react";
import { Textarea } from "./ui/textarea";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Ban, Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import ChatContent from "./ChatContent";

export default function BookRecommendationChat() {
  const { messages, input, handleInputChange, handleSubmit, stop, isLoading } =
    useChat();

  const [genre, setGenre] = useState("");
  const [mood, setMood] = useState("");
  const [timePeriod, setTimePeriod] = useState("");

  useEffect(() => {
    const prompt = `Recommend a book with the following criteria:
    Genre: ${genre}
    Mood: ${mood}
    Time Period: ${timePeriod}
    Please provide a small spoiler-free summary of the book.`;
    handleInputChange({
      target: { value: prompt },
    } as ChangeEvent<HTMLInputElement>);
  }, [genre, mood, timePeriod, handleInputChange]);

  return (
    <Card className="mx-auto w-full h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-center text-lg sm:text-xl">
          Find your desired book
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 overflow-auto">
        <ChatContent messages={messages} />
      </CardContent>

      <CardFooter className="p-4">
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
            <Textarea rows={5} maxLength={100} />
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
