import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ArrowDown, Sparkles, Cpu, Zap, CircuitBoard, Download, ExternalLink } from 'lucide-react';

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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3"
        />

        {/* Circuit Lines Animation */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <pattern
            id="circuit-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10 10 L90 10 M90 10 L90 90 M90 90 L10 90 M10 90 L10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary"
            />
            <circle cx="10" cy="10" r="1.5" className="fill-primary" />
            <circle cx="90" cy="90" r="1.5" className="fill-accent" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary group"
            >
              <Zap className="w-5 h-5 mr-2 fill-current" />
              View My Work
              <div className="absolute inset-0 rounded-lg ring-2 ring-white/20 group-hover:ring-white/40 transition-all opacity-0 group-hover:opacity-100" />
            </motion.button>

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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 text-muted-foreground/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

