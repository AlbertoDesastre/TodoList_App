import "./TodoList.scss";
const TodoList = () => {
  const todoListArray = [
    { text: "Empezar proyecto", completed: true },
    { text: "Contar cuantos todos tengo", completed: false },
    { text: "Filtrar todos", completed: false },
    { text: "BREJEBREJEBREJE", completed: false },
  ];

  return (
    <ul>
      {todoListArray.map((todo) => {
        // console.log(todo.completed);

        return (
          <li key={todo.index}>
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
