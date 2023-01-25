import "./TodoList.scss";
const TodoList = ({ todos, onDelete, onComplete }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.text}>
            <span className={`icon iconDelete `} onClick={onDelete}>
              X
            </span>
            <p className="todoText">{todo.text}</p>
            <span
              className={`icon iconCheck ${
                todo.completed && "iconCheck--completed"
              } `}
              onClick={() => onComplete(todo.text)}
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
