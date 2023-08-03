import React, { useState } from "react";
import "./EnterTask.css";

const EnterTask = (props) => {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task !== "") {
      const temp = {
        title: task,
        visib: true,
      };
      props.onSaveData(temp);
      setTask("");
    } else {
      alert("Can't submit empty task");
    }
  };

  return (
    <div>
      <p className="heading">Enter a Task</p>
      <form className="input_task">
        <input
          type="text"
          className="input"
          value={task}
          onChange={handleChange}
          placeholder="Enter task..."
        />
        <button type="submit" className="add_btn" onClick={handleSubmit}>
          ADD
        </button>
      </form>
    </div>
  );
};

export default EnterTask;
