import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import { useState } from "react";
import Main from "./pages/main";

function App() {
  let token = localStorage.getItem("token");
  const [tokenData, setTokenData] = useState("");
  const handleAuth = (e) => {
    setTokenData(e);
  };

  if (token) {
    return (
      <Routes>
        <Route
          path="/"
          element={<Main handleAuth={(e) => handleAuth(e)} />}
        />
         <Route
          path="/home"
          element={<Main handleAuth={(e) => handleAuth(e)} />}
        />
         <Route
          path="/"
          element={<Main handleAuth={(e) => handleAuth(e)} />}
        />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Login handleAuth={(e) => handleAuth(e)} />} />
      </Routes>
    );
  }
}

export default App;
