'use client';

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiFolderPlus } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: 'Community Management Platform',
    description: 'A scalable enterprise platform for managing user communities with real-time analytics, role-based permissions, and engagement tracking. Features include discussion forums, event management, and comprehensive reporting dashboards.',
    tech: 'React, Node.js, PostgreSQL, Redis, JWT, Socket.io',
    link: '#',
    category: 'Enterprise SaaS',
    year: '2024',
    status: 'live'
  },
  {
    id: 2,
    title: 'Project Management System',
    description: 'Enterprise-grade project collaboration platform with Gantt charts, Kanban boards, time tracking, and resource allocation. Integrated with Slack, Jira, and GitHub for seamless workflow.',
    tech: 'React, TypeScript, Node.js, MongoDB, GraphQL',
    link: '#',
    category: 'Productivity Tool',
    year: '2024',
    status: 'live'
  },
  {
    id: 3,
    title: 'Performance Management System',
    description: 'AI-powered performance evaluation platform with 360° feedback, OKR tracking, and predictive analytics. Features real-time KPI dashboards and automated review cycles.',
    tech: 'Next.js, Node.js, PostgreSQL, Python, ML',
    link: '#',
    category: 'HR Tech',
    year: '2024',
    status: 'live'
  },
  {
    id: 4,
    title: 'Rewards & Recognition Platform',
    description: 'Gamified employee engagement platform with points-based rewards, peer recognition, and performance analytics. Integrated with HR systems for seamless data flow.',
    tech: 'React, Node.js, MongoDB, Redis, WebSocket',
    link: '#',
    category: 'Employee Engagement',
    year: '2023',
    status: 'live'
  },
  {
    id: 5,
    title: 'Runtime Corporate Website',
    description: 'SEO-optimized, high-performance corporate website with CMS integration, blog platform, and lead generation features. Achieved 95+ Lighthouse performance score.',
    tech: 'Next.js 14, TypeScript, Tailwind CSS, Sanity CMS',
    link: '#',
    category: 'Corporate Website',
    year: '2023',
    status: 'live'
  },
  {
    id: 6,
    title: 'Account Management System',
    description: 'Secure financial management system handling client accounts, billing automation, subscription management, and compliance reporting with bank-grade security.',
    tech: 'Node.js, PostgreSQL, Stripe API, OAuth 2.0',
    link: '#',
    category: 'FinTech',
    year: '2023',
    status: 'live'
  },
  {
    id: 7,
    title: 'HRMS Platform',
    description: 'Comprehensive Human Resource Management System with payroll processing, attendance tracking, leave management, and compliance automation for enterprises.',
    tech: 'React, Node.js, PostgreSQL, Redis, Docker',
    link: '#',
    category: 'Enterprise HR',
    year: '2023',
    status: 'live'
  },
  {
    id: 8,
    title: 'Live Travel Tracking System',
    description: 'Real-time fleet management and travel tracking platform with GPS integration, route optimization, ETA predictions, and driver performance analytics.',
    tech: 'React Native, Node.js, WebSocket, Google Maps API',
    link: '#',
    category: 'Logistics Tech',
    year: '2023',
    status: 'live'
  },
  {
    id: 9,
    title: 'Smart Traffic Management',
    description: 'IoT-based intelligent traffic control system using computer vision for congestion detection, adaptive signal timing, and real-time traffic flow optimization.',
    tech: 'Python, OpenCV, IoT, FastAPI, React',
    link: '#',
    category: 'Smart City',
    year: '2022',
    status: 'academic'
  },
  {
    id: 10,
    title: 'Path Lab Management System',
    description: 'Complete laboratory information management system for patient registration, test processing, report generation, and inventory management.',
    tech: 'PHP, Laravel, MySQL, Bootstrap, Chart.js',
    link: '#',
    category: 'Healthcare Tech',
    year: '2022',
    status: 'academic'
  },
  {
    id: 11,
    title: 'AI-Powered Portfolio',
    description: 'Interactive portfolio website with AI-driven content personalization, chatbot integration, and dynamic project showcases based on visitor engagement.',
    tech: 'Next.js, OpenAI API, Tailwind CSS, Framer Motion',
    link: '#',
    category: 'Personal Project',
    year: '2024',
    status: 'live'
  },
  {
    id: 12,
    title: 'E-commerce Analytics Dashboard',
    description: 'Real-time business intelligence dashboard for e-commerce stores with sales analytics, customer behavior insights, and inventory predictions.',
    tech: 'React, D3.js, Node.js, PostgreSQL, WebSocket',
    link: '#',
    category: 'Analytics',
    year: '2024',
    status: 'live'
  }
];


export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);

const scroll = (direction: 'left' | 'right') => {
  if (scrollRef.current) {
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -400 : 400,
      behavior: 'smooth',
    });
  }
};

  const scrollToProject = (index: number) => {
    if (scrollRef.current) {
      const firstChild = scrollRef.current.children[0] as HTMLElement;
      const cardWidth = firstChild?.offsetWidth || 400;
      const gap = 24; // gap-6 in pixels
      scrollRef.current.scrollLeft = index * (cardWidth + gap);
      setActiveProject(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollLeft;
        const firstChild = scrollRef.current.children[0] as HTMLElement;
        const cardWidth = firstChild?.offsetWidth || 400;
        // ... rest of your scroll handling code
      }
    };
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      className="snap-start min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 sm:px-6 py-12 md:py-16"
    >
      <div className="relative w-full max-w-7xl px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 dark:bg-orange-500/20 mb-5"
          >
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
              Featured Work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Projects That
            </span>
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent ml-2">
              Define Impact
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Where innovative design meets robust engineering — creating digital experiences that matter
          </motion.p>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {activeProject + 1} / {projects.length}
            </span>
            <div className="h-1 w-20 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-orange-500"
                initial={{ width: "0%" }}
                animate={{ width: `${((activeProject + 1) / projects.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 active:scale-95 transition-all duration-200"
              aria-label="Previous project"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 active:scale-95 transition-all duration-200"
              aria-label="Next project"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent"
          >
            <div className="inline-flex gap-6 md:gap-8 px-1 pb-6">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setActiveProject(idx)}
                  className="group relative w-[90vw] sm:w-[85vw] md:w-[400px] lg:w-[460px] flex-shrink-0 snap-center"
                >
                  {/* Card Container */}
                  <div className="relative h-[480px] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 backdrop-blur-sm shadow-lg dark:shadow-2xl transition-all duration-300 group-hover:shadow-xl dark:group-hover:shadow-gray-900/50">

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-500/5 dark:to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Project Image/Thumbnail Area */}
                    <div className="absolute top-4 right-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${project.status === 'live'
                        ? 'bg-green-500/20 text-green-600 dark:text-green-400'
                        : project.status === 'academic'
                          ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400'
                          : 'bg-purple-500/20 text-purple-600 dark:text-purple-400'
                        }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${project.status === 'live' ? 'bg-green-500'
                          : project.status === 'academic' ? 'bg-blue-500'
                            : 'bg-purple-500'
                          } ${project.status === 'live' ? 'animate-pulse' : ''}`} />
                        {project.status === 'live' ? 'Live' :
                          project.status === 'academic' ? 'Academic' : 'In Progress'}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col h-[calc(100%-12rem)]">
                      <div className="flex-1">
                        <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 mb-4">
                          {/* Title takes 2 columns on larger screens */}
                          <div className="xs:col-span-2 mt-4">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white leading-tight break-words">
                              {project.title}
                            </h3>
                          </div>

                          {/* Mobile metadata below */}
                          <div className="xs:hidden flex items-center justify-between w-full">
                            <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                              {project.category}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {project.year}
                            </span>
                          </div>
                        </div>


                        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.split(',').slice(0, 4).map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-500 transition-colors"
                            >
                              {tech.trim()}
                            </span>
                          ))}
                          {project.tech.split(',').length > 4 && (
                            <span className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500">
                              +{project.tech.split(',').length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
                            <span className="text-white font-bold text-sm">
                              {project.title.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="absolute bottom-4 left-4">
                              <span className="px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-sm text-white text-sm font-medium">
                                {project.category}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {project.year}
                            </p>
                          </div>
                        </div>

                        <a
                          href={project.link}
                          className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:gap-3 active:scale-95"
                        >
                          View Project
                          <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* View All Projects Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-[90vw] sm:w-[85vw] md:w-[400px] lg:w-[460px] flex-shrink-0 snap-center"
              >
                <div className="h-[480px] rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/20 group hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FiFolderPlus size={32} className="text-orange-500" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                    Explore More
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-sm">
                    Discover all my projects, experiments, and open-source contributions
                  </p>

                  <button className="group/btn inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-700 dark:to-gray-800 text-white font-semibold hover:shadow-xl transition-all duration-300 hover:gap-4">
                    View All Projects
                    <FiArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>

                  <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                    {projects.length}+ projects completed
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToProject(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${activeProject === idx
                ? 'w-8 bg-gradient-to-r from-orange-500 to-pink-500'
                : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
