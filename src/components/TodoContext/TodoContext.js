import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

//primero se crea el contexto
const TodoContext = createContext();

const TodoProvider = (props) => {
  /*   const { items: todos, saveItems: saveTodos } = useLocalStorage("todos", [
    { text: "Empezar proyecto", completed: true },
    { text: "Contar cuantos todos tengo", completed: false },
    { text: "Filtrar todos", completed: false },
    { text: "BREJEBREJEBREJE", completed: false },
  ]); */
  const {
    items: todos,
    saveItems: saveTodos,
    loading,
    error,
  } = useLocalStorage("todos", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  let searchedTodos = [];
  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  /* Esta es otra forma de hacerlo:
    const completedTodos = todos.filter((todo) => !!todo.completed).length;
  */

  // Si el usuario ha ingresado cualquier letra, y por lo tanto tiene longitud a 1 o superior,
  // ya no se muestran todos los todos, sino los que coincida con la letra que acaba de poner.
  if (searchValue.length >= 1) {
    searchedTodos = todos.filter((todo) => {
      todo.text.toLocaleLowerCase();
      searchValue.toLocaleLowerCase();
      return todo.text.includes(searchValue);
    });
  } else {
    searchedTodos = todos;
  }
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    // Creo un array completamente nuevo, porque después mi intención es actualizar el Estado del array con su nuevo "todo completed."
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    // Si no hubiese hecho el set con el array nuevo, al actualizar, se me mostaría el array viejo MÁS los elementos nuevos, y eso nanai-
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        completedTodos,
        searchedTodos,
        completeTodo,
        deleteTodo,
        searchValue,
        setSearchValue,
        loading,
        error,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
