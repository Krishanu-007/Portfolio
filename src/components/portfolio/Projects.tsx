import { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, Github } from 'lucide-react';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = [
    "All",
    "RISC-V Processors",
    "FPGA Development",
    "RTL Design",
    "Analog & Mixed-Signal Design",
    "RF & Microwave Design",
    "Embedded & IoT Systems"
  ];

  const projects = [
      {
      title: "Design and Analysis of 3 stage Ring Oscillator",
      description: "Creating a 3 stage Ring Oscillator with self designed inverter, and to analyse different aspects of it",
      techStack: ["SKY130", "Xschem", "Ngspice", "Magic", "Netgen"],
      github: "https://github.com/Krishanu-007/ring_oscillator_sky130.git",
      category: "Analog & Mixed-Signal Design",
      status: "In Progress"
    },
    {
      title: "Design and Analysis of CMOS Inverter (sky130)",
      description: "Implemented a CMOS inverter using an open-source sky130PDK, focusing on transient, DC, and switching characteristics for performance evaluation. Finally designing the Layout for the same",
      techStack: ["SKY130", "Xschem", "Ngspice", "Magic", "Netgen"],
      github: "https://github.com/Krishanu-007/cmos_inverter_sky130.git",
      category: "Analog & Mixed-Signal Design",
      status: "Completed"
    },
    {
      title: "Transistor Analysis using SKY130 PDK",
      description: "Analyzed NMOS and PMOS devices using the SKY130 PDK, exploring I–V characteristics, threshold voltage extraction, and process corner variations. Also doing the Layout for the same",
      techStack: ["SKY130", "Xschem", "Ngspice", "Magic"],
      github: "https://github.com/Krishanu-007/transistor_analysis_sky130.git",
      category: "Analog & Mixed-Signal Design",
      status: "Completed"
    },
    {
      title: "Design of Microstrip Filter",
      description: "Designed and simulated a microstrip filter for RF applications, optimizing bandwidth and insertion loss using EM simulation tools. This work was done during my internship at ISRO.",
      techStack: ["ADS", "Momentum", "RF Design"],
      github: "https://github.com/Krishanu-007/compact-uwb-bpf-3.825GHz.git",
      category: "RF & Microwave Design",
      status: "Completed"
    },
    {
      title: "A9G and ESP32 based Anti-Collision System",
      description: "Developed an embedded system using the A9G GSM/GPS module and ESP32 for real-time vehicle collision detection and location tracking.",
      techStack: ["ESP32", "A9G", "C++", "Arduino"],
      github: "https://github.com/Krishanu-007/Final-Year-Project-2k25.git",
      category: "Embedded & IoT Systems",
      status: "Completed"
    }
  ];

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions in VLSI design and embedded systems
          </p>
        </motion.div>

        {/* Project Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">Project Categories</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'btn-glow text-primary-foreground'
                    : 'glass-card border border-border hover:border-primary/30 hover-card'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid or Coming Soon */}
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-full flex flex-col items-center justify-center py-32"
          >
            <span className="text-6xl mb-4">🚧</span>
            <h3 className="text-4xl font-bold text-foreground mb-2">Coming Soon</h3>
            <p className="text-lg text-muted-foreground">
              Projects in this category are under development.
            </p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl overflow-hidden hover-card glow-card group"
              >
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-primary/10 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center"
                  >
                    <FolderOpen className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-surface-elevated rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-surface-elevated rounded-lg hover:bg-primary/20 transition-colors inline-block"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <span className={`text-sm font-semibold ${
                      project.status === "Completed" ? "text-green-500" : "text-yellow-500"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

