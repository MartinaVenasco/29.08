import "./index.css";
import Todotask from "../Todo/Todotask";

const ToDoList = ({ list, onRemoveTask}) => {

  return (
    <div>
      <div className="TodoList">
        {list.length ? (
          list.map((todo, i) => (
            <Todotask id ={i} onRemoveTask={onRemoveTask}  todo={todo} key={todo.id} />
          ))
        ) : (
          <p>...loading</p>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
