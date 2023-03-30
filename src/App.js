import { Route, Routes } from "react-router-dom";
import Search from './pages/search/index';
import Login from './pages/auth/login';
import { useState } from "react";
import Main from "./pages/main";

function App() {
  let token = localStorage.getItem('token');
  const [date, setData] = useState('');

  if (token) {
    return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    ); 
  } else {
    return (
      <Routes>
        <Route path="/" element={<Login />}  setData={setData} />
      </Routes>
    ); 
  }
}


export default App;
