import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section id="achievements" className="px-10 py-24 bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Achievements</h2>

        <ul className="space-y-4 text-gray-400 list-disc pl-6">
          <li>
            IEEE Paper Publication – <b>Smart Shoes and Glass for Blind People</b>
          </li>
          <li>Recognized as Top 10 Project in the Department</li>
          <li>Microsoft Certified – Azure Fundamentals (AZ-900)</li>
          <li>Completed MERN Full Stack Bootcamp with Excellence</li>
        </ul>
      </motion.div>
    </section>
  );
}
