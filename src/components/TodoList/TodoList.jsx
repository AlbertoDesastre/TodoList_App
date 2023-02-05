import "./TodoList.scss";

const TodoList = (props) => {
  console.log(props);
  return (
    <section className="todoList-container">
      {/*  Si recibe "error" o "loading" cargará la función "onError" o
      "onLoading" */}
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.searchedTodos?.length && props.onEmptyTodos()}

      <ul className="ul-todoList">{props.searchedTodos.map(props.render)}</ul>
    </section>
  );
};

export default TodoList;
