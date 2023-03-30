import Axios from "axios";

const axios = Axios.create({
  baseURL:'https://toko.ox-sys.com',
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


