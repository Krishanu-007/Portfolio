import { useState } from 'react';
import { motion } from 'framer-motion';
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
  X
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
  setMobileNavOpen = () => {}
}: NavigationProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: mobileNavOpen || window.innerWidth >= 768 ? 0 : -300, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`fixed left-0 top-0 h-full bg-surface border-r border-border z-50 overflow-y-auto transition-all duration-300
        ${collapsed ? 'w-20' : 'w-64'}
        ${window.innerWidth < 768 ? 'md:hidden' : 'hidden md:block'}`}
      style={{
        transform: window.innerWidth < 768 && !mobileNavOpen ? 'translateX(-100%)' : 'translateX(0)',
      }}
    >
      {/* Mobile close button */}
      {window.innerWidth < 768 && (
        <div className="flex justify-end p-4">
          <button onClick={() => setMobileNavOpen(false)}>
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>
      )}

      {/* Profile Section */}
      <div className="p-6 border-b border-border flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-16 h-16 rounded-lg mb-4 overflow-hidden"
        >
          <img
            src="/profile.jpg"
            alt="Profile Picture"
            className="w-full h-full object-cover filter grayscale"
          />
        </motion.div>
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h3 className="font-semibold text-foreground">Krishanu Bandyopadhyay</h3>
            <p className="text-sm text-muted-foreground">Electronics & Communication Engineer</p>
          </motion.div>
        )}

        {/* Collapse Button (desktop only) */}
        <motion.button
          onClick={() => setCollapsed(!collapsed)}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 bg-primary text-primary-foreground p-2 rounded-full shadow-lg hover:shadow-xl transition-all border border-primary/30 hidden md:inline-flex"
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Navigation Items */}
      <div className="p-4">
        {navigationItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <motion.button
              key={item.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              onClick={() => onSectionClick(item.id)}
              className={`
                w-full flex items-center ${collapsed ? 'justify-center' : 'space-x-3'} px-4 py-3 rounded-lg mb-2 transition-all duration-300
                ${isActive
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'text-muted-foreground hover:text-foreground hover:bg-surface-elevated'
                }
              `}
            >
              <Icon className="w-5 h-5" />
              {!collapsed && <span className="font-medium">{item.label}</span>}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};
