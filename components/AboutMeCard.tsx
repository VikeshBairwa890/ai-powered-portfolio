import { motion } from "framer-motion";
import { useState } from "react";
import { FaCode, FaRocket, FaRobot, FaServer, FaBrain, FaPlay, FaDatabase, FaBullseye, FaQuoteLeft, FaQuoteRight, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';

const testimonials = [
  {
    id: 1,
    name: 'Jim Corner',
    role: 'CEO, Victionary Co.',
    quote: 'I would like to say a big Thank you for your immense effort and support. I have a feeling our future events are going to be great as well. Good luck to the team.',
    avatar: 'sanket_photo.png',
    rating: 5,
    company: 'Victionary',
    date: 'Jan 2024'
  },
  {
    id: 2,
    name: 'Priya Verma',
    role: 'Product Manager',
    quote: 'Reliable, fast, and thoughtful. Sanket really understood what we needed and turned it into a beautiful frontend experience that exceeded our expectations.',
    avatar: 'sanket_photo.png',
    rating: 5,
    company: 'TechCorp',
    date: 'Dec 2023'
  },
  {
    id: 3,
    name: 'Amit Sharma',
    role: 'Founder, StartupX',
    quote: 'Working with Sanket was seamless — he delivered a high-quality full-stack app ahead of schedule. His technical expertise and communication were exceptional.',
    avatar: 'sanket_photo.png',
    rating: 5,
    company: 'StartupX',
    date: 'Nov 2023'
  },
  {
    id: 4,
    name: 'Sara Lee',
    role: 'Tech Recruiter',
    quote: 'Sanket\'s attention to detail and ability to deliver on time stood out. The UI and performance were excellent, making him a top candidate for any frontend role.',
    avatar: 'sanket_photo.png',
    rating: 5,
    company: 'RecruitHub',
    date: 'Oct 2023'
  },
  {
    id: 5,
    name: 'Rahul Kulkarni',
    role: 'Design Lead',
    quote: 'One of the best freelancers I\'ve collaborated with. His UI decisions are always on point and he understands design systems perfectly.',
    avatar: 'sanket_photo.png',
    rating: 5,
    company: 'DesignStudio',
    date: 'Sep 2023'
  },
  {
    id: 6,
    name: 'Neha Patel',
    role: 'CTO, FinTech Inc.',
    quote: 'Sanket\'s ability to translate complex requirements into elegant solutions is impressive. His work on our dashboard saved us countless development hours.',
    avatar: 'sanket_photo.png',
    rating: 5,
    company: 'FinTech Inc.',
    date: 'Aug 2023'
  }
];

export default function AboutMeCard() {
  
    const [current, setCurrent] = useState(0);
    const total = testimonials.length;

    const next = () => setCurrent((prev) => (prev + 1) % total);
    const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  return (
    <>
    <section id="about" className="snap-start min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-12 md:py-16 gap-10 md:gap-16 lg:gap-25 md:px-0">
      <motion.div
        className="relative bottom-10-5"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute top-1/2 -right-8 md:-right-20 z-50 scale-75 md:scale-100 transform -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={() => {
              // Add your video modal logic here
              alert('Play intro video');
            }}
            className="relative w-20 h-20 md:w-30 md:h-30 rounded-full flex items-center justify-center bg-white backdrop-blur-lg text-[var(--color-primary)] text-xl md:text-3xl font-bold shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <FaPlay />
            {/* Wavy Pulse Animation */}
            <span className="absolute inset-0 rounded-full border-4 border-[var(--color-primary)] animate-ping-slow" />
          </button>
        </motion.div>

        <div className="absolute w-[300px] h-[400px] md:w-[560px] md:h-[635px] bottom-0 left-20 z-0 bg-[length:40px_40px] bg-[center] bg-grid-light dark:bg-grid-dark hidden md:block" />

        {/* Background card - rotated */}
        <div
          className="absolute w-[300px] h-[400px] md:w-[560px] md:h-[565px] bottom-0 rotate-[6deg] z-5 shadow-xl"
          style={{ backgroundColor: '#ffb38a' }}
        />

        {/* Background card - straight */}
        <div
          className="absolute w-[300px] h-[400px] md:w-[560px] md:h-[565px] right-0 bottom-0 z-10"
          style={{ backgroundColor: '#ff7e26' }}
        />

        {/* Foreground image */}
        <img
          src="/sanket_photo2.png"
          alt="Sanket Gaikwad"
          className="relative z-20 w-[300px] md:w-[560px] h-[420px] md:h-[680px] object-cover scale-x-[-1]"
        />
      </motion.div>

      {/* Right - Enhanced Content */}
      <motion.div
        className="flex-1 text-center md:text-left max-w-2xl px-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          Hi, I'm <span className="text-[color:var(--color-primary)]">Vikesh</span>
        </h1>

        {/* Animated Headline */}
        <h2 className="text-3xl md:text-4xl font-medium mb-6 text-gray-800 dark:text-gray-200 min-h-[48px]">
          <Typewriter
            words={[
              "Integrating AI into modern web applications.",
              "Building intelligent automation solutions.",
              "Transforming ideas into intuitive UIs.",
              "Crafting robust backend architectures.",
              "Solving problems with clean code and AI.",
              "Developing smart, automated workflows.",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </h2>

        {/* Enhanced Description */}
        <div className="space-y-6 mb-8">
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            I'm a <span className="font-semibold text-[color:var(--color-primary)]">Full Stack Developer</span> with
            <span className="font-semibold text-[color:var(--color-primary)]"> 2+ years</span> of experience creating
            digital solutions that blend beautiful design with powerful functionality.
          </p>

          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            My journey started with freelancing, where I delivered
            <span className="font-semibold text-[color:var(--color-primary)]"> 50+ projects</span> for clients worldwide.
            This experience taught me how to transform complex requirements into elegant, user-friendly applications.
          </p>

          {/* What I Do */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              What I Do Best:
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: FaCode, text: "Frontend Development" },
                { icon: FaServer, text: "Backend Systems" },
                { icon: FaBrain, text: "AI Integration" },
                { icon: FaRobot, text: "Automation" },
                { icon: FaDatabase, text: "Database Design" },
                { icon: FaRocket, text: "Performance Optimization" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[color:var(--color-primary)]/10 flex items-center justify-center">
                    <item.icon className="text-[color:var(--color-primary)]" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Current Focus */}
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <FaBullseye className="text-[color:var(--color-primary)]" />
              <span className="font-semibold text-gray-900 dark:text-white">
                Current Focus
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Building scalable SaaS products with Next.js, TypeScript, and modern cloud technologies.
              Exploring AI integration and real-time applications.
            </p>
          </div>
        </div>

      </motion.div>
    </section>
     <section id="testimonials" className="snap-start min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 sm:px-6 py-12 md:py-16" >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
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
                Client Voices
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Trusted by
              </span>
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent ml-2">
                Innovators & Leaders
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Real feedback from clients and collaborators who've experienced the work firsthand
            </p>
          </motion.div>

          {/* Main Testimonial Card */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            {/* Left Side - Featured Testimonial */}
            <motion.div
              className="w-full lg:w-2/5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl dark:shadow-2xl border border-gray-100 dark:border-gray-700/50">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
                  <FaQuoteLeft className="text-white text-sm" />
                </div>

                {/* Current Testimonial Content */}
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6"
                >
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed">
                    "{testimonials[current].quote}"
                  </p>
                </motion.div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <motion.div
                    key={current + '-avatar'}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-orange-500/30">
                      <img
                        src={testimonials[current].avatar}
                        alt={testimonials[current].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
                      <FaQuoteRight className="text-white text-xs" />
                    </div>
                  </motion.div>

                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonials[current].role}
                    </p>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Testimonials Grid & Navigation */}
            <motion.div
              className="w-full lg:w-3/5 mb-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Navigation Controls */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-20 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-orange-500 to-pink-500"
                      initial={{ width: "0%" }}
                      animate={{ width: `${((current + 1) / testimonials.length) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {current + 1} / {testimonials.length}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 active:scale-95 transition-all duration-200 group"
                    aria-label="Previous testimonial"
                  >
                    <FaArrowLeft className="group-hover:-translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={next}
                    className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 active:scale-95 transition-all duration-200 group"
                    aria-label="Next testimonial"
                  >
                    <FaArrowRight className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Testimonials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {testimonials.map((testimonial, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`text-left p-4 rounded-xl border transition-all duration-300 ${current === idx
                      ? 'border-orange-500 bg-gradient-to-r from-orange-500/5 to-pink-500/5 dark:from-orange-500/10 dark:to-pink-500/10'
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:border-orange-300 dark:hover:border-orange-500'
                      }`}
                  >
                    {/* Small Quote */}
                    <div className="mb-3">
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 italic">
                        "{testimonial.quote.split(' ').slice(0, 15).join(' ')}..."
                      </p>
                    </div>

                    {/* Author Mini */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium text-gray-900 dark:text-white truncate">
                          {testimonial.name}
                        </h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {testimonial.role}
                        </p>
                      </div>
                      {current === idx && (
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 animate-pulse" />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      </>
  );
}