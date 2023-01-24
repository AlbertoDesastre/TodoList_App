import "./AppUI.scss";
import { TodoContext } from "../TodoContext/TodoContext";
import { useContext } from "react";
import TodoList from "../TodoList/TodoList";

const AppUI = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="App">
      <h1>Yeah, I'm working</h1>
      <TodoList todos={todos}></TodoList>
    </div>
  );
};

export { AppUI };
