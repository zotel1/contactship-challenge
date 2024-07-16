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
        <li
          key={message.start}
          className={`rounded bg-neutral-900 p-4 ${message.role === "user" ? "justify-self-end bg-neutral-700" : "bg-neutral-800"}`}
        >
          {message.content}
        </li>
      ))}
    </ul>
  );
}
