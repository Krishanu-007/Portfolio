import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderOpen, Github, ArrowUpRight, Lock, Code2, Cpu, Radio, Layers, Activity, Zap, Box, BarChart3 } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/utils/animations';
import { CircuitBackground } from '../ui/CircuitBackground';
import { ProjectModal } from '../ui/ProjectModal';

interface ProjectDetail {
  title: string;
  description: string;
  detailedPoints: string[];
  techStack: string[];
  github?: string;
  category: string;
  status: string;
  type: string;
  imagePath: string;
}

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const projects: ProjectDetail[] = [
    {
      title: "Transistor Modeling using SKY130 PDK",
      description: "Comprehensive characterization and modeling of NMOS/PMOS transistors using the SKY130 open-source PDK.",
      detailedPoints: [
        "Simulated 1.8 V NMOS/PMOS transistors in SKY130 using Xschem and Ngspice",
        "Extracted key parameters: Vth, Ids, gm, and rds from IV sweeps",
        "NMOS threshold voltage: 646 mV, PMOS threshold voltage: 544 mV",
        "Performed DC, AC, and transient analysis for device characterization"
      ],
      techStack: ["SKY130", "Xschem", "Ngspice", "Semiconductor Physics"],
      github: "https://github.com/Krishanu-007/transistor_analysis_sky130.git",
      category: "Analog & Mixed-Signal Design",
      status: "Completed",
      type: "analysis",
      imagePath: "/projects/transistor-modeling.png"
    },
    {
      title: "CMOS Inverter Design and Characterization",
      description: "Complete design flow of a CMOS inverter from schematic to layout using SKY130 PDK with comprehensive performance analysis.",
      detailedPoints: [
        "Designed and verified CMOS inverter using Xschem, Ngspice, and Magic",
        "Achieved DRC/LVS-clean layout with proper design rule compliance",
        "Observed 2.5× delay increase (37.5→95.7 ps) post-layout due to parasitics",
        "Power reduction from 17 µW to 4.96 µW after layout optimization",
        "Analyzed noise margins, propagation delay, and power-delay product"
      ],
      techStack: ["SKY130", "Xschem", "Ngspice", "Magic", "Netgen"],
      github: "https://github.com/Krishanu-007/cmos_inverter_sky130.git",
      category: "Analog & Mixed-Signal Design",
      status: "Completed",
      type: "analog",
      imagePath: "/projects/cmos-inverter.png"
    },
    {
      title: "3-Stage CMOS Ring Oscillator",
      description: "Design and implementation of a 3-stage ring oscillator in SKY130 with complete parasitic extraction and verification.",
      detailedPoints: [
        "Designed 3-stage ring oscillator in SKY130 (1.8 V) using Xschem, Ngspice, and Magic",
        "Complete DRC/LVS/PEX verification workflow",
        "Observed frequency drop from 7.06 GHz to 6.68 GHz due to parasitic loading",
        "Power consumption approximately 482 µW",
        "Analyzed phase noise and jitter characteristics"
      ],
      techStack: ["SKY130", "Xschem", "Ngspice", "Magic", "Netgen"],
      github: "https://github.com/Krishanu-007/ring_oscillator_sky130.git",
      category: "Analog & Mixed-Signal Design",
      status: "Completed",
      type: "analog",
      imagePath: "/projects/ring-oscillator.png"
    },
    {
      title: "Compact UWB Microstrip Bandpass Filter",
      description: "Ultra-wideband bandpass filter design for C and S-band satellite communication systems at ISRO.",
      detailedPoints: [
        "Designed compact ultra-wideband microstrip bandpass filter for C and S-band applications",
        "Optimized filter design with Chebyshev response and open-stub topology",
        "Achieved ~1.75 dB insertion loss and >17 dB return loss",
        "Harmonic suppression >25 dBc within strict 1×1 inch layout constraints",
        "Center frequency: 3.825 GHz with 62.7% fractional bandwidth",
        "Simulated using Keysight ADS with Momentum EM analysis"
      ],
      techStack: ["Keysight ADS", "Momentum", "Microstrip Design", "RF Design"],
      github: "https://github.com/Krishanu-007/compact-uwb-bpf-3.825GHz.git",
      category: "RF & Microwave Design",
      status: "Completed",
      type: "rf",
      imagePath: "/projects/microstrip-filter.png"
    },
    {
      title: "GPS-Based Anti-Collision System",
      description: "Real-time vehicle tracking and collision prevention system using ESP32 and GPS technology.",
      detailedPoints: [
        "Built real-time vehicle tracking system using ESP32 and A9G GSM/GPRS modules",
        "Achieved 7 m GPS accuracy with 10 s refresh rate",
        "Implemented decentralized database system for data storage",
        "Real-time collision alerts and vehicle-to-vehicle communication",
        "Low-power design for extended battery operation"
      ],
      techStack: ["ESP32", "A9G GSM/GPS", "C++", "IoT", "Embedded Systems"],
      github: "https://github.com/Krishanu-007/Final-Year-Project-2k25.git",
      category: "Embedded & IoT Systems",
      status: "Completed",
      type: "embedded",
      imagePath: "/projects/anti-collision.png"
    }
  ];

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  const handleProjectClick = (project: ProjectDetail) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

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
      <CircuitBackground />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.title}
                  variants={staggerItem}
                  whileHover={{ y: -6 }}
                  onClick={() => handleProjectClick(project)}
                  className="group relative bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors cursor-pointer"
                >
                  {/* Visual Header */}
                  <div className="h-48 relative bg-surface-elevated overflow-hidden">
                    <motion.div
                      className="absolute inset-0 z-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      {renderProjectVisual(project.type)}
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                    <motion.div
                      className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute bottom-4 left-4 z-10">
                      <div className="p-2 bg-surface/50 backdrop-blur-md rounded-lg border border-white/10">
                        {getProjectIcon(project.type)}
                      </div>
                    </div>
                    {/* Click to view indicator */}
                    <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-foreground flex items-center gap-1">
                        <ArrowUpRight className="w-3 h-3" />
                        View Details
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
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>

                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.techStack.slice(0, 4).map(tech => (
                        <span key={tech} className="px-2 py-1 text-[10px] font-mono bg-white/5 rounded border border-white/5 text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-1 text-[10px] font-mono bg-white/5 rounded border border-white/5 text-muted-foreground">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};
