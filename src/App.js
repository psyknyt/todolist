import React, { useState } from "react";
import "./App.css";
import "./Component/EnterTask";
import EnterTask from "./Component/EnterTask";
import Task from "./Component/Task";

const listTask = [
  {
    title: "DO something brooo",
    visib: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(listTask);

  const handleSavingTask = (task) => {
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  };
  const handleCheck = (temp) => {
    console.log(temp);
  };
  const filterdTasks = tasks.filter((t) => {
    return t.visib === true;
  });
  //  console.log(filterdTasks);
  return (
    <div className="App">
      <EnterTask onSaveData={handleSavingTask} />

      {filterdTasks.map((task, index) => {
        return (
          <Task in={task} key={index} index={index} onSaveCheck={handleCheck} />
        );
      })}
    </div>
  );
}

export default App;
