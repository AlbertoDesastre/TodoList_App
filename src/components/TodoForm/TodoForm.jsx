import "./TodoForm.scss";

const TodoForm = () => {
  return (
    <form className="todoForm">
      <h2>Escribe aquí tu Todo</h2>
      <textarea placeholder="Contratar a este chiquillo..."></textarea>
      <ul>
        <li>
          <button className="cancelButton">Cancelar</button>
        </li>
        <li>
          <button className="addButton">Añadir</button>
        </li>
      </ul>
    </form>
  );
};

export default TodoForm;
