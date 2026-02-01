import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  User,
  GraduationCap,
  Briefcase,
  Code,
  FolderOpen,
  Mail,
  Award,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  X,
  Menu
} from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
  mobileNavOpen?: boolean;
  setMobileNavOpen?: (open: boolean) => void;
}

const navigationItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'publications', label: 'Publications', icon: BookOpen },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const Navigation = ({
  activeSection,
  onSectionClick,
  mobileNavOpen = false,
  setMobileNavOpen = () => { }
}: NavigationProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileNavOpen(false)}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: mobileNavOpen || window.innerWidth >= 768 ? 0 : -300, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed left-0 top-0 h-full bg-surface/30 backdrop-blur-xl border-r border-white/10 z-50 overflow-y-auto transition-all duration-300
          ${collapsed ? 'w-20' : 'w-72'}
          ${window.innerWidth < 768 ? 'md:hidden shadow-2xl' : 'hidden md:block'}`}
        style={{
          transform: window.innerWidth < 768 && !mobileNavOpen ? 'translateX(-100%)' : 'translateX(0)',
        }}
      >
        {/* Mobile close button */}
        <div className="md:hidden flex justify-end p-4">
          <button onClick={() => setMobileNavOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Profile Section */}
        <div className="p-6 border-b border-white/5 flex flex-col items-center relative group">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-br from-primary to-accent mb-4 relative z-10"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-surface">
              <img
                src="/profile.jpg"
                alt="Krishanu B."
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {!collapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center relative z-10"
            >
              <h3 className="font-semibold text-foreground tracking-tight">Krishanu B.</h3>
              <p className="text-xs text-primary font-medium mt-1 uppercase tracking-wider">Engineer</p>
            </motion.div>
          )}

          {/* Collapse Button (desktop only) */}
          <motion.button
            onClick={() => setCollapsed(!collapsed)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-primary text-primary-foreground p-2 rounded-full shadow-lg hidden md:flex items-center justify-center z-50 hover:bg-primary/90 transition-colors"
          >
            {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Navigation Items */}
        <div className="p-4 space-y-1">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <motion.button
                key={item.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                onClick={() => onSectionClick(item.id)}
                className={`
                  w-full flex items-center ${collapsed ? 'justify-center' : 'space-x-3'} px-4 py-3 rounded-lg relative group overflow-hidden transition-all duration-300
                  ${isActive ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-gradient-primary opacity-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}

                {/* Hover Effect Background */}
                {!isActive && (
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}

                <div className="relative z-10 flex items-center">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-primary-foreground' : 'group-hover:text-primary transition-colors'}`} />
                  {!collapsed && (
                    <span className={`ml-3 font-medium text-sm ${isActive ? 'text-primary-foreground' : ''}`}>
                      {item.label}
                    </span>
                  )}
                </div>

                {/* Active Indicator Line (Left) */}
                {isActive && !collapsed && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-white rounded-r-full"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Footer / Socials (Optional placeholder) */}
        {!collapsed && (
          <div className="p-6 mt-auto border-t border-white/5">
            <p className="text-xs text-muted-foreground/50 text-center">
              © 2024 Krishanu
            </p>
          </div>
        )}
      </motion.nav>
    </>
  );
};
