import { useState } from "react";
import { TodoForm } from "./components/todo-form";
import { TodoList } from "./components/todo-list";
import { Todo } from "./utils/types";
import { v4 as uuid } from "uuid";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  function addTodo(name: string) {
    setTodos([...todos, { id: uuid(), name, isCompleted: false }]);
  }

  function removeTodo(id: string) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleCompleted(id: string) {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      })
    );
  }

  return (
    <div>
      <div>
        <h3>Todo List</h3>
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          toggleCompleted={toggleCompleted}
        />
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
