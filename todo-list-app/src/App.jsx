import "./App.css"
import TodoList from "./TodoList"

function App() {
  // function markTodoAsComplete(text) {
  //   setIncompleteTodos(incompleteTodos.filter((t) => t.text !== text))
  //   setCompletedTodos([
  //     ...completedTodos,
  //     { ...incompleteTodos.find((t) => t.text === text), isCompleted: true },
  //   ])
  // }

  // function deleteTodo(text) {
  //   setCompletedTodos(completedTodos.filter((t) => t.text !== text))
  // }

  // function createTodo(text) {
  //   setIncompleteTodos([...incompleteTodos, { text, isCompleted: false }])
  // }

  return (
    <>
      <TodoList />
    </>
  )
}

export default App
