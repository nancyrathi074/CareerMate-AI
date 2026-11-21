
import "./Stats.css";
import {
  FiFileText,
  FiTarget,
  FiBookOpen,
  FiMap
} from "react-icons/fi";

const highlights = [
  {
    icon: <FiFileText />,
    title: "Resume improvement",
    description: "Review your resume and identify areas to improve."
  },
  {
    icon: <FiTarget />,
    title: "Job preparation",
    description: "Compare your skills with your career goals."
  },
  {
    icon: <FiBookOpen />,
    title: "Interview practice",
    description: "Prepare for common technical and HR questions."
  },
  {
    icon: <FiMap />,
    title: "Career planning",
    description: "Organise your learning and development goals."
  }
];

export default function Stats() {
  return (
    <section className="highlights-section">
      <div className="highlights-container">

        <div className="highlights-heading">
          <span className="section-eyebrow">A PRACTICAL APPROACH</span>
          <h2>Your career preparation, in one place.</h2>
          <p>
            Work on different parts of your career journey
            with tools designed to work together.
          </p>
        </div>

        <div className="highlights-grid">
          {highlights.map((item) => (
            <div className="highlight-item" key={item.title}>
              <span className="highlight-icon">
                {item.icon}
              </span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
