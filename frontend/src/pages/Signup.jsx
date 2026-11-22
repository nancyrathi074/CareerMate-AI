
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../api/authApi";
import "../styles/Auth.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    setLoading(true);

    try {
      const data = await signupUser(formData);

      sessionStorage.setItem("authToken", data.token);
      sessionStorage.setItem(
        "authUser",
        JSON.stringify({
          name: data.name,
          email: data.email,
        })
      );

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link to="/" className="auth-brand">
          CareerMate<span>AI</span>
        </Link>

        <div className="auth-heading">
          <h1>Create your account</h1>
          <p>Start building your future with CareerMateAI.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Full name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create a password (8 characters minimum)"
            value={formData.password}
            onChange={handleChange}
            minLength={8}
            required
          />

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
