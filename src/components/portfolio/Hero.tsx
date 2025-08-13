import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Cpu, Zap, CircuitBoard } from 'lucide-react';

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Animation with Glass Morphism and VLSI Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glass morphism background elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/6 rounded-full blur-3xl"
        />

        {/* VLSI Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <svg
            className="w-full h-full max-w-full"
            viewBox="0 0 400 400"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="circuit"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 20h40M20 0v40"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.5"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="2"
                  fill="hsl(var(--primary-glow))"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Floating VLSI Icons */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-[10%] text-primary/20"
        >
          <Cpu size={48} />
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/3 right-[10%] text-accent/20"
        >
          <CircuitBoard size={40} />
        </motion.div>
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-[8%] text-primary-glow/20"
        >
          <Zap size={32} />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-8 text-center relative z-10 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center space-x-2 text-primary"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-lg font-medium">Hello, I'm</span>
            <Sparkles className="w-5 h-5" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold font-poppins break-words"
          >
            <span className="text-gradient">Krishanu</span>
            <br />
            <span className="text-foreground">Bandyopadhyay</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-2 px-2"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
              Electronics & Communication Engineer
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              An electronics & communication engineer with a passion towards
              semiconductor technologies, solid state physics, VLSI and Embedded
              Systems
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn-glow px-8 py-4 rounded-lg font-semibold text-primary-foreground"
            >
              View My Work
            </motion.button>
            <motion.a
              href="https://drive.google.com/file/d/1pasjgM5ZJTZbcWw64Vz-0qkx-2qFJiC7/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-morphism px-8 py-4 rounded-lg font-semibold text-foreground border border-border hover:border-primary/30 transition-colors inline-block"
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="pt-8 flex flex-col items-center space-y-2 text-muted-foreground"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center space-y-2"
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

