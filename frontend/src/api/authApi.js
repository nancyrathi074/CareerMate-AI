
const API_URL = "https://careermate-java-backend.onrender.com/api/auth";

async function authRequest(endpoint, userData) {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong.");
  }

  return data;
}

export const signupUser = (userData) =>
  authRequest("signup", userData);

export const loginUser = (userData) =>
  authRequest("login", userData);
