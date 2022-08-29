import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import Form from "./components/Form/Form";

function App() {
  const [list, setList] = useState([
    { id: 1, task: "My first task today", day: "29.08.2022" },
  ]);

  return (
    <div className="App">
      <section className="form-todo">
        <Form list={list} setList={setList} />
        <ToDoList list={list} />
      </section>
    </div>
  );
}

export default App;
