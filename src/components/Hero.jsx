import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/js.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Softer overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 px-6 text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold">
          Hi, I'm <span className="text-primary">Joshua Suriyan</span>
        </h1>

        <p className="mt-4 text-lg text-gray-200">
          MERN Stack Developer | Software Developer
        </p>

        <a
          href="#projects"
          className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:scale-105 transition"
        >
          View Projects
        </a>
      </motion.div>
    </section>
  );
}
