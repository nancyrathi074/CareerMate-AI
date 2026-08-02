import {CountUp} from "react-countup";
import { useInView } from "react-intersection-observer";

function StatCard({ end, suffix, title }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-cyan-400 transition duration-300"
    >
      <h2 className="text-5xl font-bold text-cyan-400 mb-2">
  {end}
  {suffix}
</h2>

      <p className="text-slate-400">{title}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-white">
            Trusted by Future Professionals
          </h2>

          <p className="text-slate-400 mt-4">
            Helping students prepare smarter with AI-powered career tools.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <StatCard
            end={15}
            suffix="K+"
            title="Resumes Analyzed"
          />

          <StatCard
            end={98}
            suffix="%"
            title="ATS Success Rate"
          />

          <StatCard
            end={250}
            suffix="+"
            title="Hiring Companies"
          />

          <StatCard
            end={24}
            suffix="/7"
            title="AI Career Support"
          />

        </div>

      </div>
    </section>
  );
}