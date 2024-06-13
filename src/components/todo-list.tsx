import { Todo } from "../utils/types";
import { TodoItem } from "./todo-item";

type Props = {
  todos: Array<Todo>;
};

export function TodoList({ todos }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
