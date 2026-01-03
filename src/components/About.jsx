import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="
        px-4 sm:px-6 md:px-10
        py-16 sm:py-20 md:py-24
        max-w-5xl mx-auto
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* TITLE */}
        <h2
          className="
            text-2xl sm:text-3xl
            font-bold
            mb-6
          "
        >
          About Me
        </h2>

        {/* INTRO */}
        <p
          className="
            text-gray-800
            text-sm sm:text-base
            leading-relaxed
            mb-4
          "
        >
          I am{" "}
          <span className="text-primary font-semibold">
            Joshua Suriyan N
          </span>
          , a MERN Stack Developer with a strong foundation in JavaScript,
          Node.js, Express, and MongoDB, passionate about building full-stack
          web applications that are both functional and user-friendly.
        </p>

        {/* JOURNEY */}
        <p
          className="
            text-gray-800
            text-sm sm:text-base
            leading-relaxed
            mb-4
          "
        >
          My journey into development has been driven by curiosity and a love
          for crafting digital solutions that solve real-world problems.
          Currently open to entry-level roles in full-stack or frontend
          development to kick-start my professional journey.
        </p>

        {/* OPPORTUNITIES */}
        <p
          className="
            text-gray-800
            text-sm sm:text-base
            leading-relaxed
            mb-6
          "
        >
          🎯 Currently open to opportunities in MERN stack development,
          frontend roles, or any exciting tech project where I can contribute
          and grow. I value team collaboration, continuous learning, and
          building solutions that make an impact.
        </p>

        {/* CONTACT INFO */}
        <div
          className="
            space-y-2
            text-sm sm:text-base
            text-gray-800
          "
        >
          <p>📩 Let’s connect!</p>
          <p>📍 Based in Coimbatore</p>
          <p>💻 Open to remote & hybrid roles</p>

          <p>
            🔗 GitHub:{" "}
            <a
              href="https://github.com/joshuasuriyan05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline break-all"
            >
              github.com/joshuasuriyan05
            </a>
          </p>

          <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/joshua-suriyan-n-b6b988249"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline break-all"
            >
              linkedin.com/in/joshua-suriyan-n-b6b988249
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
