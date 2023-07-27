import React from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Taskfilter({ handleFilterChange }) {
  useEffect(() => {
    toast.success("¡Hola, Bienvenid@ a Tu App de Tareas!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);
  return (
    <div className=" bg-gray-800 text-black p-6 rounded-md">
      <ToastContainer />
      <h1 className="text-white my-3 capitalize">buscar:</h1>
      <input
        type="text"
        placeholder="Buscar Tarea por Título..."
        onChange={(e) => handleFilterChange(e.target.value)}
        className="bg-slate-300 p-3 w-full mb-2"
      />
    </div>
  );
}

export default Taskfilter;
