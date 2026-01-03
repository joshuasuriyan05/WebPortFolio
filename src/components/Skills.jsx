import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "/Skills/html.png" },
  { name: "CSS", icon: "/Skills/css.png" },
  { name: "JavaScript", icon: "/Skills/javascript.png" },
  { name: "Firebase", icon: "/Skills/firebase.png" },
  { name: "DevOps", icon: "/Skills/devops.png" },
  { name: "React", icon: "/Skills/react.png" },
  { name: "Azure Data Pipeline", icon: "/Skills/azure.png" },
  { name: "Jenkins", icon: "/Skills/jenkins.png" },
  { name: "Postman", icon: "/Skills/postman.png" },
  { name: "MongoDB", icon: "/Skills/mongodb.png" },
  { name: "TailwindCSS", icon: "/Skills/tailwind.png" },
  { name: "GitHub", icon: "/Skills/github.png" },
  { name: "Docker", icon: "/Skills/docker.png" },
  { name: "Hashicorp", icon: "/Skills/hashicorp.png" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-16 py-24 bg-black text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          Skills
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 place-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.15 }}
              className="flex flex-col items-center"
            >
              {/* BALL */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-[0_15px_35px_rgba(0,0,0,0.7)]"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/Skills/html.png";
                  }}
                />
              </motion.div>

              <span className="mt-3 text-sm text-gray-300 text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
