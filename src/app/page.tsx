import TRANSCRIPT from "../app/data/transcript.json";
import AUDIO from "../app/data/audio.wav";

export interface Message {
  content: string;
  role: "agent" | "user";
  start: number;
  end: number;
}

export default function HomePage() {
  return (
    <section className="grid gap-4">
      <ul className="grid gap-4">
        {TRANSCRIPT.map((message) => (
          <li
            key={message.start}
            className={`rounded bg-neutral-900 p-4 ${message.role === "user" ? "justify-self-end bg-neutral-700" : "bg-neutral-800"}`}
          >
            {message.content}
          </li>
        ))}
      </ul>
      <audio controls className="w-full" src={AUDIO} />
    </section>
  );
}
