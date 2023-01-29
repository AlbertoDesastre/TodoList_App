import "./CreateTodo.scss";

const CreateTodo = ({ openModal, setOpenModal }) => {
  return (
    <button className="createTodo" onClick={() => setOpenModal(!openModal)}>
      +
    </button>
  );
};

export default CreateTodo;
