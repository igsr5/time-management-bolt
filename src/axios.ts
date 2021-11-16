import axios, { AxiosInstance } from "axios";

const baseURL = process.env.REACT_APP_GOMOKU_API_URL || "http://localhost:8000"

export const AxiosClient: AxiosInstance = axios.create({
    baseURL,
    timeout: 3000,
    headers: {},
  });