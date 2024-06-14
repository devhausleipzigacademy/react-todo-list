import { Todo } from "../utils/types";
import { TodoItem } from "./todo-item";

type Props = {
  todos: Array<Todo>;
  removeTodo: (id: string) => void;
};

export function TodoList({ todos, removeTodo }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
}
