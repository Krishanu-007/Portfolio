import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CircuitBackground } from '../ui/CircuitBackground';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, Easing } from 'framer-motion';
import { Sparkles, Cpu, Zap, CircuitBoard, Download, ExternalLink } from 'lucide-react';
import { TRANSITION_EASE } from '@/utils/animations';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const letterVariants = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: TRANSITION_EASE }
    }
  };

  const nameVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: TRANSITION_EASE,
        staggerChildren: 0.08,
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: TRANSITION_EASE, delay: 0.6 }
    }
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: TRANSITION_EASE, delay: 0.8 }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Dynamic Background Elements */}
      <CircuitBackground />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs - kept for ambient glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-8">



          {/* Staggered Name Reveal */}
          <div className="relative">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={nameVariants}
              className="text-5xl sm:text-7xl md:text-8xl font-bold font-poppins tracking-tight z-10 relative"
            >
              <span className="text-primary block pb-2 drop-shadow-md">
                {Array.from("Krishanu").map((char, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="text-foreground block">
                {Array.from("Bandyopadhyay").map((char, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block hover:text-primary transition-colors duration-300 cursor-default">
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
          </div>

          {/* Role & Description */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={subtitleVariants}
            className="space-y-4 max-w-2xl"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground flex items-center justify-center gap-3">
              <Cpu className="w-6 h-6 text-primary" />
              <span>Electronics & Communication Engineer</span>
              <CircuitBoard className="w-6 h-6 text-accent" />
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Specializing in <span className="text-foreground font-semibold">Semiconductor Technologies</span>,
              <span className="text-foreground font-semibold"> VLSI Design</span>, and
              <span className="text-foreground font-semibold"> Embedded Systems</span>.
              Turning silicon into solutions.
            </p>
          </motion.div>

          {/* Magnetic Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={ctaVariants}
            className="flex flex-col sm:flex-row items-center gap-4 pt-8"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary group"
              >
                <Zap className="w-5 h-5 mr-2 fill-current" />
                View My Work
                <div className="absolute inset-0 rounded-lg ring-2 ring-white/20 group-hover:ring-white/40 transition-all opacity-0 group-hover:opacity-100" />
              </motion.button>
            </Link>

            <motion.a
              href="https://drive.google.com/file/d/1AZQRfGIEOEfQnuFc0G301Fs9pJlzrZRS/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline group"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements Parallax */}
      <motion.div style={{ y: y1 }} className="absolute top-1/4 left-[10%] opacity-20 hidden lg:block">
        <CircuitBoard size={64} className="text-primary rotate-12" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute bottom-1/4 right-[10%] opacity-20 hidden lg:block">
        <Cpu size={80} className="text-accent -rotate-12" />
      </motion.div>

    </section>
  );
};

