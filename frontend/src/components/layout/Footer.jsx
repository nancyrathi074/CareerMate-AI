import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}

          <div>
            <h2 className="text-3xl font-bold text-cyan-400">
              CareerMate AI
            </h2>

            <p className="text-slate-400 mt-5 leading-8">
              Your AI-powered career companion for resumes,
              interviews, job matching and career growth.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-white font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Home</li>
              <li>Features</li>
              <li>Dashboard</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Features */}

          <div>
            <h3 className="text-white font-semibold mb-5">
              Features
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Resume Analyzer</li>
              <li>Interview Prep</li>
              <li>Career Roadmap</li>
              <li>Job Matcher</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-white font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl text-cyan-400">

              <FaGithub className="cursor-pointer hover:scale-110 transition" />

              <FaLinkedin className="cursor-pointer hover:scale-110 transition" />

              <FaEnvelope className="cursor-pointer hover:scale-110 transition" />

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-14 pt-8 text-center text-slate-500">
          © 2026 CareerMate AI. Built with React + Node + AI.
        </div>

      </div>
    </footer>
  );
}

export default Footer;