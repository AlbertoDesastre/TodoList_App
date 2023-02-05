import "./App.scss";
import { useTodos } from "./useTodos";

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
import EmptyTodos from "../EmptyTodos/EmptyTodos";

function App() {
  const {
    todos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal,
    addTodo,
  } = useTodos();

  return (
    <div className="App">
      {/* LEGACY CODE -->   <h1>Yeah, I'm working</h1> */}
      <TodoHeader>
        <TodoCounter todos={todos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        loading={loading}
        /* Mucho OJO!!
        No es lo mismo este código: 

        onLoading={() => {<LoadingComponent />;}}

        Que este:
         
        onLoading={() => <LoadingComponent />}
        */
        onLoading={() => <LoadingComponent />}
        error={error}
        onError={() => <ErrorComponent />}
        onEmptyTodos={() => <EmptyTodos />}
        searchedTodos={searchedTodos}
        onEmptySearchResult={(searchText) => (
          <p>No hay resultados de búsqueda para "{searchText}" </p>
        )}
        searchText={searchValue}
        todos={todos}
      >
        {(todo) => (
          <TodoItem
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        )}
      </TodoList>

      {/*       <TodoList>
        {loading && <LoadingComponent />}
        {error && <ErrorComponent error={error} />}
        {!loading && !todos.length && <EmptyTodos />}

        {searchedTodos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </TodoList> */}

      <CreateTodo openModal={openModal} setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
    </div>
  );
}

export { App };
