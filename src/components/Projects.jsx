import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaExternalLinkAlt, FaUtensils } from 'react-icons/fa';
import { SiReact,SiExpress,SiJavascript, SiMongodb, SiPython, SiGo } from 'react-icons/si';

const projects = [
  {
    name: 'Digilekh',
    description: 'A blogging platform for sharing and discovering content with a rich text editor and user authentication.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'TailwindCSS'],
    link: 'https://github.com/Abhay-hack/Digilekh',
    icon: <FaCode className="text-indigo-500" />,
  },
  {
    name: 'Lumina',
    description: 'A dynamic portfolio website showcasing tech projects with modern UI/UX and animations.',
    tech: ['Html', 'CSS', 'JS', 'GSAP'],
    link: 'https://github.com/Abhay-hack/Lumina',
    icon: <SiJavascript className="text-sky-400" />,
  },
  {
    name: 'Vasant',
    description: 'Developed a cross-platform weather CLI tool using Go, offering accurate weather forecasts. Integrated WeatherAPI for real-time weather data and implemented location-based querying. Enhanced terminal user experience with color-coded outputs and clear formatting.',
    tech: ['Go', 'WeatherAPI'],
    link: 'https://github.com/Abhay-hack/Vasant',
    icon: <SiGo className="text-blue-500" />,
  },
  {
    name: 'QuickServe',
    description: 'Built a fast food ordering platform for restaurants and users.',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    link: 'https://github.com/Abhay-hack/foodie',
    icon: <FaUtensils className="text-red-500" />,
  },
  {
    name: 'CodeArena',
    description: 'Created an online coding competition platform supporting multiple languages, automatic code evaluation, and leaderboards. Integrated discussion forums and problem submission pipelines.',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    link: 'https://github.com/Abhay-hack/CodeArena',
    icon: <SiExpress className="text-yellow-500" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  },
};

const projectVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 50, rotate: -10 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      delay: Math.random() * 0.3 + i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 120,
    },
  }),
  hover: {
    scale: 1.05,
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
    transition: { duration: 0.3 },
  },
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <div id="projects" className="relative w-11/12 sm:w-3/4 mx-auto mt-12 py-8 px-4 sm:px-6">
      <style>{`
        .glass-container { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 1.5rem; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4); overflow: hidden; position: relative; }
        .bg-animation { position: absolute; inset: 0; background: linear-gradient(45deg, rgba(29, 78, 216, 0.3), rgba(67, 56, 202, 0.3), rgba(29, 78, 216, 0.3)); background-size: 200% 200%; animation: gradientFlow 8s ease infinite; }
        @keyframes gradientFlow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .project-card { transition: all 0.3s ease; }
      `}</style>

      <motion.div
        className="glass-container relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="bg-animation" />
        <div className="relative z-10 p-4 sm:p-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-6 sm:mb-8">
            My Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card bg-white/20 dark:bg-white/10 p-4 sm:p-6 rounded-xl border border-white/40 shadow-lg backdrop-blur-lg flex flex-col"
                variants={projectVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={index}
                whileHover="hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl sm:text-3xl">{project.icon}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">{project.name}</h3>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/30 dark:bg-white/10 text-blue-900 dark:text-white rounded-full text-xs font-medium border border-white/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-2 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span>View Project</span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
