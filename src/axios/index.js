import axios from "axios";

const axiosAuthorized = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosAuthorized.interceptors.request.use((req) => {
  const token = localStorage.getItem("Authorization");

  req.headers = {
    ...req.headers,
    Authorization: `Token ${token}`,
  };

  return req;
});

export { axiosAuthorized };
