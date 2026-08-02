import { Link } from "react-router-dom";
import {
  FaFileAlt,
  FaBriefcase,
  FaRobot,
  FaRoad,
} from "react-icons/fa";

const cards = [
  {
    title: "Resume Analyzer",
    icon: <FaFileAlt />,
    path: "/resume-analyzer",
    description: "Analyze your resume with AI.",
  },
  {
    title: "Job Matcher",
    icon: <FaBriefcase />,
    path: "/job-matcher",
    description: "Match your resume with jobs.",
  },
  {
    title: "Interview Prep",
    icon: <FaRobot />,
    path: "/interview-prep",
    description: "Practice AI interview questions.",
  },
  {
    title: "Career Roadmap",
    icon: <FaRoad />,
    path: "/career-roadmap",
    description: "Generate your learning roadmap.",
  },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-28">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-3">
          Dashboard
        </h1>

        <p className="text-slate-400 mb-12">
          Welcome back! Choose a tool below.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {cards.map((card) => (
            <Link
              key={card.title}
              to={card.path}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition"
            >
              <div className="text-4xl text-cyan-400 mb-5">
                {card.icon}
              </div>

              <h2 className="text-2xl font-bold mb-3">
                {card.title}
              </h2>

              <p className="text-slate-400">
                {card.description}
              </p>
            </Link>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Dashboard;