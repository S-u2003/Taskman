export default function Tasklist({ tasks, updateTask, deleteTask }) {

  const toggleComplete = (index) => {
    const updatedTask = {
      ...tasks[index],
      completed: !tasks[index].completed
    };

    updateTask(index, updatedTask);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task.text} {task.priority},{task.category}

          <button onClick={() => toggleComplete(index)}>
            {task.completed ? "Undo" : "Complete"}
          </button>

          <button onClick={() => deleteTask(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}