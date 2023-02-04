import "./AppUI.scss";
import { TodoContext } from "../TodoContext/TodoContext";
import { useContext } from "react";
import TodoList from "../TodoList/TodoList";
import TodoSearch from "../TodoSearch/TodoSearch";
import TodoCounter from "../TodoCounter/TodoCounter";
import Modal from "../Modal/Modal";
import CreateTodo from "../CreateTodo/CreateTodo";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import TodoHeader from "../TodoHeader/TodoHeader";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
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
      {/* LEGACY CODE -->   <h1>Yeah, I'm working</h1> */}
      <TodoHeader>
        <TodoCounter todos={todos} completedTodos={completedTodos} />
        <TodoSearch />
      </TodoHeader>

      {loading && <LoadingComponent />}
      {error && <ErrorComponent error={error} />}
      {!loading && !todos.length && "Crea tu primer Todo crack!"}

      <TodoList>
        <TodoItem
          searchedTodos={searchedTodos}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      </TodoList>

      <CreateTodo openModal={openModal} setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </div>
  );
};

export { AppUI };
