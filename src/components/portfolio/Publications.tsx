import { motion } from "framer-motion";
import { BookOpen, Calendar, ExternalLink, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CircuitBackground } from "../ui/CircuitBackground";

const publications = [
  {
    id: 1,
    title:
      "Performance Enhancement of Lead-Free MASnI₃ Based Perovskite Solar Cells Through Charge Transport Layer Optimization",
    authors: [
      "Subham Pramanik",
      "Krishanu Bandyopadhyay",
      "Kanishka Majumder",
      "N.R. Das"
    ],
    conference:
      "4th International Conference on Computer, Communication, Control, and Information Technology (C3IT-2024)",
    date: "2024",
    status: "Published",
    type: "Conference Paper",
    abstract:
      "This paper presents performance optimization techniques for lead-free MASnI₃ based perovskite solar cells by tuning charge transport layers, achieving significant efficiency improvements.",
    keywords: [
      "Lead-Free Perovskite",
      "MASnI₃",
      "Solar Cells",
      "Charge Transport Layer Optimization",
      "SCAPS-1D",
      "NiOx",
      "ZnO"
    ],
    doi: "10.1109/C3IT60531.2024.10829436",
    link: "https://doi.org/10.1109/C3IT60531.2024.10829436"
  }
];

const statusColors = {
  Published: "bg-gradient-primary text-primary-foreground",
  Accepted: "bg-surface-accent text-accent",
  "Under Review": "bg-muted text-muted-foreground",
  "In Preparation": "bg-border text-foreground"
};

const typeColors = {
  "Journal Article": "bg-primary/10 text-primary border-primary/20",
  "Conference Paper": "bg-accent/10 text-accent border-accent/20"
};

export const Publications = () => {
  return (
    <section id="publications" className="py-20 px-6 relative overflow-hidden">
      <CircuitBackground />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Publications & <span className="text-gradient">Research</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic contributions to renewable energy and photovoltaic device
            optimization.
          </p>
        </motion.div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card hover-card glow-card group rounded-2xl border border-white/5">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-surface-elevated border border-border group-hover:border-primary/30 transition-colors">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <Badge
                        className={`${typeColors[
                          pub.type as keyof typeof typeColors
                        ]} border`}
                      >
                        {pub.type}
                      </Badge>
                    </div>
                    <Badge
                      className={`${statusColors[pub.status as keyof typeof statusColors]
                        } border-0`}
                    >
                      {pub.status}
                    </Badge>
                  </div>

                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors leading-tight">
                    {pub.title}
                  </CardTitle>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{pub.authors.join(", ")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{pub.conference}</span>
                      <span>•</span>
                      <span>{pub.date}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {pub.abstract}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {pub.keywords.map((keyword) => (
                      <Badge
                        key={keyword}
                        variant="secondary"
                        className="skill-tag text-xs"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/30">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      {pub.doi !== "TBD" && (
                        <div className="text-sm text-muted-foreground break-all">
                          <span className="font-medium">DOI:</span> {pub.doi}
                        </div>
                      )}
                      {pub.link && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs hover:bg-primary/10 hover:text-primary hover:border-primary/30 w-fit"
                          onClick={() => window.open(pub.link, "_blank")}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View Paper
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

