import { Route, Routes } from "react-router-dom";
import Search from "./pages/search/index";
import Login from "./pages/auth/login";
import { useState } from "react";
import Main from "./pages/main";

function App() {
  let token = localStorage.getItem('token');
  const [tokenData, setTokenData] = useState("");

  const handleAuth = (e) => {
    setTokenData(e);
  };

  if (token) {
    return (
      <Routes>
        <Route path="/home" element={<Main />} />
        <Route path="/search" element={<Search />} />
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
