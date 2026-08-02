import { useState } from "react";
import { FaRobot, FaPlayCircle } from "react-icons/fa";

function InterviewPrep() {
  const [role, setRole] = useState("");
  const [questions, setQuestions] = useState([]);

  const generateQuestions = () => {
    if (!role.trim()) return;

    setQuestions([
      `Explain the Virtual DOM in React.`,
      `What are React Hooks and why are they used?`,
      `How would you optimize the performance of a React application?`,
      `Tell me about yourself.`,
      `Why do you want to join our company?`,
    ]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-bold mb-3">
          AI Interview Prep
        </h1>

        <p className="text-slate-400 mb-10">
          Generate technical and HR interview questions for your target role.
        </p>

        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">

          <label className="block mb-3 text-lg">
            Target Role
          </label>

          <input
            type="text"
            placeholder="Example: Frontend Developer"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full bg-slate-800 rounded-xl p-4 outline-none mb-6"
          />

          <button
            onClick={generateQuestions}
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-3 rounded-xl font-semibold flex items-center gap-3"
          >
            <FaRobot />
            Generate Questions
          </button>

        </div>

        {questions.length > 0 && (
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 mt-10">

            <h2 className="text-3xl font-bold mb-6">
              Interview Questions
            </h2>

            <div className="space-y-5">
              {questions.map((q, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl p-5 flex items-start gap-4"
                >
                  <FaPlayCircle className="text-cyan-400 mt-1" />
                  <p>{q}</p>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default InterviewPrep;