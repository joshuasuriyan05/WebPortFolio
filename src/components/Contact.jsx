import { motion } from "framer-motion";
import LazyGlobe from "./LazyGlobe";
import {
  FaEnvelope,
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex items-center px-6 md:px-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">

        {/* LEFT CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="
            bg-white/10 backdrop-blur-2xl
            rounded-3xl p-8 md:p-10
            border border-white/10
            shadow-[0_0_60px_rgba(99,102,241,0.15)]
          "
        >
          <p className="uppercase text-sm text-gray-400">Get in touch</p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Contact<span className="text-primary">.</span>
          </h2>

          <p className="mt-4 text-gray-300">
            Feel free to reach out — I’m always open to discussing new projects,
            collaborations, or opportunities.
          </p>

          {/* SOCIAL LINKS */}
          <div className="mt-8 space-y-6">

            <ContactLink
              href="mailto:joshuasuriyan05@gmail.com"
              color="#EA4335"
              icon={<FaEnvelope />}
              label="Gmail"
            />

            <ContactLink
              href="https://linkedin.com/in/joshua-suriyan-n-b6b988249"
              color="#0A66C2"
              icon={<FaLinkedin />}
              label="LinkedIn"
            />

            <ContactLink
              href="https://github.com/joshuasuriyan05"
              color="#ffffff"
              icon={<FaGithub />}
              label="GitHub"
            />

            <ContactLink
              href="https://leetcode.com/u/42k9ZKDv8k/"
              color="#FFA116"
              icon={<SiLeetcode />}
              label="LeetCode"
            />

            <ContactLink
              href="https://www.youtube.com/@Jstudioz0105"
              color="#FF0000"
              icon={<FaYoutube />}
              label="YouTube"
            />

            <ContactLink
              href="https://www.instagram.com/yjoshuaztr.05/"
              color="#E4405F"
              icon={<FaInstagram />}
              label="Instagram"
            />
          </div>
        </motion.div>

        {/* RIGHT GLOBE */}
        <div className="hidden md:block h-[500px] w-full">
          <LazyGlobe />
        </div>
      </div>
    </section>
  );
}

/* REUSABLE LINK */
function ContactLink({ href, color, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 transition-all duration-300 hover:scale-110"
      style={{
        color,
        filter: `drop-shadow(0 0 10px ${color})`,
      }}
    >
      <span className="text-xl">{icon}</span>
      {label}
    </a>
  );
}
