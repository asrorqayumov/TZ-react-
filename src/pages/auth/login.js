import React, { useState } from "react";
import { logInRequest } from "../../api/requests";
import { useNavigate } from "react-router-dom";
import { Toast } from "./../../utils/toastify";
import "./style.css";

const Login = ({setData}) => {

  const [user, setUser] = useState({
    _username: "",
    _password: "",
    _subdomain: "toko",
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("_username", user._username);
      formData.append("_password", user._password);
      formData.append("_subdomain", user._subdomain);
      const response = await logInRequest(formData);
      localStorage.setItem("token", response?.data?.token);
      setData('success')
    } catch (err) {
      console.log(err);
      Toast.fire({
        icon: "error",
        title: `${err?.response?.data?.message}`,
      });
    }
  };

  return (
    <section className="main_section">
      <div className="login_wrapper">
        <div className="login_card">
          <h1>Log in </h1>
          <form onSubmit={formHandler} className="login_form">
            <div className="form_group">
              <label className="login_label" htmlFor="_username">
                Username
              </label>
              <input
                className="input"
                type="text"
                name="_username"
                id="_username"
                onChange={inputHandler}
              />
            </div>
            <div className="form_group">
              <label className="login_label" htmlFor="_password">
                Password
              </label>
              <input
                className="input"
                type="password"
                name="_password"
                id="_password"
                onChange={inputHandler}
              />
            </div>
            <div className="form_group_last">
              <button className="btn_primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
