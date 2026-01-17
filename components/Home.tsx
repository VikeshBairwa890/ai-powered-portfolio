'use client';

import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';
import ThemeToggle from './ThemeToggle';

export default function Home() {
  return (
    <div
      className="
        relative min-h-screen overflow-hidden
        bg-[#f8fafc] dark:bg-[#020617]
        text-slate-900 dark:text-slate-100
        flex items-center justify-center
      "
    >
      <ThemeToggle />
      <ParticlesBackground />

      <div className="relative z-10 max-w-6xl w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Vikesh{" "}
            <span className="text-teal-800 dark:text-amber-500">
              Kumar
            </span>
          </h1>

          <p className="text-xl leading-relaxed mb-10 text-slate-700 dark:text-slate-300">
            I am a software engineer focused on building scalable systems,
            AI-integrated solutions, and smart automation that solves real-world problems.
          </p>


          <div className="flex justify-center gap-4">
            <a
              href="projects"
              className="
                px-6 py-2 rounded-md font-medium transition
                bg-teal-700 text-white hover:bg-teal-800
                dark:bg-amber-500 dark:text-slate-900 dark:hover:bg-amber-400
              "
            >
              View Projects
            </a>

            <a
              href="contact"
              className="
                px-6 py-2 rounded-md font-medium transition
                border border-teal-700 text-teal-800 hover:bg-teal-50
                dark:border-amber-500 dark:text-amber-400 dark:hover:bg-amber-500/10
              "
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
