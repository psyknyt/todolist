import React, { useState } from "react";
import "./Task.css";

const Task = (props) => {
  const [isVis, setVis] = useState(props.in.visib);
  const index = props.index;
  const handleChange = () => {
    setVis((prev) => !prev);
    console.log(isVis);
    const temp = {
      index,
      isVis,
    };
    // console.log(temp);
    props.onSaveCheck(temp);
  };
  let Content;
  if (isVis === true) {
    Content = (
      <div className="task_bar" key={props.index}>
        <input type="checkbox" className="checkBox" onChange={handleChange} />
        <div className="title">{props.in.title}</div>
      </div>
    );
  } else {
    Content = (
      <div className="task_bar" key={props.index}>
        <div className="title">
          <p>Task Done</p>
        </div>
      </div>
    );
  }
  return <div>{ isVis && Content}</div>;
};

export default Task;
