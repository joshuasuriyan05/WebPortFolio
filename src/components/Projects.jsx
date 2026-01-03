import { useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Tilt from "react-parallax-tilt";

/* =======================
   PROJECT DATA
======================= */
const projects = [
  {
    title:"Smart Shoe and Smart Glass for Safe Detetction of Blind People",
    completed:"Mar 2023",
    year:"2023",
    desc:`Developed a Smart Shoe and Smart Glass system using IoT and sensors to assist visually impaired individuals with real-time obstacle detection and safety alerts.
    
    The Smart Shoe provides tactile feedback through vibrations to alert users about obstacles on the ground, while the Smart Glass offers audio alerts for head-level obstacles and environmental awareness. By combining wearable IoT devices with embedded systems, the solution enables visually impaired users to navigate independently and safely in both indoor and outdoor environments.

Technologies & Components:
IoT, Embedded Systems, Ultrasonic Sensors, Microcontroller (Arduino / ESP32), Audio Feedback, Vibration Motors, Wearable Technology`
  },
  {
    title: "Netflix Clone",
    completed: "Nov 2024",
    year: "2024",
    desc: `🚀 Netflix Login Clone – Full Stack Project

    This project is a Netflix Clone web application developed using React.js and Tailwind CSS for the frontend, and Node.js with Express.js for the backend. The application replicates core Netflix features such as user authentication, movie browsing, dynamic UI, and responsive design.

The frontend delivers a modern, interactive user experience with reusable React components and utility-first styling using Tailwind CSS. The backend handles API requests, routing, authentication, and data management, enabling seamless communication between the client and server. The application is fully responsive and optimized for both desktop and mobile devices.

Tech Stack:

Frontend:
React + Tailwind CSS

Backend:
Node.js + Express.js

Demo:
https://netflix-j6oo.vercel.app/`,
  },
  {
    title: "Automated Detection of Depresion using  Deep Learning and Optimization",
    completed: "Mar 2024",
    year: "2024",
    desc:`This project focuses on the automated detection of depression using deep learning techniques applied to EEG signals from the MODMA dataset. The goal was to build an accurate and reliable system that can assist in the early identification of depressive disorders by analyzing brain activity patterns.

The EEG data underwent preprocessing and feature extraction to remove noise and improve signal quality. A deep learning model based on LSTM architecture was designed to capture temporal dependencies within the EEG time-series data. To further enhance performance, techniques such as dimensionality reduction, class balancing, and hyperparameter optimization were employed.

The model achieved an accuracy of 92%, demonstrating strong capability in distinguishing between depressed and non-depressed subjects. Performance was evaluated using standard metrics including accuracy, precision, recall, F1-score, and confusion matrix analysis, ensuring the reliability of the detection system.

Technologies & Tools:
Python, Deep Learning, LSTM, EEG Signal Processing, MODMA Dataset, NumPy, Pandas, Scikit-learn, TensorFlow/Keras`
  },
  {
    title: "MERN E-Commerce",
    completed: "Jul 2025",
    year: "2025",
    desc: `🛒 Full Stack MERN E-Commerce Application

    This project is a full-stack E-commerce web application developed using React.js for the frontend and Node.js with Express.js for the backend, with MongoDB as the database. The platform supports essential e-commerce functionalities such as user authentication, product listing, shopping cart management, and secure checkout.

Cloudinary is integrated for efficient product image storage and optimization, while Firebase is used for authentication and real-time features. Razorpay is implemented to enable secure and seamless online payment processing. The application is fully responsive and designed to deliver a smooth and user-friendly shopping experience across devices.

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

    This project is a Portfolio + Blog web platform developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Firebase integration. The platform allows users to showcase personal projects, skills, and experience while also publishing and managing blog content through a dynamic and responsive interface.

Firebase is used for secure authentication, real-time updates, and deployment support, while MongoDB handles structured content such as blog posts, comments, and portfolio data. The application is designed with scalability and performance in mind, offering a seamless experience for both content creators and visitors.


Tech Stack:
MERN + Firebase

Demo:
https://lnkd.in/d4REcVHV`,
  },
  {
    title:"AI Driven IDS on Smart Homes Using Edge Computing and Jetson Nano",
    completed:"Mar 2026",
    year: "2026",
    desc:`This project presents an AI-driven Intrusion Detection System (IDS) for smart home environments, leveraging edge computing on NVIDIA Jetson Nano to enable real-time threat detection. The system analyzes network traffic data from the IoT-23 dataset to identify malicious activities targeting IoT devices.

Machine learning and deep learning models were trained to classify normal and attack traffic, ensuring low latency and improved privacy by performing inference at the edge rather than relying on cloud-based processing. The proposed system enhances smart home security by providing efficient, scalable, and real-time intrusion detection, while minimizing network overhead and response time.

Technologies & Tools:
Python, Machine Learning / Deep Learning, Edge Computing, NVIDIA Jetson Nano, IoT-23 Dataset, Network Security, IoT`
  }
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
