import { Todo } from "../utils/types";
import { TodoItem } from "./todo-item";

type Props = {
  todos: Array<Todo>;
  removeTodo: (id: string) => void;
  toggleCompleted: (id: string) => void;
};

export function TodoList({ todos, removeTodo, toggleCompleted }: Props) {
  return todos.length === 0 ? (
    <p className="border-2 border-dashed p-4 border-gray-300 text-gray-500 rounded-md">
      No todos added yet, please use the input below to add your first todo.
    </p>
  ) : (
    <ul className="text-left space-y-1">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </ul>
  );
}
