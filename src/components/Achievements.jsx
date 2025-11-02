import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrophyIcon, AcademicCapIcon, UserGroupIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: TrophyIcon,
      title: '1st Place - Programming & AI Olympiad',
      organization: 'University of M\'sila',
      year: '2025',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: TrophyIcon,
      title: '1st Place Winner - GDSC Competition',
      organization: 'Google Developer Student Club',
      year: '2023',
      color: 'from-primary to-secondary',
    },
    {
      icon: AcademicCapIcon,
      title: 'Python Training Certificate',
      organization: 'AIH & Computer Science Dept.',
      year: '2024',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: UserGroupIcon,
      title: 'Innovative Projects Exhibition',
      organization: 'ENSSM - National School',
      year: '2025',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BriefcaseIcon,
      title: 'Economic Project Certificate',
      organization: 'Business-Oriented Platform',
      year: '2022',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: UserGroupIcon,
      title: 'Tech Team Member',
      organization: 'Elec Club, Project 0',
      year: '2025',
      color: 'from-red-500 to-orange-500',
    },
  ];

  return (
    <section id="achievements" ref={ref} className="py-20 bg-gradient-to-b from-dark to-blue-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Achievements & Certifications
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognition and accomplishments throughout my journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-blue-950/50 to-dark border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} p-0.5 mb-4`}
                >
                  <div className="w-full h-full bg-dark rounded-xl flex items-center justify-center">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {achievement.organization}
                </p>
                
                {/* Year Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-primary font-semibold">{achievement.year}</span>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${achievement.color} opacity-10 rounded-2xl blur-2xl group-hover:opacity-20 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
