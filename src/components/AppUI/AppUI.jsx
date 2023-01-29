import "./AppUI.scss";
import { TodoContext } from "../TodoContext/TodoContext";
import { useContext } from "react";
import TodoList from "../TodoList/TodoList";
import TodoSearch from "../TodoSearch/TodoSearch";
import TodoCounter from "../TodoCounter/TodoCounter";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const AppUI = () => {
  const { todos, completedTodos, searchedTodos, completeTodo, deleteTodo } =
    useContext(TodoContext);
  useLocalStorage("AAAAAAAAAAAA", ["UUUU", { a: "b" }]);

  return (
    <div className="App">
      <h1>Yeah, I'm working</h1>
      <TodoCounter todos={todos} completedTodos={completedTodos} />
      <TodoSearch />
      <TodoList
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export { AppUI };
