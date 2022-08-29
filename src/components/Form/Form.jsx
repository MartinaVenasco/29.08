import "./index.css";
import { useState } from "react";

const Form = ({ list, setList }) => {
  const [task, setTask] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    setList([...list, { id: list.length + 1, text: task, date: todoDate }]);
    setTask("");
    setTodoDate("");
  };

  return (
    <form className="task-input" onSubmit={onFormSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Inserisci una todo"
        required
      />
      <input
        type="date"
        value={todoDate}
        onChange={(e) => setTodoDate(e.target.value)}
      />
      <button type="submit" className="form__button">
        Aggiungi
      </button>
    </form>
  );
};

export default Form;
