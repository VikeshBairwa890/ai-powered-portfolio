import { motion } from "framer-motion";
import { FaCode, FaDownload, FaExternalLinkAlt, FaFileDownload, FaPaintBrush, FaServer, FaStar, FaTools } from "react-icons/fa";
  const experiences = [
    {
      year: '2024',
      title: 'AI-Powered Portfolio Developer',
      description:
        'Built an interactive portfolio with dynamic component rendering, AI assistant integration, and responsive design using React, Tailwind, and Framer Motion.',
    },
    {
      year: '2023',
      title: 'Full-Stack Freelancer',
      description:
        'Developed and delivered full-stack web apps for startups and solo founders. Specialized in frontend UX, backend APIs, and project architecture.',
    },
    {
      year: '2022',
      title: 'Frontend Specialist (React / Next.js)',
      description:
        'Crafted accessible and high-performance UIs using React, Tailwind CSS, and Next.js for various freelance clients.',
    },
    {
      year: '2021',
      title: 'Freelance Web Developer',
      description:
        'Started my freelance journey, building static sites, admin panels, and landing pages using modern HTML/CSS/JS stacks.',
    },
  ];

export default function Experience() {
    return (
        <>
         <section
        id="experience"
        className="snap-start min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-16"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Timeline (Original Version) */}
          <div className="relative border-l-2 border-orange-500 dark:border-orange-400 pl-6 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-3 top-1.5 w-4 h-4 rounded-full bg-orange-500 dark:bg-orange-400 border-2 border-white dark:border-black shadow-md" />
                <div className="ml-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-300">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 max-w-xl leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Title + Description */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--color-primary)]/10 dark:bg-[color:var(--color-primary)]/20 mb-4 self-start">
              <div className="w-2 h-2 rounded-full bg-[color:var(--color-primary)] animate-pulse" />
              <span className="text-sm font-medium text-[color:var(--color-primary)] dark:text-[color:var(--color-primary)]/90">
                My Journey
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              From <span className="text-[color:var(--color-primary)]">Freelancer</span> to{' '}
              <span className="bg-gradient-to-r from-[color:var(--color-primary)] via-orange-500 to-[color:var(--color-primary)] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Full-Stack Architect
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Over 2+ years of transforming ideas into scalable digital solutions, I've evolved from executing freelance projects to architecting complete web applications for startups and enterprises.
            </p>

            {/* Philosophy */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                My Development Philosophy
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I believe in building <span className="font-semibold text-[color:var(--color-primary)]">scalable foundations</span> that grow with your business.
                Every line of code is written with <span className="font-semibold text-[color:var(--color-primary)]">maintainability</span>,
                <span className="font-semibold text-[color:var(--color-primary)]"> performance</span>, and
                <span className="font-semibold text-[color:var(--color-primary)]"> user experience</span> in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* ✅ Skills Preview */}
      <section
        id="skills"
        className="snap-start min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 sm:px-6 py-12 md:py-16"
      >
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#888_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="max-w-7xl w-full relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 md:mb-24"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 dark:bg-orange-500/20 mb-4">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                Tech Stack
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Skills &
              </span>
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent ml-2">
                Technologies
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              A versatile toolkit to build modern, scalable, and performant web applications
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left: Skills Visualization */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Featured Skill Card */}
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
                    <FaCode className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Full Stack Development</h3>
                    <p className="text-gray-600 dark:text-gray-400">End-to-end web solutions</p>
                  </div>
                </div>

                {/* Skill Progress Bars */}
                <div className="space-y-6">
                  {[
                    { skill: 'Frontend Development', level: 95, color: 'from-orange-500 to-pink-500' },
                    { skill: 'Backend Development', level: 90, color: 'from-blue-500 to-purple-500' },
                    { skill: 'Database Design', level: 85, color: 'from-green-500 to-emerald-500' },
                    { skill: 'DevOps & Deployment', level: 80, color: 'from-indigo-500 to-violet-500' },
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{item.skill}</span>
                        <span className="font-bold text-gray-900 dark:text-white">{item.level}%</span>
                      </div>
                      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Grid */}
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Core Technologies</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                  {[
                    { icon: '⚛️', label: 'React', color: 'bg-blue-500/10 border-blue-500/20' },
                    { icon: '🚀', label: 'Next.js', color: 'bg-gray-800/10 border-gray-800/20' },
                    { icon: '📘', label: 'TypeScript', color: 'bg-blue-600/10 border-blue-600/20' },
                    { icon: '🎨', label: 'Tailwind', color: 'bg-sky-500/10 border-sky-500/20' },
                    { icon: '⚡', label: 'Node.js', color: 'bg-green-500/10 border-green-500/20' },
                    { icon: '🗄️', label: 'PostgreSQL', color: 'bg-blue-700/10 border-blue-700/20' },
                    { icon: '📊', label: 'MongoDB', color: 'bg-green-600/10 border-green-600/20' },
                    { icon: '☁️', label: 'AWS', color: 'bg-orange-500/10 border-orange-500/20' },
                    { icon: '🐳', label: 'Docker', color: 'bg-blue-500/10 border-blue-500/20' },
                    { icon: '🔄', label: 'GraphQL', color: 'bg-pink-500/10 border-pink-500/20' },
                  ].map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center p-3 rounded-xl border bg-white/50 dark:bg-gray-800/30 hover:shadow-md transition-all"
                    >
                      <span className="text-2xl mb-2">{tech.icon}</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                        {tech.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Download Resume CTA */}
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-xl">

                <div className="inline-flex flex-col sm:flex-row items-center gap-6 ">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
                    <FaFileDownload className="text-white text-2xl" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Download Detailed Resume
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Get the complete overview of my skills, experience, and projects
                    </p>
                    <a
                      href="/resume.pdf"
                      download
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                    >
                      <FaDownload />
                      Download Resume (PDF)
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Skills Categories */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Frontend Skills */}
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-pink-500/20 flex items-center justify-center">
                    <FaPaintBrush className="text-orange-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Frontend</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">User Interface & Experience</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'GraphQL', 'Vite'].map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-700 dark:text-orange-300 border border-orange-500/20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <FaServer className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Backend</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Server, Database & APIs</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Redis', 'REST APIs', 'JWT Auth', 'WebSockets'].map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Tools & DevOps */}
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                    <FaTools className="text-green-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tools & DevOps</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Development & Deployment</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Docker', 'AWS', 'CI/CD', 'Jenkins', 'Nginx', 'Linux', 'Vercel'].map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-700 dark:text-green-300 border border-green-500/20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Experience Level Indicator */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 md:p-8 text-white shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold">Expertise Level</h3>
                    <p className="text-gray-300 text-sm">Years of hands-on experience</p>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                    2+
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Frontend</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={`${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Backend</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={`${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">DevOps</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={`${i < 3 ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>


        </div>
      </section>
      </>
    );
}