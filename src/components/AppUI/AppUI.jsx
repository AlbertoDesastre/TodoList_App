import "./AppUI.scss";
import { TodoContext } from "../TodoContext/TodoContext";
import { useContext } from "react";
import TodoList from "../TodoList/TodoList";
import TodoSearch from "../TodoSearch/TodoSearch";
import TodoCounter from "../TodoCounter/TodoCounter";
import Modal from "../Modal/Modal";
const AppUI = () => {
  const {
    todos,
    completedTodos,
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <div className="App">
      <h1>Yeah, I'm working</h1>
      <TodoCounter todos={todos} completedTodos={completedTodos} />
      <TodoSearch />

      {loading && "Loading your todos, stand by..."}
      {error && "Somebody blew out the app. Call emergency."}
      {!loading && !todos.length && "Create your first todo!"}

      <TodoList
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />

      <button
        onClick={() => {
          setOpenModal(!openModal);
        }}
      >
        CREAR COSAS
      </button>

      {openModal && (
        <Modal>
          <input></input>
          <ul>
            <li>
              <button>Cancelar</button>
            </li>
            <li>
              <button>Añadir</button>
            </li>
          </ul>
        </Modal>
      )}
    </div>
  );
};

export { AppUI };
