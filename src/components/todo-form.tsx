import { useRef, useState } from "react";
import { Button } from "./button";

type Props = {
  addTodo: (name: string) => void;
};

export function TodoForm({ addTodo }: Props) {
  const [input, setInput] = useState("");
  const inputField = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Add a todo
    addTodo(input);
    // Clear input field
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4">
      <div className="relative">
        <input
          ref={inputField}
          type="text"
          value={input}
          className="flex-1 pr-8 border border-zinc-500 rounded-md py-2 pl-4 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500/40"
          onChange={(event) => setInput(event.target.value)}
        />
        <button
          onClick={() => {
            setInput("");
            inputField.current?.focus();
          }}
          type="button"
          className="absolute right-3 top-3"
        >
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex gap-2">
        {/* <Button type="button" variant="secondary" onClick={() => setInput("")}>
          Clear field
        </Button> */}
        <Button>Add Task</Button>
      </div>
    </form>
  );
}
