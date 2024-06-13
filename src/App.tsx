import { useState } from "react";
import { TodoForm } from "./components/todo-form";
import { TodoList } from "./components/todo-list";
import { Todo } from "./utils/types";
import { v4 as uuid } from "uuid";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([
    { id: "1", name: "Buy milk", isCompleted: false },
    { id: "2", name: "Program projects", isCompleted: false },
    { id: "3", name: "Buy pizza", isCompleted: false },
    { id: "4", name: "Have fun", isCompleted: false },
  ]);

  function addTodo(name: string) {
    setTodos([...todos, { id: uuid(), name, isCompleted: false }]);
  }

  return (
    <div className="wrapper">
      <div>
        <h3>Todo List</h3>
        <TodoList todos={todos} />
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
