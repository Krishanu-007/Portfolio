import { motion } from 'framer-motion';
import { Cpu, Waves, CircuitBoard, Layers, GitBranch, Code } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      icon: Cpu,
      title: "Digital Design & RTL",
      description: "Advanced digital circuit design and RTL development",
      skills: [
        { name: "Verilog HDL", description: "Hardware description language for digital circuits" },
        { name: "SystemVerilog", description: "Advanced verification and design language" },
        { name: "RISC-V Architecture", description: "Open-source instruction set architecture" },
        { name: "Processor Design", description: "CPU microarchitecture and pipeline design" },
        { name: "Pipeline Optimization", description: "Performance enhancement techniques" }
      ]
    },
    {
      icon: Waves,
      title: "Analog & RF Design",
      description: "Mixed-signal and RF circuit design expertise",
      skills: [
        { name: "Circuit Analysis", description: "Analog circuit modeling and simulation" },
        { name: "Microwave Filters", description: "RF filter design and optimization" },
        { name: "ADS Simulation", description: "Advanced Design System for RF circuits" },
        { name: "Microstrip Filters", description: "Compact microwave filter structures" },
        { name: "Mixed-Signal Design", description: "Analog and digital circuit integration" }
      ]
    },
    {
      icon: CircuitBoard,
      title: "EDA Tools & Platforms",
      description: "Comprehensive toolchain for chip development",
      skills: [
        { name: "OpenROAD", description: "Open-source RTL-to-GDSII toolchain" },
        { name: "OpenLane", description: "Automated digital ASIC flow" },
        { name: "Magic Layout", description: "VLSI layout editor and DRC tool" },
        { name: "Xschem", description: "Schematic capture and simulation" },
        { name: "Ngspice", description: "Circuit simulation and analysis" }
      ]
    },
    {
      icon: Layers,
      title: "PDK & Toolchains",
      description: "Process design kit and open source tool for designing and testing",
      skills: [
        { name: "sky130", description: "FOSS PDK by Google and Skywater techonologies (130 nm)" },
        { name: "IceStorm", description: "An open-source toolchain for Lattice iCE40 FPGAs" },
        { name: "gf180mcu", description: "FOSS PDK by Google and Global Foundries (180 nm)" }
      ]
    },
    {
      icon: GitBranch,
      title: "Development & Integration",
      description: "Modern development practices and system integration",
      skills: [
        { name: "Git/GitHub", description: "Version control and collaboration" },
        { name: "FPGA Development", description: "Programmable logic implementation" },
        { name: "iCE40HX8K", description: "Low-power FPGA development" },
        { name: "Alchitry Cu", description: "FPGA development board expertise" },
        { name: "Hardware Debugging", description: "System-level troubleshooting" }
      ]
    },
    {
      icon: Code,
      title: "Programming Languages & Scripting",
      description: "Software development and automation for semiconductor workflows",
      skills: [
        { name: "C", description: "Low-level programming for embedded and performance-critical systems" },
        { name: "C++", description: "Object-oriented and high-performance applications" },
        { name: "TCL", description: "EDA scripting and automation" },
        { name: "Python", description: "Automation, data analysis, and tool integration" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="min-h-screen py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-x-0 top-40 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-40 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise across the complete semiconductor design spectrum, from architecture to silicon.
          </p>
        </motion.div>

        {/* Floating Core Technologies */}
        <div className="mb-24 relative">
          <h3 className="text-sm font-semibold text-center mb-10 text-muted-foreground uppercase tracking-widest">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-8 max-w-5xl mx-auto">
            {[
              "Verilog", "SystemVerilog", "RISC-V", "OpenROAD", "OpenLane", "sky130", "gf180mcu", "Magic", "Ngspice", "Xschem", "Klayout", "Netgen", "iCE40", "Alchitry", "Git", "FPGA", "Keysight ADS", "Yosys", "Arachne-pnr", "C/C++", "TCL", "Python"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 20px var(--primary-glow)",
                  borderColor: "hsl(var(--primary))"
                }}
                className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-default bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-foreground/90 hover:from-primary/20 hover:to-accent/20"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl overflow-hidden hover-card glow-card group border border-white/5"
              >
                {/* Skill Category Header */}
                <div className="relative h-28 bg-gradient-to-br from-surface-elevated to-surface flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-surface rounded-xl flex items-center justify-center shadow-lg border border-white/10 z-10"
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  {/* Decorative backglow */}
                  <div className="absolute w-32 h-32 bg-primary/20 blur-3xl rounded-full -top-10 -right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Skill Category Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 flex items-center">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 h-10 line-clamp-2">{category.description}</p>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-start p-2 rounded-lg hover:bg-white/5 transition-colors group/skill"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/skill:bg-primary transition-colors mr-3 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-foreground/90 group-hover/skill:text-primary transition-colors">
                            {skill.name}
                          </div>

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
