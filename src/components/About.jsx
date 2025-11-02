import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CodeBracketIcon, AcademicCapIcon, BriefcaseIcon, SparklesIcon } from '@heroicons/react/24/outline';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { label: 'Years Experience', value: '3+', icon: BriefcaseIcon },
    { label: 'Projects Completed', value: '15+', icon: CodeBracketIcon },
    { label: 'Technologies', value: '10+', icon: AcademicCapIcon },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" />
      
      {/* Floating Shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate software engineer with a love for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Animated Background Circles */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-3xl"
              />

              {/* Decorative Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-2 border-dashed border-primary/20 rounded-3xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border border-dotted border-secondary/20 rounded-3xl"
              />

              {/* Main Image Container */}
              <motion.div
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-gradient-to-br from-blue-950 to-dark rounded-3xl p-2 border border-primary/20 shadow-2xl hover:shadow-primary/20"
              >
                {/* Image Border with Gradient */}
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
                  {/* صورتك الشخصية - استبدل المسار بصورتك */}
                  <img
                    src="mounir.jpg" // ضع مسار صورتك هنا
                    alt="Mounir Fardjaoui"
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-4 left-4 right-4 bg-dark/90 backdrop-blur-lg border border-primary/20 rounded-xl p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <SparklesIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">Full-Stack Developer</h4>
                        <p className="text-gray-400 text-xs">React · Node.js · Laravel</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full animate-pulse" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-secondary rounded-full animate-pulse" />
              </motion.div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05, x: -10 }}
                className="absolute -left-8 top-1/4 bg-gradient-to-br from-blue-950/90 to-dark/90 backdrop-blur-lg border border-primary/20 rounded-2xl p-4 shadow-xl hidden md:block"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    15+
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Projects</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="absolute -right-8 bottom-1/4 bg-gradient-to-br from-blue-950/90 to-dark/90 backdrop-blur-lg border border-primary/20 rounded-2xl p-4 shadow-xl hidden md:block"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-purple-500 bg-clip-text text-transparent">
                    3+
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Years Exp</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm <span className="text-primary font-semibold">Mounir Fardjaoui</span>, a passionate Full-Stack Developer 
                and Software Engineer from Alger, Algeria. Currently pursuing my Master's degree in 
                <span className="text-secondary font-semibold"> Information System and Software Engineering</span> at 
                Mohamed Boudiaf University of M'sila.
              </p>
              <p>
                With expertise in modern web technologies like <span className="text-primary">React.js</span>, 
                <span className="text-primary"> Node.js</span>, and <span className="text-primary">Laravel</span>, 
                I specialize in building scalable and innovative web applications. I have a strong passion 
                for AI-powered solutions and real-time communication systems.
              </p>
              <p>
                I've successfully delivered <span className="text-secondary font-semibold">15+ projects</span> ranging 
                from healthcare management systems to educational platforms. I'm always eager to learn new 
                technologies and contribute to impactful digital solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-950/50 to-dark border border-primary/20 rounded-xl p-4 text-center hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Skills Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 pt-6"
            >
              {['React.js', 'Node.js', 'Laravel', 'MongoDB', 'TensorFlow', 'Socket.io'].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="pt-6"
            >
             <motion.a
  href="/fardjaoui_mounir_CV.pdf" // ✅ المسار الصحيح إلى الملف في مجلد public
  download="fardjaoui_mounir_CV.pdf"
  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(14, 165, 233, 0.3)" }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold shadow-lg hover:shadow-primary/50 transition-all duration-300"
>
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
  <span>Download CV</span>
</motion.a>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
