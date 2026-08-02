import { FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-xl bg-cyan-500 flex items-center justify-center text-slate-950 text-xl">

            <FaRobot />

          </div>

          <div>

            <h2 className="font-bold text-2xl text-white">
              CareerMate
            </h2>

            <p className="text-xs text-cyan-400">
              AI Career Assistant
            </p>

          </div>

        </Link>

        {/* Navigation */}

        <nav className="hidden md:flex gap-8">

          <a href="#features" className="text-slate-300 hover:text-cyan-400 transition">
            Features
          </a>

          <a href="#how-it-works" className="text-slate-300 hover:text-cyan-400 transition">
            How It Works
          </a>

          <a href="#pricing" className="text-slate-300 hover:text-cyan-400 transition">
            Pricing
          </a>

          <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition">
            Contact
          </a>

        </nav>

        {/* Buttons */}

        <div className="hidden md:flex gap-4">

          <button className="text-slate-300 hover:text-white transition">
            Login
          </button>

         <Link
  to="/dashboard"
  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-semibold transition"
>
  Get Started
</Link>
        </div>

      </div>
    </header>
  );
}

export default Navbar;