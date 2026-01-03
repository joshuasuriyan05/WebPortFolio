import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "/skills/html.png" },
  { name: "CSS", icon: "/skills/css.png" },
  { name: "JavaScript", icon: "/skills/javascript.png" },
  { name: "Google Firebase Console", icon: "/skills/firebase.png" },
  { name: "DevOps", icon: "/skills/devops.png" },
  { name: "React", icon: "/skills/react.png" },
  { name: "Azure Data Pipeline", icon: "/skills/azure.png" },
  { name: "Jenkins", icon: "/skills/jenkins.png" },
  { name: "Postman", icon: "/skills/postman.png" },
  { name: "MongoDB", icon: "/skills/mongodb.png" },
  { name: "TailwindCSS", icon: "/skills/tailwind.png" },
  { name: "GitHub", icon: "/skills/github.png" },
  { name: "Docker", icon: "/skills/docker.png" },
  { name: "Hashicorp", icon: "/skills/hashicorp.png" }
];

export default function Skills() {
  return (
    <section id="skills" className="px-10 py-24 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 text-white">Skills</h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 place-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
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
                className="w-20 h-20 rounded-full bg-white shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex items-center justify-center"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
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
