import { FaArrowRight } from "react-icons/fa";

function FeatureCard({ icon, title, description }) {
  return (
    <div
      className="
      group
      bg-slate-900
      border
      border-slate-800
      rounded-3xl
      p-8
      transition-all
      duration-300
      hover:-translate-y-3
      hover:border-cyan-400
      hover:shadow-[0_0_30px_rgba(34,211,238,.2)]
      "
    >
      {/* Icon */}

      <div
        className="
        w-16
        h-16
        rounded-2xl
        bg-cyan-500/10
        text-cyan-400
        flex
        items-center
        justify-center
        text-3xl
        mb-6
        transition
        group-hover:rotate-6
        "
      >
        {icon}
      </div>

      {/* Title */}

      <h3 className="text-2xl font-bold text-white mb-4">
        {title}
      </h3>

      {/* Description */}

      <p className="text-slate-400 leading-8">
        {description}
      </p>

      <button
        className="
        mt-8
        text-cyan-400
        flex
        items-center
        gap-3
        font-semibold
        group-hover:gap-5
        transition-all
        "
      >
        Learn More

        <FaArrowRight />

      </button>

    </div>
  );
}

export default FeatureCard;