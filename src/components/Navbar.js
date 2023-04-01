import React from "react";

import "./style.css";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ handleAuth }) {
  const navigate = useNavigate();
  const clearLocalStorage = () => {
    localStorage.clear();
    handleAuth("success");
    navigate("/");
  };
  return (
    <nav>
      <ul>
        <li>
          <Link className="link_button" to={"/home"}>
            Home
          </Link>
        </li>
        <li>
          <button onClick={clearLocalStorage} className="btn_white">
            Log Out
          </button>
        </li>
      </ul>
    </nav>
  );
}
