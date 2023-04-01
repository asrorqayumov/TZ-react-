import Axios from "axios";

const axios = Axios.create({
  baseURL:`${process.env.REACT_APP_BACKEND_URL}`,
  // withCredentials: true,
});
axios.interceptors.request.use(
  function (config) {
    config.headers.authorization = localStorage.getItem("token")
      ? `Bearer ${localStorage.getItem("token")}`
      : "";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


export default axios;


