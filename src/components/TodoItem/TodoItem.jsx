import "./TodoItem.scss";

const TodoItem = ({ searchedTodos, deleteTodo, completeTodo }) => {
  return (
    <>
      {searchedTodos.map((todo) => {
        return (
          <li key={todo.text} className="li li-todoList">
            <span
              className={`icon iconDelete `}
              onClick={() => {
                deleteTodo(todo.text);
              }}
            >
              X
            </span>
            <p className="todoText">{todo.text}</p>
            <span
              className={`icon iconCheck ${
                todo.completed && "iconCheck--completed"
              } `}
              onClick={() => completeTodo(todo.text)}
            >
              √
            </span>
          </li>
        );
      })}
    </>
  );
};

export default TodoItem;
