import TaskCard from "./TaskCard";
import Taskfilter from "./Taskfilter";
import { useState, useEffect } from "react";

function TaskList({ tasks, deleteTask, updateTask, toggleTaskStatus }) {
  const [filterTerm, setFilterTerm] = useState("");

  const handleFilterChange = (term) => {
    setFilterTerm(term);
  };

  useEffect(() => {}, [filterTerm]);

  if (tasks.length === 0) {
    return (
      <h1 className="text-white capitalize text-4xl text-center">
        No Hay Tareas Aún
      </h1>
    );
  }
  const filteredTasks = tasks.filter((task) =>
    task.tittle.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-4 gap-4">
      <Taskfilter handleFilterChange={handleFilterChange} />
      {filteredTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
          toggleTaskStatus={toggleTaskStatus}
        />
      ))}
    </div>
  );
}

export default TaskList;
