import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiReact,
  SiNodedotjs,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPython,
  SiJavascript,
  SiPhp,
  SiGit,
  SiDocker,
  SiTensorflow,
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: SiReact, color: '#61DAFB', level: 90 },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 88 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 92 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 85 },
        { name: 'Laravel', icon: SiLaravel, color: '#FF2D20', level: 87 },
        { name: 'PHP', icon: SiPhp, color: '#777BB4', level: 82 },
        { name: 'Python', icon: SiPython, color: '#3776AB', level: 80 },
      ],
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 85 },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 88 },
        { name: 'Git', icon: SiGit, color: '#F05032', level: 90 },
        { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00', level: 75 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" ref={ref} className="py-20 bg-gradient-to-b from-dark to-blue-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks for full-stack development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-950/50 to-dark border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className="text-2xl" style={{ color: skill.color }} />
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
