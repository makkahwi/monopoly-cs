import axios from "axios";

export const baseURL =
  process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:8000/";

const service = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default service;

export const demo = false;
