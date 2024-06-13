import { Todo } from "../utils/types";

type Props = {
  todos: Array<Todo>;
};

export function TodoList({ todos }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  );
}
