import NewTodoFrom from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

export default function TodoList({
  completedTodos,
  incompleteTodos,
  onCompletedClicked,
  onDeletedClicked,
  onCreateClicked
}) {
  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoFrom onCreateClicked={onCreateClicked}/>
      <h3>Completed:</h3>
      {completedTodos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={index}
          onDeletedClicked={onDeletedClicked}
        />
      ))}
      <h3>Incomplete:</h3>
      {incompleteTodos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={index}
          onCompletedClicked={onCompletedClicked}
        />
      ))}
    </div>
  );
}
