import { useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Tilt from "react-parallax-tilt";

/* =======================
   PROJECT DATA
======================= */
const projects = [
  {
    title: "Netflix Clone",
    completed: "Nov 2024",
    year: "2024",
    desc: `🚀 Netflix Login Clone – Full Stack Project

Frontend:
React + Tailwind CSS

Backend:
Node.js + Express.js

Demo:
https://netflix-j6oo.vercel.app/`,
  },
  {
    title: "MERN E-Commerce",
    completed: "Jul 2025",
    year: "2025",
    desc: `🛒 Full Stack MERN E-Commerce Application

Tech Stack:
React, Node.js, Express, MongoDB
Cloudinary, Firebase, Razorpay

Demo:
https://lnkd.in/dnSkGy8b`,
  },
  {
    title: "Portfolio + Blog",
    completed: "Jul 2025",
    year: "2025",
    desc: `🧑‍💻 Portfolio + Blog Platform

Tech Stack:
MERN + Firebase

Demo:
https://lnkd.in/d4REcVHV`,
  },
];

/* =======================
   GROUP BY YEAR
======================= */
const grouped = projects.reduce((acc, p) => {
  acc[p.year] = acc[p.year] || [];
  acc[p.year].push(p);
  return acc;
}, {});

/* =======================
   COMPONENT
======================= */
export default function Projects() {
  const [neon, setNeon] = useState(true);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className={`
        relative min-h-screen py-28 px-6
        scroll-mt-24 snap-section
        transition-colors duration-500
        ${neon ? "bg-black text-white" : "bg-[#0c0c1d] text-white"}
      `}
    >
      {/* SCROLL PROGRESS */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-[72px] left-0 right-0 h-1 origin-left
                   bg-gradient-to-r from-cyan-400 to-purple-500 z-40"
      />

      {/* NEON TOGGLE */}
      <button
        onClick={() => setNeon(!neon)}
        className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full
                   bg-black border border-cyan-400
                   shadow-[0_0_20px_cyan]"
      >
        {neon ? "Neon On" : "Neon Off"}
      </button>

      <h2 className="text-4xl font-bold text-center mb-24">
        Projects
      </h2>

      {/* VERTICAL TIMELINE (DESKTOP) */}
      <div className="hidden md:block absolute left-1/2 top-40 bottom-0
                      w-[2px] bg-gradient-to-b
                      from-purple-500 to-cyan-500
                      -translate-x-1/2" />

      <div className="max-w-7xl mx-auto space-y-32 hidden md:block">
        {Object.entries(grouped).map(([year, items]) => (
          <div key={year}>
            {/* YEAR LABEL */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-24 z-20 mb-16 text-center"
            >
              <span className="px-6 py-2 rounded-full
                               border border-cyan-400
                               shadow-[0_0_20px_cyan]
                               bg-black">
                {year}
              </span>
            </motion.div>

            {items.map((p, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-[1fr_auto_1fr]
                             items-center mb-24"
                >
                  {/* LEFT */}
                  <div className="flex justify-end">
                    {isLeft && <ProjectCard project={p} />}
                  </div>

                  {/* DOT */}
                  <div className="relative flex flex-col items-center">
                    <span
                      className={`mb-2 text-sm text-cyan-400
                        ${isLeft ? "translate-x-16" : "-translate-x-16"}`}
                    >
                      {p.completed}
                    </span>

                    <div className="w-4 h-4 rounded-full
                                    bg-cyan-400
                                    shadow-[0_0_20px_cyan]" />

                    {/* CONNECTOR */}
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className={`absolute top-1/2 h-[2px] w-20
                        bg-cyan-400
                        ${isLeft ? "right-full" : "left-full"}`}
                    />
                  </div>

                  {/* RIGHT */}
                  <div className="flex justify-start">
                    {!isLeft && <ProjectCard project={p} />}
                  </div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      {/* MOBILE TIMELINE */}
      <div className="md:hidden flex overflow-x-auto gap-6 snap-x snap-mandatory pb-10">
        {projects.map((p, i) => (
          <div key={i} className="snap-center min-w-[85%]">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* =======================
   CARD
======================= */
function ProjectCard({ project }) {
  return (
    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
      <div className="max-w-md p-6 rounded-xl
                      bg-gradient-to-br from-[#1a1438] to-[#0b0720]
                      border border-white/10
                      shadow-[0_0_30px_rgba(0,255,255,0.25)]">
        <h3 className="text-xl font-bold mb-3">
          {project.title}
        </h3>
        <p className="text-sm whitespace-pre-line text-white/90">
          {project.desc}
        </p>
      </div>
    </Tilt>
  );
}
