import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';
import emailjs from '@emailjs/browser';

const socialLinks = [
  { name: 'Github', icon: <FaGithub className="text-yellow-400" />, url: 'https://github.com/Abhay-hack' },
  { name: 'GeeksforGeeks', icon: <SiGeeksforgeeks className="text-green-700" />, url: 'https://www.geeksforgeeks.org/user/ag408ya3g/' },
  { name: 'LeetCode', icon: <SiLeetcode className="text-orange-400" />, url: 'https://leetcode.com/u/0xcrypt/' },
  { name: 'LinkedIn', icon: <FaLinkedin className="text-blue-700" />, url: 'https://www.linkedin.com/in/abhay-gupta-1257b6248' },
];

const Contact = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY   
    ).then(
      (result) => {
        setSending(false);
        setMessage('Message sent successfully! Thank you for reaching out.');
        formRef.current.reset();
      },
      (error) => {
        setSending(false);
        setMessage('Failed to send message. Please try again.');
        console.error(error.text);
      }
    );
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeInOut' } },
  };

  const linkVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 50, rotate: -10 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: { delay: Math.random() * 0.2 + i * 0.15, duration: 0.6, ease: 'easeOut', type: 'spring', stiffness: 100 },
    }),
    hover: { scale: 1.1, rotate: 5, boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)', transition: { duration: 0.3 } },
  };

  return (
    <div id="contact" className="relative w-11/12 md:w-3/4 mx-auto mt-12 py-8 px-6">
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
        .input-field {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 0.5rem;
          padding: 0.75rem;
          color: white;
          width: 100%;
        }
        .input-field::placeholder { color: rgba(255, 255, 255, 0.7); }
        .social-card { transition: all 0.3s ease; }
      `}</style>

      <motion.div className="glass-container relative" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
        <div className="bg-animation" />
        <div className="relative z-10 p-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Contact Form */}
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <input type="text" name="name" placeholder="Your Name" className="input-field" required />
              <input type="email" name="email" placeholder="Your Email" className="input-field" required />
              <textarea name="message" placeholder="Your Message" className="input-field resize-none h-32" required></textarea>
              <button type="submit" disabled={sending} className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                {sending ? 'Sending...' : 'Send Message'}
              </button>
              {message && <p className="text-center text-sm mt-2">{message}</p>}
            </form>

            {/* Social Links */}
            <div className="flex flex-col items-center justify-center space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card flex items-center gap-3 px-4 py-2 bg-white/20 dark:bg-white/10 text-blue-900 dark:text-white rounded-full border border-white/40 shadow-lg backdrop-blur-lg w-full max-w-xs"
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  custom={index}
                  whileHover="hover"
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="text-sm font-semibold">{link.name}</span>
                </motion.a>
              ))}
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
