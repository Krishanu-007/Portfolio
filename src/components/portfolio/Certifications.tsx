import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    id: 1,
    title: "LFD110: Introduction to RISC-V",
    issuer: "The Linux Foundation",
    date: "July 2025",
    description:
      "Foundational course on the RISC-V open instruction set architecture, covering its features, ecosystem, and development workflow.",
    credentialId: "",
    verifyUrl:
      "https://www.credly.com/badges/741e1a26-fa49-44a8-b3d3-17f818769908/linked_in_profile",
  },
  {
    id: 2,
    title: "Postman API Fundamentals Student Expert",
    issuer: "Canvas Credentials (Badgr)",
    date: "May 2024",
    description:
      "Certification on API fundamentals, REST principles, and Postman tool usage for API design, testing, and automation.",
    credentialId: "6654872d1c2d3f4f3b376e46",
    verifyUrl:
      "https://api.badgr.io/public/assertions/__JCqFMQQTC-ActUYzCupA",
  },
  {
    id: 3,
    title: "Python Basics",
    issuer: "University of Michigan",
    date: "April 2022",
    description:
      "Introductory Python programming course focusing on syntax, data structures, control flow, and problem-solving.",
    credentialId: "NQ64FFK9FYBZ",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/records/NQ64FFK9FYBZ",
  },
  {
    id: 4,
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    date: "August 2024",
    description:
      "Comprehensive course on supervised learning, covering regression, classification, and model evaluation techniques.",
    credentialId: "6VTO0VPY18M0",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/records/6VTO0VPY18M0",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">
            Certifications & Professional Development
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning and professional certifications to stay at the forefront of VLSI and embedded systems technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-morphism hover-card group h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 rounded-lg bg-surface-elevated border border-border group-hover:border-primary/30 transition-colors">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-medium">{cert.issuer}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="pt-4 border-t border-border/30">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Credential ID:</span>{" "}
                        {cert.credentialId || "N/A"}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs hover:bg-primary/10 hover:text-primary hover:border-primary/30"
                        asChild
                      >
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Verify
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            More certifications and professional development opportunities are continuously being pursued to enhance expertise in cutting-edge technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

