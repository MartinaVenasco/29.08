import "./index.css";

import { FaTrashAlt } from 'react-icons/fa'

function Todotask({ todo, list, setList, id }) {

  const onRemoveTask = (e) => {
    list.filter((todo) => todo.id != e.target.id);
    setList([...list]);
  };

  return (
   
    <div className="Todotask" id={id} key={todo.id}>
      <h3> {todo.text}</h3>
      <h5>{todo.date}</h5>
      <button
        type="button"
        className="task__button"
        onClick={onRemoveTask}
      >
        <FaTrashAlt size={16} />
      </button>
    </div>
  );
}

export default Todotask;
