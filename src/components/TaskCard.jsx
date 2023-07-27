import TaskModal from "./TaskModal";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

function TaskCard({ task, deleteTask, updateTask }) {
  const [currentYear, setCurrentYear] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentDay, setCurrentDay] = useState(0);
  const [currentHour, setCurrentHour] = useState(0);
  const [currentMinute, setCurrentMinute] = useState(0);

  useEffect(() => {
    const checkTimeAndShowNotification = () => {
      const [taskYear, taskMonth, taskDay] = task.fecha.split("-");
      const [taskHour, taskMinute] = task.time.split(":");

      const currentDate = new Date();
      setCurrentYear(currentDate.getFullYear());
      setCurrentMonth(currentDate.getMonth() + 1);
      setCurrentDay(currentDate.getDate());
      setCurrentHour(currentDate.getHours());
      setCurrentMinute(currentDate.getMinutes());

      console.log(
        "Fecha y hora actual:",
        currentYear,
        currentMonth,
        currentDay,
        currentHour,
        currentMinute
      );
      console.log(
        "Fecha y hora de la tarea:",
        taskYear,
        taskMonth,
        taskDay,
        taskHour,
        taskMinute
      );

      if (
        currentYear === parseInt(taskYear) &&
        currentMonth === parseInt(taskMonth) &&
        currentDay === parseInt(taskDay) &&
        Math.abs(currentHour - parseInt(taskHour)) <= 1 &&
        Math.abs(currentMinute - parseInt(taskMinute)) <= 1
      ) {
        console.log("Entró al if y mostró la notificación");
        toast.success(`Es hora de "${task.tittle}"`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    };

    const intervalId = setInterval(checkTimeAndShowNotification, 30000);
    return () => clearInterval(intervalId);
  }, [
    task.fecha,
    task.time,
    task.tittle,
    currentYear,
    currentMonth,
    currentDay,
    currentHour,
    currentMinute,
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=" bg-gray-800 text-white p-6 rounded-md">
      <h1 className="text-xl font-bold capitalize ">{task.tittle}</h1>
      <h3 className="text-gray-500 text-sm">{task.description}</h3>
      <h3 className="py-1">{task.fecha}</h3>
      <h3 className="py-1">{task.time}</h3>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        eliminar tarea
      </button>
      <button
        className="bg-yellow-500 px-4 py-1 mx-2 rounded-md mt-4 hover:bg-yellow-400"
        onClick={() => {
          handleOpenModal();
        }}
      >
        Editar tarea
      </button>
      {isModalOpen && (
        <TaskModal
          onClose={handleCloseModal}
          taskId={task.id}
          title={task.tittle}
          description={task.description}
          fecha={task.fecha}
          time={task.time}
          updateTask={updateTask}
        />
      )}
    </div>
  );
}

export default TaskCard;
