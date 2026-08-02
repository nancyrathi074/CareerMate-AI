import axios from "axios";

const API = axios.create({
  baseURL: "https://careermate-ai-nwo6.onrender.com/api",
});

export const analyzeResume = (resumeText) => {
  return API.post("/resume/analyze", {
    resumeText,
  });
};