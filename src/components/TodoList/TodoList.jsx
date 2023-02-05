import "./TodoList.scss";

const TodoList = (props) => {
  console.log(props.searchTextt);
  return (
    <section className="todoList-container">
      {/*  Si recibe "error" o "loading" cargará la función "onError" o
      "onLoading" */}
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.todos.length && props.onEmptyTodos()}

      {/* Si al buscar un todo, no lo encuentra, significa que el "valor de busqueda"
      o "searchValue" no coincide con ningún Todo registrado y salta el <p> */}
      {!props.loading &&
        !props.searchedTodos?.length &&
        props.onEmptySearchResult(props.searchText)}
      <ul className="ul-todoList">{props.searchedTodos.map(props.render)}</ul>
    </section>
  );
};

export default TodoList;
