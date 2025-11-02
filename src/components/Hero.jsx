import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const imageVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-blue-950 to-dark">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNCwxNjUsMjMzLDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 inline-block">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="block text-white mb-2">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-purple-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                Mounir Fardjaoui
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-4"
            >
              Full-Stack Developer & Software Engineer
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Specializing in React, Node.js, and Laravel. Building innovative web applications
              with modern technologies and AI-powered solutions.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(14, 165, 233, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary rounded-full text-primary font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {[
                { icon: FaGithub, href: 'https://github.com/fardjaouimounir', label: 'GitHub' },
                { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
                { icon: FaEnvelope, href: 'mailto:fardjaouimounir@gmail.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 flex items-center justify-center bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full transition-all duration-300 border border-primary/20"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              variants={imageVariants}
              className="relative"
            >
              {/* Animated Border */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-purple-500 rounded-full blur-2xl opacity-30"
              />

              {/* Rotating Ring */}
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-4 border-4 border-dashed border-primary/30 rounded-full"
              />

              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-full blur-3xl animate-pulse" />
                
                {/* Image Border */}
                <div className="relative w-full h-full p-2 bg-gradient-to-br from-primary via-secondary to-purple-500 rounded-full">
                  <div className="w-full h-full bg-dark rounded-full p-2">
                    {/* صورتك الشخصية - استبدل المسار بصورتك */}
                    <img
                      src="mounir.jpg" // ضع مسار صورتك هنا
                      alt="Mounir Fardjaoui"
                      className="w-full h-full object-cover rounded-full border-4 border-dark"
                    />
                  </div>
                </div>

                {/* Floating Badges */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm"
                >
                  Available
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-br from-primary to-secondary text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm"
                >
                  15+ Projects
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDownIcon className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
