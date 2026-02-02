import { Easing } from "framer-motion";

export const TRANSITION_EASE: Easing = [0.22, 1, 0.36, 1];

export const pageVariants = {
    initial: {
        opacity: 0,
        y: 12,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: TRANSITION_EASE,
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        y: -12,
        transition: {
            duration: 0.2,
            ease: TRANSITION_EASE,
        },
    },
};

export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const staggerItem = {
    initial: { opacity: 0, y: 12 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: TRANSITION_EASE,
        },
    },
};

export const heroVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: TRANSITION_EASE,
        },
    },
};
