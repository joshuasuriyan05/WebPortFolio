import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="px-10 py-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Experience</h2>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">
            Data Analytics Intern – GWC DATA.ai
          </h3>
          <p className="text-white mt-2">
            Worked with Power BI, DAX, and Power Query to build interactive
            dashboards and analyze business performance metrics. Assisted in
            data cleaning, modeling, and visualization for decision-making.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
