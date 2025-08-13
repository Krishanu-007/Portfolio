import { motion } from 'framer-motion';
import { Calendar, MapPin, Satellite, Radio } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-8"> {/* Reduced px on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey in cutting-edge technology and research
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto overflow-x-hidden"> {/* Prevent cut-off */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-8 top-8 bottom-8 w-0.5 bg-gradient-primary"></div>
            
            {/* Experience Card */}
            <div className="relative pl-12 sm:pl-20"> {/* Smaller padding on mobile */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 sm:p-8 rounded-2xl hover-card glow-card"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 sm:left-6 top-8 w-4 h-4 bg-gradient-primary rounded-full border-4 border-surface-elevated animate-glow-pulse"></div>
                
                <div className="flex flex-col sm:flex-row items-start sm:space-x-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0">
                    <Satellite className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-2">
                          Research Intern
                        </h3>
                        <p className="text-lg text-primary font-medium mb-1">
                          Space Applications Centre, ISRO
                        </p>
                        <div className="flex flex-wrap gap-4 text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>March 2025 – May 2025</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>Ahmedabad, India</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        Conducted advanced research on microwave microstrip filters for C and S band 
                        applications as part of ISRO's satellite communication systems development. 
                        Contributed to critical components used in space-based communication infrastructure.
                      </p>
                      
                      {/* Key Contributions */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
                          <Radio className="w-5 h-5 text-primary" />
                          <span>Key Contributions</span>
                        </h4>
                        <div className="space-y-3">
                          {[
                            "Designed and optimized microstrip bandpass filter @ 3.825GHz with a Fractional Bandwidth of 62.7% ",
                            "Utilized advanced simulation tools for electromagnetic analysis and performance optimization",
                            "Collaborated with senior researchers on filter topology selection and implementation",
                            "Documented research findings and contributed to technical reports for space applications"
                          ].map((contribution, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground leading-relaxed">{contribution}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Technologies Used */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies & Tools</h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Advanced Design System (ADS)",
                            "Microstrip Design",
                            "Stub Loaded Filters",
                            "RF Simulation",
                            "Electromagnetic Analysis",
                            "S-Parameter Analysis"
                          ].map((tech, index) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                              viewport={{ once: true }}
                              className="skill-tag"
                            >
                              {tech}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Impact */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="p-4 bg-surface-elevated rounded-lg border border-border"
                      >
                        <h5 className="font-medium text-foreground mb-2">Research Impact</h5>
                        <p className="text-sm text-muted-foreground">
                          Contributed to the development of next-generation satellite communication 
                          systems, advancing India's space technology capabilities in microwave 
                          frequency applications.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

