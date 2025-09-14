import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaAws } from 'react-icons/fa';
import { SiGo } from 'react-icons/si';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeInOut', staggerChildren: 0.2 },
  },
};

const certVariants = {
  hidden: { opacity: 0, rotate: -5 },
  visible: (i) => ({
    opacity: 1,
    rotate: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 100,
    },
  }),
  hover: {
    scale: 1.05,
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
    transition: { duration: 0.3 },
  },
};

const certifications = [
  {
    name: 'Google Cloud Fundamentals: Core Infrastructure',
    issuer: 'Google Cloud',
    date: 'November 2023',
    description: 'Completed training on core infrastructure services of Google Cloud, gaining foundational knowledge in compute, storage, and networking.',
    icon: <FaGoogle className="text-blue-700" />,
  },
  {
    name: 'Practice Go by CodeChef',
    issuer: 'CodeChef',
    date: 'October 2024',
    description: 'Earned certification through hands-on Go programming challenges, enhancing skills in building efficient and scalable applications.',
    icon: <SiGo className="text-cyan-600" />,
  },
  {
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    date: 'May 2025',
    description: 'Mastered foundational AWS cloud concepts, including services, security, and architecture, preparing for cloud-based solutions.',
    icon: <FaAws className="text-orange-400" />,
  },
  {
    name: 'Generative AI Arcade Game Distinction',
    issuer: 'Google Cloud Foundations',
    date: 'June 2024',
    description: 'Built a Generative AI Arcade Game, earning distinction for proficiency in cloud-based AI solutions.',
    icon: <FaGoogle className="text-blue-700" />,
  },
  {
    name: 'Digital Transformation with Google Cloud',
    issuer: 'Google Cloud',
    date: 'November 2023',
    description: 'Learned strategies for digital transformation using Google Cloud, focusing on innovation and business solutions.',
    icon: <FaGoogle className="text-blue-700" />,
  },
];

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCerts = showAll ? certifications : certifications.slice(0, 2);

  return (
    <div className="relative w-11/12 sm:w-3/4 mx-auto mt-12 py-8 px-4 sm:px-6">
      <style>{`
        .glass-container {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1.5rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
          overflow: hidden;
          position: relative;
        }
        .bg-animation {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(29, 78, 216, 0.3), rgba(67, 56, 202, 0.3), rgba(29, 78, 216, 0.3));
          background-size: 200% 200%;
          animation: gradientFlow 8s ease infinite;
        }
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .cert-card { transition: all 0.3s ease; }
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
            Certifications
          </h2>
          <div className="flex flex-col gap-4 sm:gap-6">
            {displayedCerts.map((cert, index) => (
              <motion.div
                key={index}
                className="cert-card bg-white/20 dark:bg-white/10 p-4 sm:p-6 rounded-xl border border-white/40 shadow-lg backdrop-blur-lg"
                variants={certVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={index}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl sm:text-2xl">{cert.icon}</span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">{cert.name}</h3>
                    <div className="hidden sm:block">
                      <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer} | {cert.date}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{cert.description}</p>
                    </div>
                  </div>
                </div>
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

export default Certifications;
