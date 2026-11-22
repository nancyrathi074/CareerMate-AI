
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CareerRoadmap from "./pages/CareerRoadmap";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import JobMatcher from "./pages/JobMatcher";
import InterviewPrep from "./pages/InterviewPrep";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected pages */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/career-roadmap" element={<CareerRoadmap />} />
          <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
          <Route path="/job-matcher" element={<JobMatcher />} />
          <Route path="/interview-prep" element={<InterviewPrep />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
