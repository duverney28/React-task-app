import TaskList from "./components/TaskList";
import Taskform from "./components/TaskForm";
import { tasks as data } from "./data/tasks";
import { useState, useEffect } from "react";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const updateTask = (
    taskId,
    updatedTitle,
    updatedDescription,
    updatedFecha,
    updateTime
  ) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              tittle: updatedTitle,
              description: updatedDescription,
              fecha: updatedFecha,
              time: updateTime,
            }
          : task
      )
    );
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        tittle: task.tittle,
        id: tasks.length,
        description: task.description,
        fecha: task.fecha,
        time: task.time,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <main className="bg-zinc-500 h-full">
      <div className="container mx-auto">
      <ToastContainer/>
        <Taskform createTask={createTask} />
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      </div>
    </main>
  );
}

export default App;
