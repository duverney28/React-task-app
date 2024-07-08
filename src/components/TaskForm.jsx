import { useState } from "react";

function TaskForm({ createTask }) {
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const [fecha, setFecha] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      tittle,
      description,
      fecha,
      time,
    });

    setTittle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl my-5 text-center text-white capitalize">
          crear tarea
        </h1>
        <input
          placeholder="Escribe Tu Tarea! "
          onChange={(e) => setTittle(e.target.value)}
          value={tittle}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
          required
        />
        <textarea
          placeholder="Escribe La Descripcion De La Tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
          required
        ></textarea>
        <h1 className="text-white capitalize">Fecha:</h1>
        <label htmlFor="fecha"></label>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          onChange={(e) => setFecha(e.target.value)}
          type="date"
          id="fecha"
          name="fecha"
          required
        />
        <h1 className="text-white capitalize">Hora:</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          onChange={(e) => setTime(e.target.value)}
          type="time"
          id="time"
          name="time"
          required
        />

        <button className="bg-green-500 px-4 py-2 hover:bg-green-700 text-white">
          guardar
        </button>
      </form>
    </div>
  );
}

//MODIFIQUE EL TASKFORM

export default TaskForm;
