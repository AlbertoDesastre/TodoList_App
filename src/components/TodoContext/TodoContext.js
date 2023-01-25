import { createContext, useState } from "react";

//primero se crea el contexto
const TodoContext = createContext();

const TodoProvider = (props) => {
  const [todos, setTodos] = useState([
    { text: "Empezar proyecto", completed: true },
    { text: "Contar cuantos todos tengo", completed: false },
    { text: "Filtrar todos", completed: false },
    { text: "BREJEBREJEBREJE", completed: false },
  ]);

  const onComplete = (todos) => {};

  const onDelete = (todos) => {};

  return (
    <TodoContext.Provider value={{ todos }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
