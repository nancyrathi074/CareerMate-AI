
import "./Features.css";
import {
  FiFileText,
  FiBriefcase,
  FiMessageSquare,
  FiMap,
  FiEdit3,
  FiTrendingUp,
  FiArrowUpRight
} from "react-icons/fi";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <FiFileText />,
    title: "Resume Review",
    description: "Review your resume, identify gaps and get suggestions to improve its presentation.",
    path: "/resume-analyzer",
    category: "DOCUMENTS"
  },
  {
    icon: <FiBriefcase />,
    title: "Job Matching",
    description: "Compare your skills with job requirements and discover areas for improvement.",
    path: "/job-matcher",
    category: "JOB SEARCH"
  },
  {
    icon: <FiMessageSquare />,
    title: "Interview Practice",
    description: "Prepare for technical and HR interviews with questions suited to your target role.",
    path: "/interview-prep",
    category: "PREPARATION"
  },
  {
    icon: <FiMap />,
    title: "Career Roadmap",
    description: "Organise your learning goals and plan the skills you want to develop next.",
    path: "/career-roadmap",
    category: "PLANNING"
  },
  {
    icon: <FiEdit3 />,
    title: "Cover Letter",
    description: "Prepare a clear and professional cover letter for your job applications.",
    path: "/dashboard",
    category: "APPLICATIONS"
  },
  {
    icon: <FiTrendingUp />,
    title: "Career Dashboard",
    description: "Keep your career preparation activities organised in one place.",
    path: "/dashboard",
    category: "PROGRESS"
  }
];

function Features() {
  return (
    <section id="features" className="features-section">
      <div className="features-container">

        <div className="features-heading">
          <span className="section-eyebrow">WHAT YOU CAN DO</span>

          <h2>
            Everything you need to
            <span> move forward.</span>
          </h2>

          <p>
            Practical tools to help you prepare your resume,
            explore opportunities and plan your career.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <Link
              to={feature.path}
              className="feature-card"
              key={feature.title}
            >
              <div className="feature-card-top">
                <span className="feature-icon">
                  {feature.icon}
                </span>

                <span className="feature-category">
                  {feature.category}
                </span>
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <span className="feature-link">
                Explore feature
                <FiArrowUpRight />
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;
