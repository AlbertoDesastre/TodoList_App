import "./TodoCounter.scss";

const TodoCounter = ({ todos, completedTodos }) => {
  return (
    <p className="todoCounter">
      Has completado {completedTodos} de {todos.length} Todos!
    </p>
  );
};

export default TodoCounter;
