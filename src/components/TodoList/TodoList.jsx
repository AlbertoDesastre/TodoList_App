import "./TodoList.scss";
const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.text}>
            <span className={`icon iconDelete `} onClick={deleteTodo}>
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
    </ul>
  );
};

export default TodoList;
