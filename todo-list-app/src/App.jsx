import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [completedTodos, setCompletedTodos] = useState([
    { text: "Take out the garbage", isCompleted: true },
    { text: "Complete lectures", isCompleted: true },
  ]);
  const [incompleteTodos, setIncompleteTodos] = useState([
    { text: "Make the documentation for the app", isCompleted: false },
  ]);

  return (
    <>
      <TodoList
        completedTodos={completedTodos}
        incompleteTodos={incompleteTodos}
      />
    </>
  );
}

export default App;
