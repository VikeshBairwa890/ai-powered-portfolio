import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle, FaClock, FaCode, FaCommentAlt, FaEnvelope, FaExternalLinkAlt, FaGithub, FaGlobe, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaStar, FaTwitter, FaUser } from "react-icons/fa";

export default function Contact() {
    return (
      <section
        id="contact"
        className="snap-start min-h-screen flex items-center justify-center relative px-4 sm:px-6 py-12 md:py-16"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-orange-50/30 dark:from-gray-900 dark:via-gray-950 dark:to-orange-950/10" />
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />

        <div className="max-w-6xl w-full relative z-10">
          {/* Combined Header & CTA */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 dark:bg-orange-500/20 mb-4">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                Ready to Collaborate
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Let's Create
              </span>
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent ml-2">
                Together
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg mb-8">
              Have a project or opportunity? I'm currently available for freelance work and full-time roles.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Quick Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Email Card */}
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Email</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Fastest response</p>
                  </div>
                </div>
                <a
                  href="mailto:sanket@example.com"
                  className="group flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/30 hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-all"
                >
                  <span className="font-medium text-gray-900 dark:text-white">sanket@example.com</span>
                  <FaExternalLinkAlt className="text-gray-400 group-hover:text-orange-500 transition-colors text-sm" />
                </a>
              </div>

              {/* Social Links Card */}
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Connect Online</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: FaLinkedin, label: 'LinkedIn', color: 'bg-blue-500', href: 'https://linkedin.com' },
                    { icon: FaGithub, label: 'GitHub', color: 'bg-gray-800', href: 'https://github.com' },
                    { icon: FaTwitter, label: 'Twitter', color: 'bg-sky-500', href: 'https://twitter.com' },
                    { icon: FaInstagram, label: 'Instagram', color: 'bg-gradient-to-br from-purple-500 to-pink-500', href: 'https://instagram.com' },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/30 hover:shadow-md transition-all"
                    >
                      <div className={`w-8 h-8 rounded-lg ${social.color} flex items-center justify-center`}>
                        <social.icon className="text-white text-sm" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white text-sm" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Based in</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Remote First</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <FaCheckCircle className="text-green-500 text-xs" />
                    <span>Available worldwide</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <FaCheckCircle className="text-green-500 text-xs" />
                    <span>24-hour response time</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <FaCheckCircle className="text-green-500 text-xs" />
                    <span>Flexible hours</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Center: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-2xl h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
                    <FaPaperPlane className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Send a Message
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Tell me about your project or opportunity
                    </p>
                  </div>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Message sent! I\'ll get back to you soon.');
                  }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full pl-9 pr-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 transition-all outline-none text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="w-full pl-9 pr-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 transition-all outline-none text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      What are you looking for? *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                      {['Freelance Project', 'Full-time Role', 'Consultation', 'Other'].map((option) => (
                        <label key={option} className="flex items-center gap-2">
                          <input type="radio" name="project-type" value={option} className="text-orange-500" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Message *
                    </label>
                    <div className="relative">
                      <FaCommentAlt className="absolute left-3 top-3 text-gray-400 text-sm" />
                      <textarea
                        required
                        rows={4}
                        placeholder="Briefly describe your project, timeline, and budget..."
                        className="w-full pl-9 pr-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 transition-all outline-none text-sm resize-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600 overflow-hidden">
                        <img src="/avatar.jpg" alt="Sanket" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">Sanket</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Full Stack Developer</p>
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-2"
                    >
                      <FaPaperPlane className="text-sm" />
                      Send Message
                      <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  <p className="text-center text-xs text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-100 dark:border-gray-700">
                    I typically respond within 24 hours • Available for remote work worldwide
                  </p>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '50+', label: 'Projects Completed', icon: FaCode },
                { value: '100%', label: 'Client Satisfaction', icon: FaStar },
                { value: '24h', label: 'Avg. Response Time', icon: FaClock },
                { value: 'Worldwide', label: 'Remote Availability', icon: FaGlobe },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
                  <stat.icon className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
  