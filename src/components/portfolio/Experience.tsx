import { motion } from 'framer-motion';
import { Calendar, MapPin, Radio, Satellite, Cpu, Zap } from 'lucide-react';

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
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My path through the semiconductor and research landscape.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Circuit Line (Vertical) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-accent/50 to-transparent rounded-full transform -translate-x-1/2">
            <div className="absolute top-0 left-0 w-full h-full bg-primary/20 blur-sm" />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  {/* Timeline Node (Center) */}
                  <div className="absolute left-4 md:left-1/2 top-0 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-8 h-8 bg-surface border-4 border-primary rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] z-20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Content Card Side */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right">
                    {/* Empty spacer for alignment if needed, but styling handles layout */}
                  </div>

                  {/* Actual Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-12 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:pl-0'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-card p-6 md:p-8 rounded-2xl border-l-4 border-l-primary relative group"
                    >
                      {/* Connector Line (Horizontal) - Visible on Desktop */}
                      <div className={`hidden md:block absolute top-4 w-12 h-0.5 bg-primary/50 ${index % 2 === 0 ? '-left-12' : '-right-12'
                        }`} />

                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                          <h4 className="text-lg text-primary font-medium">{exp.company}</h4>
                        </div>
                        <div className="p-3 bg-surface-elevated rounded-xl border border-white/5">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full">
                          <Calendar className="w-4 h-4" /> {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full">
                          <MapPin className="w-4 h-4" /> {exp.location}
                        </span>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        {exp.contributions.map((item, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground/90">
                            <Zap className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t, i) => (
                          <span key={i} className="text-xs font-mono px-2 py-1 bg-primary/10 text-primary rounded border border-primary/20">
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

