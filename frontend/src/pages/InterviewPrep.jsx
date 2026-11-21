
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import {
  FiCpu,
  FiPlayCircle,
  FiUser,
  FiCheckCircle,
} from "react-icons/fi";

function InterviewPrep() {
  const [role, setRole] = useState("");
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");

  const generateQuestions = () => {
    if (!role.trim()) {
      setError("Please enter your target job role.");
      return;
    }

    setError("");

    setQuestions([
      `Explain the core concepts and responsibilities of a ${role}.`,
      "Tell me about yourself and your technical background.",
      "Describe a challenging project you have worked on.",
      "How do you approach debugging and solving technical problems?",
      "What are your strengths and areas you want to improve?",
      "Why are you interested in this particular role?",
    ]);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-[#34323d]">
        <div className="mx-auto max-w-[1160px] px-6 py-16">

          {/* Page Heading */}
          <div className="mb-12">
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#82739e]">
              INTERVIEW PREPARATION
            </p>

            <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
              Interview Prep
            </h1>

            <p className="text-lg text-[#777481]">
              Practise common interview questions and prepare for your next opportunity.
            </p>
          </div>

          {/* Role Input */}
          <section className="rounded-3xl border border-[#e9e7ed] bg-[#f7f6f9] p-6 md:p-10">

            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eee9f7] text-3xl text-[#82739e]">
                <FiCpu />
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  Prepare for an interview
                </h2>

                <p className="mt-1 text-[#777481]">
                  Enter the role you are preparing for.
                </p>
              </div>
            </div>

            <label className="mb-3 block font-semibold">
              Target Job Role
            </label>

            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") generateQuestions();
              }}
              placeholder="Example: Java Developer"
              className="w-full rounded-2xl border border-[#e4dfeb] bg-white px-5 py-4 text-[#34323d] outline-none transition focus:border-[#a995c7] focus:ring-2 focus:ring-[#eee9f7]"
            />

            {error && (
              <p className="mt-3 text-sm text-red-600">{error}</p>
            )}

            <button
              onClick={generateQuestions}
              className="mt-6 flex items-center gap-3 rounded-xl bg-[#82739e] px-8 py-4 font-semibold text-white transition hover:bg-[#71618e]"
            >
              <FiPlayCircle />
              Generate Questions
            </button>

          </section>

          {/* Generated Questions */}
          {questions.length > 0 && (
            <section className="mt-12">

              <div className="mb-7">
                <p className="mb-2 text-sm font-bold tracking-[0.2em] text-[#82739e]">
                  YOUR PRACTICE SESSION
                </p>

                <h2 className="text-3xl font-semibold">
                  Interview Questions for {role}
                </h2>

                <p className="mt-2 text-[#777481]">
                  Use these questions to practise your interview preparation.
                </p>
              </div>

              <div className="space-y-4">
                {questions.map((question, index) => (
                  <article
                    key={index}
                    className="flex items-start gap-5 rounded-2xl border border-[#e9e7ed] bg-[#f7f6f9] p-6"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eee9f7] font-semibold text-[#82739e]">
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <p className="font-medium leading-7">
                        {question}
                      </p>
                    </div>

                    <FiCheckCircle className="mt-1 shrink-0 text-xl text-[#82739e]" />
                  </article>
                ))}
              </div>

              <p className="mt-5 text-sm text-[#777481]">
                These are starter practice questions, not AI-generated interview responses.
              </p>

            </section>
          )}

        </div>
      </main>
    </>
  );
}

export default InterviewPrep;
