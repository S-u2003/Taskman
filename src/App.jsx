import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";
import Progresstracker from "./Components/Progresstracker";
import { useState, useEffect } from "react";
import "./Style.css";

export default function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (index, updatedTask) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? updatedTask : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <div>
      <header>
        <h1>TaskMan</h1>
        <p>Your friendly Task Manager</p>
      </header>

      <Taskform addTask={addTask} />

      <Tasklist
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />

      <Progresstracker tasks={tasks} />

      {tasks.length > 0 && (
        <button onClick={clearAllTasks}>
          Clear All Tasks
        </button>
      )}
    </div>
  );
}