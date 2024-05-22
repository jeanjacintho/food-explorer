import axios from "axios";

export const api = axios.create({
  baseURL: 'https://food-explorer-jl4i.onrender.com',
  withCredentials: true,
});