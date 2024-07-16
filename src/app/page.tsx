"use client";
import {useRef, useState} from "react";

import TRANSCRIPT from "../app/data/transcript.json";
import AUDIO from "../app/data/audio.wav";

export interface Message {
  content: string;
  role: "agent" | "user";
  start: number;
  end: number;
}

export default function HomePage() {
  const [progress, setProgress] = useState<number>(0);
  const audio = useRef<HTMLAudioElement>(null);

  function handleClick(time: number) {
    audio.current!.currentTime = time;
    audio.current?.play();
  }

  function handleTimeChange(time: number) {
    const match = TRANSCRIPT.findLast((message) => message.start < progress);

    setProgress(time);
    document.getElementById(String(match?.start))?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return (
    <section className="grid gap-4">
      <ul className="grid gap-4">
        {TRANSCRIPT.map(({start, content, role}) => (
          <button
            key={start}
            className={`rounded bg-neutral-900 p-4 ${role === "user" ? "justify-self-end bg-neutral-700" : "bg-neutral-800"} ${progress < start ? "opacity-50" : "opacity-100"}`}
            id={String(start)}
            type="button"
            onClick={() => handleClick(start)}
          >
            {content}
          </button>
        ))}
      </ul>
      <audio
        ref={audio}
        controls
        className="sticky bottom-4 w-full"
        src={AUDIO}
        onTimeUpdate={(event) => handleTimeChange(event.currentTarget.currentTime)}
      />
    </section>
  );
}
