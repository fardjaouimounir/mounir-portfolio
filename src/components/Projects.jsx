import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EyeIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { SiReact, SiNodedotjs, SiLaravel, SiPhp, SiMongodb, SiMysql } from 'react-icons/si';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Medical Management System (Medcol)',
      description: 'A comprehensive healthcare management web app connecting doctors, pharmacists, and patients with real-time chat, appointment management, and AI-assisted prescription validation.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
      technologies: [
        { name: 'React.js', icon: SiReact },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'MongoDB', icon: SiMongodb },
      ],
      demo: '#',
      github: 'https://github.com/fardjaouimounir',
      featured: true,
    },
    {
      title: 'High School Management Platform',
      description: 'Comprehensive platform to manage students, teachers, grades, and administrative tasks efficiently with intuitive user interface.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
      technologies: [
        { name: 'Laravel', icon: SiLaravel },
        { name: 'MySQL', icon: SiMysql },
      ],
      demo: '#',
      github: 'https://github.com/fardjaouimounir',
      featured: false,
    },
    {
      title: 'Restaurant Management System',
      description: 'Web system for managing restaurant orders, menus, inventory, and employee scheduling with real-time updates.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      technologies: [
        { name: 'PHP', icon: SiPhp },
        { name: 'MySQL', icon: SiMysql },
      ],
      demo: '#',
      github: 'https://github.com/fardjaouimounir',
      featured: false,
    },
    {
      title: 'Quranic School Management',
      description: 'Application for managing Quranic classes, tracking student progress, teacher assignments, and class schedules.',
      image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=600&h=400&fit=crop',
      technologies: [
        { name: 'PHP', icon: SiPhp },
        { name: 'MySQL', icon: SiMysql },
      ],
      demo: '#',
      github: 'https://github.com/fardjaouimounir',
      featured: false,
    },
    {
      title: 'Gym Management System',
      description: 'Web solution for gym administration, membership management, workout tracking, and subscription billing.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
      technologies: [
        { name: 'React.js', icon: SiReact },
        { name: 'PHP', icon: SiPhp },
      ],
      demo: '#',
      github: 'https://github.com/fardjaouimounir',
      featured: false,
    },
    {
      title: 'Project 0 - Educational Platform',
      description: 'Educational web platform for university students developed with Elec Club team, featuring course management and collaboration tools.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
      technologies: [
        { name: 'React.js', icon: SiReact },
        { name: 'Node.js', icon: SiNodedotjs },
      ],
      demo: '#',
      github: 'https://github.com/fardjaouimounir',
      featured: true,
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 bg-gradient-to-b from-blue-950/30 to-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and contributions to various projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-gradient-to-br from-blue-950/50 to-dark border border-primary/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-xs font-semibold text-white shadow-lg">
                  Featured
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-primary rounded-full text-white shadow-lg hover:shadow-primary/50"
                  >
                    <EyeIcon className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-secondary rounded-full text-white shadow-lg hover:shadow-secondary/50"
                  >
                    <CodeBracketIcon className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="flex items-center gap-2 px-3 py-1 bg-dark/50 rounded-full border border-primary/20 text-xs"
                    >
                      <tech.icon className="text-primary" />
                      <span className="text-gray-300">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/fardjaouimounir"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary rounded-full text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
          >
            <span>View All Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
