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

  const [searchValue, setSearchValue] = useState("");

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    // Creo un array completamente nuevo, porque después mi intención es actualizar el Estado del array con su nuevo "todo completed."
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    // Si no hubiese hecho el set con el array nuevo, al actualizar, se me mostaría el array viejo MÁS los elementos nuevos, y eso nanai-
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        completeTodo,
        deleteTodo,
        searchValue,
        setSearchValue,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
