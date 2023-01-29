import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoForm.scss";

const TodoForm = () => {
  const { setOpenModal, addTodo } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    setNewTodoValue("");
  };

  return (
    <form className="todoForm" onSubmit={onSubmit}>
      <h2>Escribe aquí tu Todo</h2>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Contratar a este chiquillo..."
      ></textarea>
      <ul>
        <li>
          <button type="button" onClick={onCancel} className="cancelButton">
            Cancelar
          </button>
        </li>
        <li>
          <button type="submit" className="addButton">
            Añadir
          </button>
        </li>
      </ul>
    </form>
  );
};

export default TodoForm;
