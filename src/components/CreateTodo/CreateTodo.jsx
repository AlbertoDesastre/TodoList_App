import "./CreateTodo.scss";

const CreateTodo = () => {
  return (
    <>
      <input placeholder="Contratar a este chiquillo..."></input>
      <ul>
        <li>
          <button>Cancelar</button>
        </li>
        <li>
          <button>Añadir</button>
        </li>
      </ul>
    </>
  );
};

export default CreateTodo;
