import "./index.css";
import Todotask from "../Todo/Todotask";

const ToDoList = ({ list }) => {
  return (
    <div >
      <div className="TodoList">
        {list.length ? (
          list.map((todo) => <Todotask todo={todo} key={todo.id} />)
        ) : (
          <p>...loading</p>
          
        )}
        
      </div>
    </div>
  );
};

export default (ToDoList);
