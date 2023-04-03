import React from "react";
import axios from "axios";

function Eliminar({ id }) {
  const handleEliminar = () => {
    axios
      .delete(`http://localhost:8080/Readers/${id}`)
      .then(() => {
        console.log(`Reader with id ${id} has been deleted.`);
        window.location.reload(); // Actualizar la página después de eliminar
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={handleEliminar}
    >
      Eliminar
    </button>
  );
}

export default Eliminar;
