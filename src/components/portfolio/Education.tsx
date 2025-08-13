import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, School } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-8"> {/* px-4 for mobile */}
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in electronics and communication
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          <EducationCard
            title="Bachelor's in Electronics and Communication Engineering"
            institution="Academy of Technology"
            year="2025"
            location="West Bengal, India"
            description="Comprehensive study of electronics and communication systems with specialization in VLSI design and embedded systems. Focused on digital signal processing, analog circuits, and microprocessor programming."
            subjects={[
              "Digital Signal Processing",
              "CMOS VLSI Design",
              "Microprocessor Systems",
              "Analog Circuit Design",
              "Communication Systems",
              "Embedded Systems"
            ]}
            icon={GraduationCap}
            achievementTitle="Academic Focus"
            achievementDesc="Focused in VLSI design methodologies, embedded systems and digital system implementation"
            delay={0.2}
          />

          <EducationCard
            title="ISC (Science Stream)"
            institution="Holy Rock School"
            year="2019"
            location="West Bengal, India"
            description="Completed Indian School Certificate (ISC) in the Science stream with a focus on Physics, Chemistry, Mathematics, and Computer Science."
            subjects={[
              "Physics",
              "Chemistry",
              "Mathematics",
              "Computer Science",
              "English",
              "Environmental Education"
            ]}
            icon={BookOpen}
            delay={0.3}
          />

          <EducationCard
            title="ICSE"
            institution="Holy Rock School"
            year="2017"
            location="West Bengal, India"
            description="Completed Indian Certificate of Secondary Education (ICSE) with emphasis on Science, Mathematics, and Computer Applications."
            subjects={[
              "Science",
              "Mathematics",
              "Computer Applications",
              "English",
              "History & Civics",
              "Geography"
            ]}
            icon={School}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

const EducationCard = ({ title, institution, year, location, description, subjects, icon: Icon, achievementTitle, achievementDesc, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline Line */}
      <div className="absolute left-4 sm:left-8 top-8 bottom-8 w-0.5 bg-gradient-primary"></div>

      {/* Card */}
      <div className="relative pl-14 sm:pl-20"> {/* Less padding on mobile */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-card p-6 sm:p-8 rounded-2xl hover-card glow-card"
        >
          {/* Timeline Dot */}
          <div className="absolute left-2 sm:left-6 top-8 w-4 h-4 bg-gradient-primary rounded-full border-4 border-surface-elevated"></div>

          <div className="flex flex-col sm:flex-row items-start sm:space-x-6 space-y-4 sm:space-y-0">
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
              <Icon className="w-8 h-8 text-primary-foreground" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-lg text-primary font-medium">{institution}</p>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground mt-2 lg:mt-0">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-justify">{description}</p>

                {/* Key Subjects */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Subjects</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {subjects.map((subject, index) => (
                      <motion.div
                        key={subject}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{subject}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {achievementTitle && achievementDesc && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 bg-surface-elevated rounded-lg border border-border"
                  >
                    <Award className="w-6 h-6 text-primary" />
                    <div>
                      <h5 className="font-medium text-foreground">{achievementTitle}</h5>
                      <p className="text-sm text-muted-foreground">{achievementDesc}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

