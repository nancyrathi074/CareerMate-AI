
import axios from "axios";

const API = axios.create({
  baseURL: "https://careermate-java-backend.onrender.com/api",
});

export const analyzeResume = (file) => {
  const token = sessionStorage.getItem("authToken");

  if (!token) {
    throw new Error("Please sign in to analyze your resume.");
  }

  const formData = new FormData();
  formData.append("resume", file);

  return API.post("/resume/analyze", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
