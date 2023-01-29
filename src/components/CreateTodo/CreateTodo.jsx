import "./CreateTodo.scss";

const CreateTodo = () => {
  return (
    <div className="createTodo">
      <h2>Escribe aquí tu Todo</h2>
      <input placeholder="Contratar a este chiquillo..."></input>
      <ul>
        <li>
          <button className="cancelButton">Cancelar</button>
        </li>
        <li>
          <button className="addButton">Añadir</button>
        </li>
      </ul>
    </div>
  );
};

export default CreateTodo;
