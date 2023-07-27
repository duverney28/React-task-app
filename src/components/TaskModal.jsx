import React from "react";
import { useState } from "react";

function TaskModal({
  onClose,
  taskId,
  title,
  description,
  fecha,
  time,
  updateTask,
}) {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedFecha, setEditedFecha] = useState(formatFechaForInput(fecha));
  const [editedTime, seteditedTime] = useState(time);

  function formatFechaForInput(fecha) {
    const [year, month, day] = fecha.split("-");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }

  const handleTitleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  const handleTimeChange = (event) => {
    seteditedTime(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setEditedDescription(event.target.value);
  };

  const handleFechaChange = (event) => {
    setEditedFecha(event.target.value);
  };

  const handleGuardar = () => {
    updateTask(taskId, editedTitle, editedDescription, editedFecha, editedTime);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-900">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <div className="flex justify-between mb-4">
          <h2 className="text-black text-xl font-bold">Edita tu Tarea</h2>
          <button className="text-red-500 hover:text-red-700" onClick={onClose}>
            &times;
          </button>
        </div>
        <input
          type="text"
          className=" text-black w-full border border-gray-300 rounded px-3 py-2 mb-3"
          placeholder="Título"
          value={editedTitle}
          onChange={handleTitleChange}
        />
        <textarea
          className="w-full  text-black border border-gray-300 rounded px-3 py-2 mb-3"
          placeholder="Descripción"
          value={editedDescription}
          onChange={handleDescriptionChange}
        ></textarea>
        <input
          type="date"
          className="w-full border text-black border-gray-300 rounded px-3 py-2 mb-3"
          value={editedFecha}
          onChange={handleFechaChange}
        />
        <input
          type="time"
          className="w-full border  text-black border-gray-300 rounded px-3 py-2 mb-3"
          value={editedTime}
          onChange={handleTimeChange}
        />
        <div className="flex justify-end mt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 mr-2 rounded hover:bg-red-700"
            onClick={onClose}
          >
            Cerrar
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={handleGuardar}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
