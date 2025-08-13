import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './portfolio/Navigation';
import { Hero } from './portfolio/Hero';
import { About } from './portfolio/About';
import { Education } from './portfolio/Education';
import { Experience } from './portfolio/Experience';
import { Skills } from './portfolio/Skills';
import { Projects } from './portfolio/Projects';
import { Publications } from './portfolio/Publications';
import { Certifications } from './portfolio/Certifications';
import { Contact } from './portfolio/Contact';
import { Menu } from 'lucide-react';

export const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Handle section visibility
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'publications', 'certifications', 'contact'];
      const offset = 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileNavOpen(false); // close nav on mobile after click
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile hamburger */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="bg-primary text-primary-foreground p-2 rounded-md shadow-lg"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />

      {/* Main Content */}
      <main className="transition-all duration-300 md:ml-64">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Hero />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Publications />
            <Certifications />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

