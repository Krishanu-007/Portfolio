import { motion } from 'framer-motion';
import { Cpu, Zap, Target } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/utils/animations';
import { CircuitBackground } from '../ui/CircuitBackground';

export const About = () => {
  const highlights = [
    {
      icon: Cpu,
      title: "RTL to GDSII",
      description: "Complete digital design flow expertise"
    },
    {
      icon: Zap,
      title: "Mixed-Signal Design",
      description: "Digital, analog, and RF circuit design"
    },
    {
      icon: Target,
      title: "RISC-V Development",
      description: "Custom processor cores and systems"
    }
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 overflow-x-hidden relative"
    >
      <CircuitBackground />
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Title */}
        <motion.div
          variants={staggerItem}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Driven by curiosity and innovation in semiconductor design
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            variants={staggerItem}
            className="relative w-full max-w-lg mx-auto"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-20 blur-xl"
            />
            <div className="relative bg-surface-elevated border border-border rounded-2xl p-6 sm:p-8 glass-card">
              <div className="w-full aspect-square bg-gradient-primary rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Krishanu Bandyopadhyay"
                  className="w-full h-full object-cover rounded-xl filter grayscale"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-xl font-semibold mb-2">Krishanu Bandyopadhyay</h3>
                <p className="text-muted-foreground">Electronics & Communication Engineer</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerItem}
            className="space-y-8"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">My Story</h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 text-justify">
                I completed my graduation in Electronics and Communication Engineering. I'm a self-taught open-source toolchain based VLSI and Embedded Systems enthusiast with hands-on experience across the full design flow — from Register Transfer Level (RTL) design to physical layout (GDSII) and embedded system development. I am passionate about designing efficient hardware systems and contributing to the open-source silicon ecosystem.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-justify">
                Currently working on building a strong fundamental presence in both frontend and backend VLSI tools with a focus on application in real life projects.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid gap-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="glass-card p-6 rounded-xl hover-card glow-card"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                        <p className="text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
