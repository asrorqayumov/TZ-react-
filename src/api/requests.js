import axios from './axios';


// Log in
export function logInRequest(data) {
  return axios
    .post("/security/auth_check", data)
    .then((res) => res)
    .catch((err) => err);
}

// items
export function getItems(size) {
  return axios
    .get(`/variations?size=${size}`,)
    .then((res) => res)
    .catch((err) => err);
}

