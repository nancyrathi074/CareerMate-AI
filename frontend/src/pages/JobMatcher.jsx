import { useState } from "react";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";

function JobMatcher() {
  const [jobDescription, setJobDescription] = useState("");
  const [analyzed, setAnalyzed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-bold mb-3">
          AI Job Matcher
        </h1>

        <p className="text-slate-400 mb-10">
          Paste a job description and compare it with your resume.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Input */}

          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">

            <div className="flex items-center gap-3 mb-6">
              <FaBriefcase className="text-cyan-400 text-3xl" />
              <h2 className="text-2xl font-semibold">
                Job Description
              </h2>
            </div>

            <textarea
              rows={12}
              placeholder="Paste Job Description Here..."
              className="w-full bg-slate-800 rounded-xl p-5 outline-none"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />

            <button
              onClick={() => setAnalyzed(true)}
              className="mt-6 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-3 rounded-xl"
            >
              Analyze Match
            </button>

          </div>

          {/* Result */}

          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">

            {!analyzed ? (

              <div className="h-full flex justify-center items-center text-slate-500">
                Paste a job description to begin.
              </div>

            ) : (

              <>
                <h2 className="text-3xl font-bold mb-6">
                  Match Result
                </h2>

                <div className="mb-8">

                  <p className="text-slate-400 mb-2">
                    Match Percentage
                  </p>

                  <div className="w-full bg-slate-700 rounded-full h-4">

                    <div
                      className="bg-green-400 h-4 rounded-full"
                      style={{ width: "82%" }}
                    />

                  </div>

                  <p className="text-green-400 text-3xl font-bold mt-4">
                    82%
                  </p>

                </div>

                <h3 className="text-xl font-semibold mb-4">
                  Missing Skills
                </h3>

                <ul className="space-y-3">

                  <li className="flex gap-3">
                    <FaCheckCircle className="text-cyan-400" />
                    Docker
                  </li>

                  <li className="flex gap-3">
                    <FaCheckCircle className="text-cyan-400" />
                    Kubernetes
                  </li>

                  <li className="flex gap-3">
                    <FaCheckCircle className="text-cyan-400" />
                    AWS
                  </li>

                </ul>

              </>

            )}

          </div>

        </div>

      </div>
    </div>
  );
}

export default JobMatcher;