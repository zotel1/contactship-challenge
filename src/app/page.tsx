"use client";
import {useRef} from "react";

import TRANSCRIPT from "../app/data/transcript.json";
import AUDIO from "../app/data/audio.wav";

export interface Message {
  content: string;
  role: "agent" | "user";
  start: number;
  end: number;
}

export default function HomePage() {
  const audio = useRef<HTMLAudioElement>(null);

  function handleClick(time: number) {
    audio.current!.currentTime = time;
  }

  return (
    <section className="grid gap-4">
      <ul className="grid gap-4">
        {TRANSCRIPT.map((message) => (
          <button
            key={message.start}
            className={`rounded bg-neutral-900 p-4 ${message.role === "user" ? "justify-self-end bg-neutral-700" : "bg-neutral-800"}`}
            type="button"
            onClick={() => handleClick(message.start)}
          >
            {message.content}
          </button>
        ))}
      </ul>
      <audio ref={audio} controls className="w-full" src={AUDIO} />
    </section>
  );
}
