import { TodoContext } from "../TodoContext/TodoContext";
import { useContext } from "react";
import "./TodoSearch.scss";

const TodoSearch = ({ searchValue, setSearchValue }) => {
  /* Ojo!! Porque no es lo mismo haber puesto en el "onChange" esto:
  onChange={(e)=>{
    setSearchValue(e.target.value)
    console.log(e.target.value)
  }}

  que la implementación final!

  Si hago la opción arriba comentada, y pulsas cualquier tecla, en la consola te mostrará el valor antiguo todo el rato.
  */
  const onChangeSearchValue = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <>
      <input
        className="todoSearch"
        value={searchValue}
        onChange={onChangeSearchValue}
      ></input>
    </>
  );
};

export default TodoSearch;
