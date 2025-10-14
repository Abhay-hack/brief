import React from 'react';
    import { motion } from 'framer-motion';
    import { FaDownload } from 'react-icons/fa';

    // Replace this with your hosted resume URL (e.g., from Google Drive, Dropbox, or GitHub)
    const resumeUrl = 'https://drive.google.com/file/d/1mI-AWS_ja0kE9OyC-9VPSInoY6nk6pzA/view?usp=sharing'; // Example: 'https://drive.google.com/uc?export=download&id/abc123'

    const Footer = () => {
      const footerVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.7, ease: 'easeOut' },
        },
      };

      return (
        <div className="relative w-11/12 sm:w-3/4 mx-auto mt-12 mb-6 px-4 sm:px-6 py-4 sm:py-4">
          <style>{`
            .glass-container {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(16px);
              -webkit-backdrop-filter: blur(16px);
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
            @media (max-width: 640px) {
              .download-button {
                font-size: 0.875rem;
                padding: 0.5rem 1rem;
              }
              .copyright-text {
                font-size: 0.75rem;
              }
            }
          `}</style>

          <motion.div
            className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 shadow-md rounded-2xl glass-container relative"
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="bg-animation" />
            <div className="relative z-10 p-4 sm:p-8 text-center text-blue-900 font-medium">
              {/* <a
                href={resumeUrl}
                download="Gupta_Abhay_Resume.pdf"
                className="mt-4 inline-flex items-center gap-2 py-2 sm:py-2 px-3 sm:px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors download-button"
              >
                <FaDownload />
                Download Resume
              </a> */}
              <p className="mt-4 copyright-text">© {new Date().getFullYear()} Abhay Gupta. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      );
    };

export default Footer;