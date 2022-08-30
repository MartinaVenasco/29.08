import { useState } from "react";

import "./App.css";
import ToDoList from "./components/ToDoList";
import Form from "./components/Form/Form";

function App() {
  const [list, setList] = useState([
    { id: 1, text: "My first task today", date: "29.08.2022" },
    {
      id: 2,
      text: "Second Task",
      date: "2022-09-05",
    },
  ]);
  const deleteItemHandler = (itemId) => {
    setList((prevList) => {
      const updatedList = prevList.filter((item) => item.id !== itemId);
      return updatedList;
    });
  };
 
  return (
    <div className="App">
      <section className="form-todo">
        <h1> MY TODO LIST</h1>
        <Form list={list} setList={setList} />
        <ToDoList list={list} onRemoveTask={deleteItemHandler}/>
      </section>
    </div>
  );
}

export default App;
