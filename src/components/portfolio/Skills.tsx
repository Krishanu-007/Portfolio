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
        staggerChildren: 0.2
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
    <section id="skills" className="min-h-screen py-20">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise across the complete semiconductor design spectrum
          </p>
        </motion.div>

        {/* Core Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Verilog","System Verilog", "RISC-V", "OpenROAD", "OpenLane","sky130","gf180mcu", "Magic", "Ngspice","Xschem","Klayout","Netgen", "iCE40", "Alchitry", "Git", "FPGA","Keysight ADS","Yosys","Arachne-pnr","C", "C++", "TCL", "Python"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="glass-card px-6 py-3 rounded-full text-sm font-medium hover-card border border-border hover:border-primary/30 transition-colors"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

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
                className="glass-card rounded-2xl overflow-hidden hover-card glow-card group"
              >
                {/* Skill Category Header */}
                <div className="relative h-32 bg-gradient-primary/10 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center"
                  >
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Skill Category Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{category.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{category.description}</p>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center p-3 bg-surface-elevated rounded-lg hover:bg-primary/10 transition-colors group"
                      >
                        <div className="flex-1">
                          <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {skill.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {skill.description}
                          </div>
                        </div>
                      </motion.div>
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

