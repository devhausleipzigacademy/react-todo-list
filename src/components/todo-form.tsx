import { useState } from "react";

type Props = {
  addTodo: (name: string) => void;
};

export function TodoForm({ addTodo }: Props) {
  const [input, setInput] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Add a todo
    addTodo(input);
    // Clear input field
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button type="button" onClick={() => setInput("")}>
        Clear field
      </button>
      <button>Add Task</button>
    </form>
  );
}
