import "./TodoList.scss";
const TodoList = ({ todos }) => {
  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => {
        // console.log(todo.completed);

        return (
          <li key={todo.text}>
            <span className={`icon iconDelete `}>X</span>
            <p className="todoText">{todo.text}</p>
            <span
              className={`icon iconCheck ${
                todo.completed && "iconCheck--completed"
              } `}
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
