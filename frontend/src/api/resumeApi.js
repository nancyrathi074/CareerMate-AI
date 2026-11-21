import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const analyzeResume = (file) => {
  const formData = new FormData();
  formData.append("resume", file);

  return API.post("/resume/analyze", formData);
};