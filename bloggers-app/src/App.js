import React, { useState } from "react";
import Main from "./Main";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  const [loginResponse, setLoginResponse] = useState({});

  const handleLoginResponse = (response) => {
    setLoginResponse(response);
  };

  return (
    <div className="App">
      {loginResponse.message === "Usuario Correcto" ? (
        <Main />
      ) : (
        <Login onLoginResponse={handleLoginResponse} />
      )}
    </div>
  );
}

export default App;


