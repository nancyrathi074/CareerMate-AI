
import { Link } from "react-router-dom";
import {
  FaFileAlt,
  FaBriefcase,
  FaRobot,
  FaRoad,
  FaArrowRight,
} from "react-icons/fa";

const cards = [
  {
    title: "Resume Analyzer",
    category: "DOCUMENTS",
    icon: <FaFileAlt />,
    path: "/resume-analyzer",
    description: "Review your resume and identify areas where it can be improved.",
  },
  {
    title: "Job Matcher",
    category: "JOB SEARCH",
    icon: <FaBriefcase />,
    path: "/job-matcher",
    description: "Compare your skills with job requirements and explore opportunities.",
  },
  {
    title: "Interview Prep",
    category: "PREPARATION",
    icon: <FaRobot />,
    path: "/interview-prep",
    description: "Practise technical and HR interview questions before your next interview.",
  },
  {
    title: "Career Roadmap",
    category: "PLANNING",
    icon: <FaRoad />,
    path: "/career-roadmap",
    description: "Organise your learning goals and plan the skills you want to develop.",
  },
];

function Dashboard() {
  return (
    <main className="min-h-screen bg-white text-[#34323d]">
      <section className="mx-auto w-full max-w-[1160px] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-12">
          <span className="mb-3 block text-sm font-bold tracking-[0.16em] text-[#82739e]">
            YOUR WORKSPACE
          </span>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Dashboard
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-[#777481]">
            Welcome back! Choose a tool to continue working on your career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <Link
              key={card.title}
              to={card.path}
              className="group flex min-h-[270px] flex-col rounded-2xl border border-[#e9e7ed] bg-[#f7f6f9] p-7 transition duration-200 hover:-translate-y-1 hover:border-[#d8cbeF] hover:bg-white hover:shadow-[0_10px_30px_rgba(52,50,61,0.07)]"
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#eee9f7] text-2xl text-[#82739e]">
                  {card.icon}
                </div>

                <span className="text-[11px] font-bold tracking-[0.14em] text-[#9691a1]">
                  {card.category}
                </span>
              </div>

              <h2 className="mb-3 text-xl font-semibold text-[#34323d]">
                {card.title}
              </h2>

              <p className="mb-6 flex-1 text-[15px] leading-7 text-[#777481]">
                {card.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-semibold text-[#82739e]">
                Open tool
                <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
