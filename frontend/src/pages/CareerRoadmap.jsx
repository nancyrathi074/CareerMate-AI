
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import { FiMap, FiCheckCircle, FiBookOpen } from "react-icons/fi";

function CareerRoadmap() {
  const [goal, setGoal] = useState("");
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [error, setError] = useState("");

  const roadmap = [
    {
      title: "Master HTML, CSS & JavaScript",
      description: "Build a strong foundation in web development.",
    },
    {
      title: "Learn React & Build Projects",
      description: "Understand components, hooks and frontend development.",
    },
    {
      title: "Understand Node.js & Express",
      description: "Learn backend development, APIs and server-side programming.",
    },
    {
      title: "Practice DSA and Problem Solving",
      description: "Improve logical thinking and problem-solving skills.",
    },
    {
      title: "Build Full Stack Projects",
      description: "Combine frontend, backend and database technologies.",
    },
    {
      title: "Deploy Applications",
      description: "Learn to host and maintain your applications.",
    },
    {
      title: "Prepare for Interviews",
      description: "Revise technical concepts and practise interview questions.",
    },
  ];

  const generateRoadmap = () => {
    if (!goal.trim()) {
      setError("Please enter your career goal first.");
      setShowRoadmap(false);
      return;
    }

    setError("");
    setShowRoadmap(true);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-[#34323d]">
        <div className="mx-auto w-full max-w-[1160px] px-4 py-16 sm:px-6 sm:py-20">

          {/* Page heading */}
          <section className="mb-12">
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#82739e]">
              CAREER PLANNING
            </p>

            <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Career Roadmap
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-[#777481]">
              Plan your learning journey and organise the skills you need
              for your next career step.
            </p>
          </section>

          {/* Goal input card */}
          <section className="rounded-3xl border border-[#e9e7ed] bg-[#f7f6f9] p-6 sm:p-10">

            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eee9f7] text-2xl text-[#82739e]">
                <FiMap />
              </div>

              <div>
                <h2 className="text-xl font-semibold">
                  Plan your career path
                </h2>

                <p className="mt-1 text-sm text-[#777481]">
                  Start by entering the role you want to work towards.
                </p>
              </div>
            </div>

            <label
              htmlFor="career-goal"
              className="mb-3 block font-semibold"
            >
              What is your career goal?
            </label>

            <input
              id="career-goal"
              type="text"
              placeholder="Example: Full Stack Developer"
              value={goal}
              onChange={(e) => {
                setGoal(e.target.value);
                setError("");
                setShowRoadmap(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") generateRoadmap();
              }}
              className="w-full rounded-2xl border border-[#e5e1eb] bg-white px-5 py-4 text-base outline-none transition placeholder:text-[#a29eaa] focus:border-[#b9a9d2] focus:ring-2 focus:ring-[#eee9f7]"
            />

            {error && (
              <p className="mt-3 text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              type="button"
              onClick={generateRoadmap}
              className="mt-6 inline-flex items-center justify-center gap-3 rounded-xl bg-[#82739e] px-8 py-4 font-semibold text-white transition hover:bg-[#71618e] focus:outline-none focus:ring-2 focus:ring-[#b9a9d2] focus:ring-offset-2"
            >
              <FiMap />
              Generate Roadmap
            </button>

          </section>

          {/* Roadmap result */}
          {showRoadmap && (
            <section className="mt-12">

              <div className="mb-8">
                <p className="mb-2 text-sm font-bold tracking-[0.2em] text-[#82739e]">
                  YOUR LEARNING PLAN
                </p>

                <h2 className="text-2xl font-semibold sm:text-3xl">
                  Roadmap for {goal.trim()}
                </h2>

                <p className="mt-3 text-[#777481]">
                  Follow these steps to organise your learning and preparation.
                </p>
              </div>

              <div className="space-y-4">
                {roadmap.map((step, index) => (
                  <article
                    key={index}
                    className="flex items-start gap-4 rounded-2xl border border-[#e9e7ed] bg-[#f7f6f9] p-5 transition hover:border-[#d8cbeF] sm:items-center sm:p-6"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eee9f7] font-semibold text-[#82739e]">
                      {index + 1}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-[#34323d]">
                        {step.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-[#777481]">
                        {step.description}
                      </p>
                    </div>

                    <FiCheckCircle className="mt-1 shrink-0 text-xl text-[#82739e] sm:mt-0" />
                  </article>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#e9e7ed] bg-white p-5">
                <FiBookOpen className="mt-1 shrink-0 text-xl text-[#82739e]" />

                <p className="text-sm leading-6 text-[#777481]">
                  This is a starter learning plan. The steps are predefined
                  and are not yet generated by AI.
                </p>
              </div>

            </section>
          )}

        </div>
      </main>
    </>
  );
}

export default CareerRoadmap;
