import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderOpen, Github, ArrowUpRight, Lock, Code2, Cpu, Radio, Layers, Activity, Zap, Box, BarChart3 } from 'lucide-react';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    "All",
    "RISC-V Processors",
    "Analog & Mixed-Signal Design",
    "RF & Microwave Design",
    "Embedded & IoT Systems",
    "FPGA Development",
    "RTL Designs"
  ];

  const categoryDescriptions: Record<string, string> = {
    "RISC-V Processors": "Exploration of open-source ISA, custom core implementations, and performance architectural enhancements.",
    "Analog & Mixed-Signal Design": "High-precision circuit design including amplifiers, oscillators, and data converters using industry-standard PDKs.",
    "RF & Microwave Design": "Design and simulation of high-frequency components, filters, and antennas for modern communication systems.",
    "Embedded & IoT Systems": "Integration of hardware and firmware to build smart, connected real-world applications.",
    "FPGA Development": "Hardware acceleration and digital logic implementation using FPGA technologies.",
    "RTL Designs": "Efficient Register Transfer Level coding for digital logic and system blocks."
  };

  const projects = [
    {
      title: "Ring Oscillator Design",
      description: "Designed a 3-stage Ring Oscillator using SKY130 PDK. Analyzed frequency stability, phase noise, and power consumption across different process corners.",
      techStack: ["SKY130", "Xschem", "Ngspice", "Magic"],
      github: "https://github.com/Krishanu-007/ring_oscillator_sky130.git",
      category: "Analog & Mixed-Signal Design",
      status: "Completed",
      type: "analog"
    },
    {
      title: "CMOS Inverter Analysis",
      description: "Implemented and characterized a CMOS inverter with SKY130. Focused on noise margins, propagation delay, and layout optimization for high density.",
      techStack: ["SKY130", "Magic Layout", "Netgen", "Ngspice"],
      github: "https://github.com/Krishanu-007/cmos_inverter_sky130.git",
      category: "Analog & Mixed-Signal Design",
      status: "Completed",
      type: "analog"
    },
    {
      title: "Transistor Cha. Extraction",
      description: "Automated extraction of NMOS/PMOS I-V curves and threshold voltages using Python scripts and Ngspice simulations on SKY130 models.",
      techStack: ["Python", "Ngspice", "Semiconductor Physics"],
      github: "https://github.com/Krishanu-007/transistor_analysis_sky130.git",
      category: "Analog & Mixed-Signal Design",
      status: "Completed",
      type: "analysis"
    },
    {
      title: "Microstrip Filter (3.8GHz)",
      description: "Designed a compact UWB Bandpass Filter for 5G applications. Optimized S-parameters using ADS Momentum and fabricated on FR4 substrate.",
      techStack: ["ADS", "Momentum", "RF Design"],
      github: "https://github.com/Krishanu-007/compact-uwb-bpf-3.825GHz.git",
      category: "RF & Microwave Design",
      status: "Completed",
      type: "rf"
    },
    {
      title: "Anti-Collision System",
      description: "IoT-based vehicle safety system using ESP32 and A9G GSM/GPS module. Implemented real-time tracking and collision alerts via MQTT.",
      techStack: ["ESP32", "C++", "MQTT", "AWS IoT"],
      github: "https://github.com/Krishanu-007/Final-Year-Project-2k25.git",
      category: "Embedded & IoT Systems",
      status: "Completed",
      type: "embedded"
    }
  ];

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  // Helper to render abstract visual based on type
  const renderProjectVisual = (type: string) => {
    switch (type) {
      case 'analog':
        return (
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-primary fill-none stroke-[0.5]">
              <path d="M10,50 Q25,25 40,50 T70,50 T100,50" />
              <path d="M10,60 Q25,35 40,60 T70,60 T100,60" className="stroke-accent" />
              <rect x="20" y="30" width="10" height="40" />
              <rect x="70" y="30" width="10" height="40" />
            </svg>
          </div>
        );
      case 'rf':
        return (
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <Radio className="w-24 h-24 text-accent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 to-transparent animate-pulse" />
          </div>
        );
      case 'embedded':
        return (
          <div className="absolute inset-0 grid grid-cols-4 gap-1 opacity-20 p-4">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className={`rounded-sm ${i % 3 === 0 ? 'bg-primary' : 'bg-surface-elevated'}`} />
            ))}
          </div>
        );
      case 'analysis':
        return (
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <BarChart3 className="w-32 h-32 text-primary" />
          </div>
        );
      default:
        return (
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Cpu className="w-32 h-32" />
          </div>
        );
    }
  };

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'analog': return <Activity className="w-5 h-5 text-primary" />;
      case 'rf': return <Radio className="w-5 h-5 text-accent" />;
      case 'embedded': return <Cpu className="w-5 h-5 text-green-400" />;
      case 'analysis': return <BarChart3 className="w-5 h-5 text-blue-400" />;
      default: return <Zap className="w-5 h-5 text-yellow-400" />;
    }
  };

  return (
    <section id="projects" className="min-h-screen py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Selected <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of technical rigor in chip design, RF engineering, and embedded systems.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-primary text-primary-foreground shadow-glow'
                : 'bg-surface border border-white/5 text-muted-foreground hover:text-foreground hover:border-primary/30'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Category Description Banner */}
        <AnimatePresence mode="wait">
          {activeCategory !== 'All' && categoryDescriptions[activeCategory] && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center mb-12 max-w-3xl mx-auto"
            >
              <div className="inline-block px-6 py-3 bg-surface-elevated/50 backdrop-blur-sm border border-white/5 rounded-xl text-muted-foreground text-sm leading-relaxed">
                {categoryDescriptions[activeCategory]}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid */}
        <AnimatePresence mode='popLayout'>
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-white/10 rounded-3xl bg-surface/20"
            >
              <div className="w-16 h-16 bg-surface-elevated rounded-full flex items-center justify-center mb-4">
                <Layers className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Work in Progress</h3>
              <p className="text-muted-foreground">Projects for this category are currently being documented.</p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
                >
                  {/* Visual Header */}
                  <div className="h-48 relative bg-surface-elevated overflow-hidden">
                    {renderProjectVisual(project.type)}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="p-2 bg-surface/50 backdrop-blur-md rounded-lg border border-white/10">
                        {getProjectIcon(project.type)}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{project.category}</p>
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>

                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.techStack.map(tech => (
                        <span key={tech} className="px-2 py-1 text-[10px] font-mono bg-white/5 rounded border border-white/5 text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

