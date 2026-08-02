import { useState } from "react";
import { FaRoad, FaCheckCircle } from "react-icons/fa";

function CareerRoadmap() {
  const [goal, setGoal] = useState("");
  const [showRoadmap, setShowRoadmap] = useState(false);

  const roadmap = [
    "Master HTML, CSS & JavaScript",
    "Learn React & Build Projects",
    "Understand Node.js & Express",
    "Practice DSA and Problem Solving",
    "Build Full Stack Projects",
    "Deploy Applications",
    "Prepare for Interviews",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-bold mb-3">
          AI Career Roadmap
        </h1>

        <p className="text-slate-400 mb-10">
          Generate a personalized learning roadmap based on your career goal.
        </p>

        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">

          <input
            type="text"
            placeholder="Example: Full Stack Developer"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full bg-slate-800 rounded-xl p-4 outline-none"
          />

          <button
            onClick={() => setShowRoadmap(true)}
            className="mt-6 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-3 rounded-xl font-semibold flex items-center gap-3"
          >
            <FaRoad />
            Generate Roadmap
          </button>

        </div>

        {showRoadmap && (
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 mt-10">

            <h2 className="text-3xl font-bold mb-8">
              Your Roadmap
            </h2>

            <div className="space-y-5">
              {roadmap.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-slate-800 rounded-xl p-5"
                >
                  <FaCheckCircle className="text-cyan-400" />
                  <span>{step}</span>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default CareerRoadmap;