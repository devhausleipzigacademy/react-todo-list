import { Todo } from "../utils/types";

type Props = {
  todo: Todo;
  removeTodo: (id: string) => void;
  toggleCompleted: (id: string) => void;
};

export function TodoItem({ todo, removeTodo, toggleCompleted }: Props) {
  return (
    <li>
      <input
        defaultChecked={todo.isCompleted}
        type="checkbox"
        onChange={() => toggleCompleted(todo.id)}
      />
      <span>{todo.name}</span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
}
