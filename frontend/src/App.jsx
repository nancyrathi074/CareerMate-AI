import { BrowserRouter, Routes, Route } from "react-router-dom";
import CareerRoadmap from "./pages/CareerRoadmap";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import JobMatcher from "./pages/JobMatcher";
import InterviewPrep from "./pages/InterviewPrep";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        /> 
        <Route
  path="/career-roadmap"
  element={<CareerRoadmap />}
/>
          <Route
  path="/resume-analyzer"
  element={<ResumeAnalyzer />}
/>
       <Route
  path="/job-matcher"
  element={<JobMatcher />} 
                
/> 
<Route
  path="/interview-prep"
  element={<InterviewPrep />}
/>
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;