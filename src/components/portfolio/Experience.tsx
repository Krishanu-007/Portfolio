import { motion } from 'framer-motion';
import { Calendar, MapPin, Satellite, Zap, Building2 } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/utils/animations';
import { CircuitBackground } from '../ui/CircuitBackground';

export const Experience = () => {
  const experiences = [
    {
      title: "Research Intern",
      company: "Space Applications Centre, ISRO",
      period: "March 2025 – May 2025",
      location: "Ahmedabad, India",
      description: "Conducted advanced research on microwave microstrip filters for C and S band applications as part of ISRO's satellite communication systems development.",
      contributions: [
        "Designed and optimized microstrip bandpass filter @ 3.825GHz with a Fractional Bandwidth of 62.7%",
        "Utilized advanced simulation tools for electromagnetic analysis and performance optimization",
        "Collaborated with senior researchers on filter topology selection and implementation",
        "Documented research findings and contributed to technical reports for space applications"
      ],
      tech: [
        "Advanced Design System (ADS)",
        "Microstrip Design",
        "Stub Loaded Filters",
      ],
      icon: Satellite
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-24 relative overflow-hidden">
      <CircuitBackground />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My path through the semiconductor and research landscape.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className="relative"
              >
                {/* Main Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 relative group overflow-hidden"
                >
                  {/* Decorative gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Header Section */}
                  <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-white/10 flex-shrink-0"
                      >
                        <Icon className="w-8 h-8 text-primary" />
                      </motion.div>

                      {/* Title & Company */}
                      <div>
                        <h3 className="text-3xl font-bold text-foreground mb-2">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-xl text-primary font-medium mb-4">
                          <Building2 className="w-5 h-5" />
                          <span>{exp.company}</span>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="flex items-center gap-1.5 px-4 py-2 bg-surface-elevated rounded-full border border-white/5">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">{exp.period}</span>
                          </span>
                          <span className="flex items-center gap-1.5 px-4 py-2 bg-surface-elevated rounded-full border border-white/5">
                            <MapPin className="w-4 h-4 text-accent" />
                            <span className="text-muted-foreground">{exp.location}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg relative z-10">
                    {exp.description}
                  </p>

                  {/* Key Contributions */}
                  <div className="mb-8 relative z-10">
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-accent" />
                      Key Contributions
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {exp.contributions.map((item, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ x: 4 }}
                          className="flex items-start gap-3 p-4 bg-surface-elevated/50 rounded-xl border border-white/5 hover:border-primary/20 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground/90 leading-relaxed">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="relative z-10">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="text-sm font-mono px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-50" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
