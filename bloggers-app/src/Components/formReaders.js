import React, { useState, useEffect } from "react";
import axios from "axios";

function Formulario() {
  const [name, setName] = useState("");
  const [readers, setReaders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/Readers").then((response) => {
      setReaders(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();
    params.append("name", name);
    axios
      .post("http://localhost:8080/Readers/create", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        console.log(response.data);
        axios.get("http://localhost:8080/Readers").then((response) => {
          setReaders(response.data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
    setName("");
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
      <div>
        <h2>Readers List</h2>
        <ul>
          {readers.map((reader) => (
            <li key={reader.id}>{reader.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Formulario;
