import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, School, Zap } from 'lucide-react';

export const Education = () => {
  const educationList = [
    {
      degree: "Bachelor's in Electronics and Communication Engineering",
      institution: "Academy of Technology",
      year: "2025",
      location: "West Bengal, India",
      description: "Comprehensive study of electronics and communication systems with specialization in VLSI design and embedded systems. Focused on digital signal processing, analog circuits, and microprocessor programming.",
      subjects: [
        "Digital Signal Processing",
        "CMOS VLSI Design",
        "Microprocessor Systems",
        "Analog Circuit Design",
        "Communication Systems",
        "Embedded Systems"
      ],
      icon: GraduationCap,
      achievementTitle: "Academic Focus",
      achievementDesc: "Focused in VLSI design methodologies, embedded systems and digital system implementation"
    },
    {
      degree: "ISC (Science Stream)",
      institution: "Holy Rock School",
      year: "2019",
      location: "West Bengal, India",
      description: "Completed Indian School Certificate (ISC) in the Science stream with a focus on Physics, Chemistry, Mathematics, and Computer Science.",
      subjects: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Computer Science"
      ],
      icon: BookOpen
    },
    {
      degree: "ICSE",
      institution: "Holy Rock School",
      year: "2017",
      location: "West Bengal, India",
      description: "Completed Indian Certificate of Secondary Education (ICSE) with emphasis on Science, Mathematics, and Computer Applications.",
      subjects: [
        "Science",
        "Mathematics",
        "Computer Applications"
      ],
      icon: School
    }
  ];

  return (
    <section id="education" className="min-h-screen py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Academic <span className="text-gradient">Foundation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a strong technical base in electronics and communication
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Circuit Line (Vertical) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-accent/50 to-transparent rounded-full transform -translate-x-1/2">
            <div className="absolute top-0 left-0 w-full h-full bg-primary/20 blur-sm" />
          </div>

          <div className="space-y-16">
            {educationList.map((edu, index) => {
              const Icon = edu.icon;
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

                  {/* Spacer Side */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12"></div>

                  {/* Content Card Side */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-12 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:pl-0'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-card p-6 md:p-8 rounded-2xl border-l-4 border-l-primary relative group"
                    >
                      {/* Connector Line (Horizontal) */}
                      <div className={`hidden md:block absolute top-4 w-12 h-0.5 bg-primary/50 ${index % 2 === 0 ? '-left-12' : '-right-12'
                        }`} />

                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1 leading-tight">{edu.degree}</h3>
                          <h4 className="text-base text-primary font-medium mt-1">{edu.institution}</h4>
                        </div>
                        <div className="p-3 bg-surface-elevated rounded-xl border border-white/5 flex-shrink-0 ml-4">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full">
                          <Calendar className="w-4 h-4" /> {edu.year}
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full">
                          <MapPin className="w-4 h-4" /> {edu.location}
                        </span>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                        {edu.description}
                      </p>

                      {/* Key Subjects */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-primary" /> Key Subjects
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.subjects.map((subj, i) => (
                            <span key={i} className="text-xs font-mono px-2 py-1 bg-white/5 text-muted-foreground rounded border border-white/10 hover:border-primary/30 transition-colors">
                              {subj}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievement Section if present */}
                      {edu.achievementTitle && (
                        <div className="flex items-start gap-3 p-4 bg-surface-elevated/50 rounded-xl border border-white/5">
                          <Award className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h5 className="text-sm font-medium text-foreground">{edu.achievementTitle}</h5>
                            <p className="text-xs text-muted-foreground mt-1">{edu.achievementDesc}</p>
                          </div>
                        </div>
                      )}

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

