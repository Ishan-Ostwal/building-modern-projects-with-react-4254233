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

  function markTodoAsComplete(text) {
    setIncompleteTodos(incompleteTodos.filter((t) => t.text !== text));
    setCompletedTodos([
      ...completedTodos, //using ... the completed todos aray will be spread here as objects.
      { text, isCompleted: true },
    ]);
  }
  function deleteTodo(text) {
    setCompletedTodos(completedTodos.filter((t) => t.text !== text));
  }
  function createTodo(text) {
    setIncompleteTodos([...incompleteTodos, { text, isCompleted: false }]);
  }
  return (
    <>
      <TodoList
        completedTodos={completedTodos}
        incompleteTodos={incompleteTodos}
        onCompletedClicked={markTodoAsComplete}
        onDeletedClicked={deleteTodo}
        onCreateClicked={createTodo}
      />
    </>
  );
}

export default App;
