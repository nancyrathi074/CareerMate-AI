import "./Hero.css";
import { FaArrowRight, FaFileAlt, FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center pt-24">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <div>

          <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-5 py-2 rounded-full mb-8">

            <FaRobot />

            AI Career Assistant

          </div>

          <h1 className="text-6xl font-extrabold leading-tight text-white">

            Your

            <span className="gradient-text">
              {" "}Career.
            </span>

            <br />

            Powered by

            <span className="gradient-text">
              {" "}AI
            </span>

          </h1>

          <p className="text-slate-400 text-lg leading-8 mt-8 max-w-xl">

            Analyze resumes, prepare for interviews,
            match with jobs and build personalized
            career roadmaps using powerful AI.

          </p>

          <div className="flex gap-5 mt-10">

            <Link
  to="/dashboard"
  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
>
  Get Started
  <FaArrowRight />
</Link>
            <Link
  to="/resume-analyzer"
  className="border border-slate-700 hover:border-cyan-400 text-white px-8 py-4 rounded-xl flex items-center gap-3 transition"
>
  <FaFileAlt />
  Analyze Resume
</Link>

          </div>

          <p className="text-slate-500 mt-10">

            ⭐⭐⭐⭐⭐ Trusted by students preparing for placements

          </p>

        </div>

        {/* Right Side */}

        <div className="glass-card rounded-3xl p-8 floating">

          <h3 className="text-white text-2xl font-bold mb-8">

            AI Dashboard

          </h3>

          <div className="space-y-6">

            <div>

              <div className="flex justify-between text-white mb-2">

                <span>Resume Score</span>

                <span className="text-cyan-400 font-bold">

                  92%

                </span>

              </div>

              <div className="bg-slate-700 rounded-full h-3">

                <div className="bg-cyan-400 h-3 rounded-full w-[92%]"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between text-white mb-2">

                <span>Job Match</span>

                <span className="text-green-400 font-bold">

                  87%

                </span>

              </div>

              <div className="bg-slate-700 rounded-full h-3">

                <div className="bg-green-400 h-3 rounded-full w-[87%]"></div>

              </div>

            </div>

            <div className="bg-slate-800 rounded-xl p-5">

              <h4 className="text-cyan-400 mb-3">

                Missing Skills

              </h4>

              <div className="flex gap-3 flex-wrap">

                <span className="bg-slate-700 px-3 py-1 rounded-lg text-white">
                  Docker
                </span>

                <span className="bg-slate-700 px-3 py-1 rounded-lg text-white">
                  AWS
                </span>

                <span className="bg-slate-700 px-3 py-1 rounded-lg text-white">
                  CI/CD
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;