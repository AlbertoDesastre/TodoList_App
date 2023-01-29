import "./CreateTodo.scss";

const CreateTodo = ({ openModal, setOpenModal }) => {
  return <button onClick={() => setOpenModal(!openModal)}>+</button>;
};

export default CreateTodo;
