import { useState } from "react";

export default function Taskform({ addTask }) {

  let [task, setTask] = useState("");
  let [priority, setPriority] = useState("Medium");
  let [category, setCategory] = useState("General");

  const handlesubmit = (e) => {
    e.preventDefault();

    addTask({
      text: task,
      priority,
      category,
      completed: false
    });

    setTask("");
  };

  return (
    <div>
      <form className="task-form" onSubmit={handlesubmit}>

        <div id="inp">
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button type="submit">Add task</button>
        </div>

        <div id="btns">
          <select
            onChange={(e) => setPriority(e.target.value)}
            value={priority}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Study">Study</option>
          </select>
        </div>

      </form>
    </div>
  );
}