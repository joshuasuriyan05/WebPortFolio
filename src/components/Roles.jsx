import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  {
    title: "Web Developer",
    icon: "/icons/web.png",
    border: "from-cyan-400 via-purple-500 to-pink-500",
  },
  {
    title: "Backend Developer",
    icon: "/icons/backend.png",
    border: "from-blue-400 via-indigo-500 to-purple-500",
  },
  {
    title: "Team Work",
    icon: "/icons/teamwork.png",
    border: "from-teal-400 via-cyan-500 to-blue-500",
  },
  {
    title: "Content Creator",
    icon: "/icons/creator.png",
    border: "from-purple-400 via-pink-500 to-red-500",
  },
];

/* 🧠 Auto typing hook */
function useTypewriter(text, speed = 80) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return display;
}

export default function Roles() {
  return (
    <section className="px-6 py-24 bg-black overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {roles.map((role, index) => (
          <TiltCard key={index} role={role} index={index} />
        ))}
      </div>
    </section>
  );
}

/* 🎮 3D Tilt Card */
function TiltCard({ role, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const typedText = useTypewriter(role.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      viewport={{ once: true }}
      drag="x"              // 📱 Mobile swipe
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.25}
      style={{ x, y, rotateX, rotateY }}
      whileHover={{ scale: 1.06 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`relative rounded-3xl p-[2px] bg-gradient-to-br ${role.border}`}
    >
      {/* 🌈 Neon Glow */}
      <div className="absolute inset-0 rounded-3xl blur-xl opacity-70 animate-pulse bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500" />

      {/* Card */}
      <div className="relative h-[340px] rounded-3xl bg-[#0b0720] flex flex-col items-center justify-center text-center shadow-2xl">

        {/* Icon */}
        <motion.img
          src={role.icon}
          alt={role.title}
          className="w-20 h-20 mb-8 drop-shadow-[0_0_25px_rgba(0,255,255,0.6)]"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />

        {/* 🧠 Auto typing text */}
        <h3 className="text-2xl font-bold text-white tracking-wide">
          {typedText}
          <span className="animate-pulse"></span>
        </h3>
      </div>
    </motion.div>
  );
}
