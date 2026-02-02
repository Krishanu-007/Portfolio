import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Calendar, Tag } from 'lucide-react';
import { useEffect } from 'react';

interface ProjectDetail {
    title: string;
    description: string;
    detailedPoints: string[];
    techStack: string[];
    github?: string;
    category: string;
    status: string;
    imagePath: string;
}

interface ProjectModalProps {
    project: ProjectDetail | null;
    isOpen: boolean;
    onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    // Close modal on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-6xl max-h-[90vh] bg-surface border border-white/10 rounded-3xl overflow-hidden shadow-2xl pointer-events-auto"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 p-2 bg-surface-elevated/80 backdrop-blur-sm rounded-full border border-white/10 hover:bg-surface-elevated transition-colors group"
                            >
                                <X className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                            </button>

                            {/* Scrollable Content */}
                            <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
                                <div className="grid lg:grid-cols-2 gap-0">
                                    {/* Left Side - Image */}
                                    <div className="relative bg-surface-elevated p-8 flex items-center justify-center min-h-[400px] lg:min-h-[600px]">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                                        <motion.img
                                            initial={{ scale: 0.95, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                            src={project.imagePath}
                                            alt={project.title}
                                            className="relative z-10 w-full h-full object-contain rounded-xl"
                                            onError={(e) => {
                                                // Fallback to a placeholder if image fails to load
                                                e.currentTarget.src = `https://placehold.co/800x600/1a1a1a/3b82f6?text=${encodeURIComponent(project.title)}`;
                                            }}
                                        />
                                        {/* Decorative elements */}
                                        <div className="absolute top-4 left-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
                                        <div className="absolute bottom-4 right-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
                                    </div>

                                    {/* Right Side - Details */}
                                    <div className="p-8 lg:p-12 flex flex-col">
                                        {/* Header */}
                                        <div className="mb-6">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                                                    {project.status}
                                                </span>
                                                <span className="px-3 py-1 bg-surface-elevated text-muted-foreground text-xs rounded-full border border-white/5">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                                                {project.title}
                                            </h2>
                                            <p className="text-base text-muted-foreground leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Detailed Points */}
                                        <div className="mb-8 flex-grow">
                                            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                                                <div className="w-1 h-6 bg-primary rounded-full" />
                                                Key Highlights
                                            </h3>
                                            <ul className="space-y-3">
                                                {project.detailedPoints.map((point, index) => (
                                                    <motion.li
                                                        key={index}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.1 * index }}
                                                        className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                                                    >
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                        <span>{point}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tech Stack */}
                                        <div className="mb-6">
                                            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider flex items-center gap-2">
                                                <Tag className="w-4 h-4 text-primary" />
                                                Technologies Used
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.map((tech, index) => (
                                                    <motion.span
                                                        key={index}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.05 * index }}
                                                        className="px-3 py-1.5 text-xs font-mono bg-surface-elevated text-foreground rounded-lg border border-white/10 hover:border-primary/30 transition-colors"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3 pt-4 border-t border-white/5">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 btn-primary flex items-center justify-center gap-2 py-3"
                                                >
                                                    <Github className="w-5 h-5" />
                                                    View on GitHub
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
