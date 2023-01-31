import "./TodoList.scss";
const TodoList = ({ children }) => {
  return <ul className="ul-todoList">{children}</ul>;
};

export default TodoList;
