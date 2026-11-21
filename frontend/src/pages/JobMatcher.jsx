
import { useState } from "react";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";

function JobMatcher() {
  const [jobDescription, setJobDescription] = useState("");
  const [analyzed, setAnalyzed] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = () => {
    if (!jobDescription.trim()) {
      setError("Please paste a job description first.");
      setAnalyzed(false);
      return;
    }

    setError("");
    setAnalyzed(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#34323d]">
      <section className="mx-auto w-full max-w-[1160px] px-4 py-16 sm:px-6 sm:py-20">

        <div className="mb-12">
          <span className="mb-3 block text-sm font-bold tracking-[0.16em] text-[#82739e]">
            JOB SEARCH
          </span>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Job Matcher
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-[#777481]">
            Compare job requirements with your skills and identify areas
            to work on.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">

          {/* Job description input */}
          <section className="rounded-2xl border border-[#e9e7ed] bg-[#f7f6f9] p-6 sm:p-8">

            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eee9f7] text-xl text-[#82739e]">
                <FaBriefcase />
              </div>

              <div>
                <h2 className="text-xl font-semibold">
                  Job Description
                </h2>
                <p className="text-sm text-[#777481]">
                  Add the job details you want to compare.
                </p>
              </div>
            </div>

            <label
              htmlFor="job-description"
              className="mb-3 block font-semibold"
            >
              Paste job description
            </label>

            <textarea
              id="job-description"
              rows={12}
              placeholder="Paste Job Description Here..."
              value={jobDescription}
              onChange={(e) => {
                setJobDescription(e.target.value);
                setError("");
              }}
              className="w-full resize-y rounded-xl border border-[#e5e1eb] bg-white p-5 text-[#34323d] outline-none transition placeholder:text-[#a29eaa] focus:border-[#b9a9d2] focus:ring-2 focus:ring-[#eee9f7]"
            />

            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}

            <button
              type="button"
              onClick={handleAnalyze}
              className="mt-6 rounded-xl bg-[#82739e] px-8 py-3.5 font-semibold text-white transition hover:bg-[#71618e]"
            >
              Analyze Match
            </button>
          </section>

          {/* Result section */}
          <section className="min-h-[500px] rounded-2xl border border-[#e9e7ed] bg-[#f7f6f9] p-6 sm:p-8">

            {!analyzed ? (
              <div className="flex min-h-[440px] flex-col items-center justify-center text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eee9f7] text-2xl text-[#82739e]">
                  <FaBriefcase />
                </div>

                <h2 className="mb-2 text-xl font-semibold">
                  Match Results
                </h2>

                <p className="max-w-xs leading-7 text-[#777481]">
                  Your job matching results will appear here after you
                  submit a job description.
                </p>
              </div>
            ) : (
              <>
                <h2 className="mb-8 text-2xl font-semibold">
                  Match Result
                </h2>

                <div className="mb-9 rounded-xl border border-[#e9e7ed] bg-white p-5">
                  <p className="mb-3 font-medium text-[#777481]">
                    Match Percentage
                  </p>

                  <div className="h-3 w-full overflow-hidden rounded-full bg-[#eee9f7]">
                    <div
                      className="h-full rounded-full bg-[#a69abf]"
                      style={{ width: "82%" }}
                    />
                  </div>

                  <p className="mt-4 text-3xl font-semibold text-[#82739e]">
                    82%
                  </p>

                  <p className="mt-1 text-sm text-[#9691a1]">
                    Sample result — not calculated from your resume.
                  </p>
                </div>

                <h3 className="mb-4 text-lg font-semibold">
                  Missing Skills
                </h3>

                <ul className="space-y-4">
                  {["Docker", "Kubernetes", "AWS"].map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-[#5f5c68]"
                    >
                      <FaCheckCircle className="text-[#82739e]" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>

        </div>
      </section>
    </main>
  );
}

export default JobMatcher;
