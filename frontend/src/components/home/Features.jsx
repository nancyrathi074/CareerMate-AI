import "./Features.css";

import FeatureCard from "../common/FeatureCard";

import {
  FaFileAlt,
  FaBriefcase,
  FaRobot,
  FaRoad,
  FaPenNib,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    icon: <FaFileAlt />,
    title: "AI Resume Analyzer",
    description:
      "Upload your resume and receive ATS scoring, skill analysis and personalized improvement suggestions.",
  },

  {
    icon: <FaBriefcase />,
    title: "Job Matcher",
    description:
      "Compare your resume with job descriptions and identify missing skills instantly.",
  },

  {
    icon: <FaRobot />,
    title: "Interview Prep",
    description:
      "Practice AI-generated technical and HR interview questions tailored to your role.",
  },

  {
    icon: <FaRoad />,
    title: "Career Roadmap",
    description:
      "Receive a personalized roadmap that guides your learning journey step by step.",
  },

  {
    icon: <FaPenNib />,
    title: "Cover Letter Generator",
    description:
      "Generate professional cover letters customized for every application.",
  },

  {
    icon: <FaChartLine />,
    title: "Career Dashboard",
    description:
      "Track resume analysis, interview history and career progress in one place.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="features-bg py-16"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-5xl font-bold text-white">

            Everything You Need

          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">

            CareerMate AI provides all the tools you need to
            prepare for your next opportunity using Artificial
            Intelligence.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;