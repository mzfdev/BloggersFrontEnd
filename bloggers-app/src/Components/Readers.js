import React, { useState, useEffect } from "react";
import axios from "axios";
import ReaderForm from "./formReaders";
import Eliminar from "./eliminar";

function Readers() {
  const [readers, setReaders] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/Readers/Readers_view")
      .then((response) => {
        setReaders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold my-4 text-center">Readers</h2>
        <button
          onClick={handleShowForm}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Reader
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {readers.map((reader) => (
          <div
            key={reader.id}
            className="bg-gray-300 bg-opacity-40 rounded-lg p-4 border border-gray-500"
          >
            <h3 className="text-lg font-medium">{reader.name}</h3>
            <Eliminar id={reader._id} />
          </div>
        ))}
      </div>
      {showForm && <ReaderForm onClose={handleHideForm} />}
    </div>
  );
}

export default Readers;
