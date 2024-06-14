import { Todo } from "../utils/types";

type Props = {
  todo: Todo;
  removeTodo: (id: string) => void;
};

export function TodoItem({ todo, removeTodo }: Props) {
  return (
    <li>
      <span>{todo.name}</span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
}
