import TRANSCRIPT from "../app/data/transcript.json";

export interface Message {
  content: string;
  role: "agent" | "user";
  start: number;
  end: number;
}

export default function HomePage() {
  return (
    <ul className="grid gap-4">
      {TRANSCRIPT.map((message) => (
        <li key={message.start} className="rounded bg-neutral-700 p-4">
          {message.content}
        </li>
      ))}
    </ul>
  );
}
