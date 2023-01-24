import { createContext } from "react";

//primero se crea el contexto
const TodoContext = createContext();

const TodoProvider = (props) => {
  return (
    <TodoContext.Provider value={{}}>{props.children}</TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
