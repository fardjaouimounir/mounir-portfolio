import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Dev-Oma',
      location: 'Freelance / Collaboration',
      period: '2023 - Present',
      description: [
        'Built modern and responsive user interfaces using React.js, React Query, and Redux',
        'Implemented real-time chat systems using Socket.io and Chatbot integration',
        'Contributed to the Medical Management System (Medcol), a full-stack healthcare web app',
      ],
      icon: BriefcaseIcon,
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Elec Club, Project 0',
      location: 'University of M\'sila',
      period: '2024 - 2025',
      description: [
        'Developed an educational web platform for university students',
        'Collaborated with tech team members to implement core features',
        'Participated in design and architecture decisions',
      ],
      icon: BriefcaseIcon,
    },
    {
      type: 'education',
      title: 'Master\'s Degree',
      company: 'Mohamed Boudiaf University of M\'sila',
      location: 'M\'sila, Algeria',
      period: '2024 - 2025',
      description: [
        'Information System and Software Engineering',
        'Focus on full-stack web applications and intelligent systems',
        'Master\'s project on AI-powered healthcare solutions',
      ],
      icon: AcademicCapIcon,
    },
    {
      type: 'education',
      title: 'Bachelor\'s Degree',
      company: 'Mohamed Boudiaf University of M\'sila',
      location: 'M\'sila, Algeria',
      period: '2022 - 2023',
      description: [
        'Computer Science and Information Systems',
        'Graduated with honors',
        'Bachelor project on web-based management systems',
      ],
      icon: AcademicCapIcon,
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden lg:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col gap-8`}
              >
                {/* Content */}
                <div className="lg:w-5/12 w-full">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-blue-950/50 to-dark border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${
                        exp.type === 'work' 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-secondary/20 text-secondary'
                      }`}>
                        <exp.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                        <p className="text-sm text-gray-400">{exp.location}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-dark/50 rounded-full border border-primary/20">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-gray-300">{exp.period}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className="text-primary mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="hidden lg:flex items-center justify-center w-2/12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/50 border-4 border-dark"
                  />
                </div>

                {/* Empty Space */}
                <div className="lg:w-5/12 w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
