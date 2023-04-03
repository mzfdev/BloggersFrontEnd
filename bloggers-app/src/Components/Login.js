import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Login({ onLoginResponse }) {
  const [identifier, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const params = new URLSearchParams();
      params.append('identifier', identifier);
      params.append('password', password);
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
      const response = await axios.post('http://localhost:8080/auth/signin', params.toString(), config);
      console.log(response.data);
      onLoginResponse(response.data);
    } catch (error) {
      console.error(error);
      setErrorMessage('Datos incorrectos');
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <form onSubmit={handleSubmit} className="glass-card rounded-md w-80 p-4 flex flex-col items-center">
        <label htmlFor="username" className="text-lg font-bold mb-2">Username:</label>
        <input
          type="text"
          id="username"
          value={identifier}
          onChange={(event) => setUsername(event.target.value)}
          className="border rounded p-2 mb-4 w-full"
        />
        <label htmlFor="password" className="text-lg font-bold mb-2">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="border rounded p-2 mb-4 w-full"
        />
        {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          Iniciar Sesion
          </button>
      </form>
    </div>
  );
}

export default Login;
