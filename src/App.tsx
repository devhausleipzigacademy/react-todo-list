import { TodoForm } from "./components/todo-form";
import { TodoList } from "./components/todo-list";

function App() {
  const todos = [
    { id: 1, name: "Buy milk", isCompleted: false },
    { id: 2, name: "Program projects", isCompleted: false },
    { id: 3, name: "Buy pizza", isCompleted: false },
    { id: 4, name: "Have fun", isCompleted: false },
  ];

  return (
    <div className="wrapper">
      <div>
        <h3>Todo List</h3>
        <TodoList todos={todos} />
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
