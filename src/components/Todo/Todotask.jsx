import "./index.css";

import { TiDelete } from 'react-icons/ti'

function Todotask({ todo, onRemoveTask }) {

  const deleteTodo = (e) => {
    onRemoveTask(todo.id);
  };

  return (
   
    <div className="Todotask" key={todo.id}>
   
      <h3> {todo.text}</h3>
      <h5>{todo.date}</h5>
      <button
        type="button"
        className="task__button"
        onClick={deleteTodo}
      >
        <TiDelete size={16} />
      </button>
    </div>
  );
}

export default Todotask;
