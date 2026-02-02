import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CircuitNode {
    x: number;
    y: number;
}

interface CircuitPath {
    path: string;
    nodes: CircuitNode[];
    duration: number;
    delay: number;
}

export const CircuitBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight,
                });
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    // Generate more complex circuit paths with junction nodes
    const generateCircuitPaths = (): CircuitPath[] => {
        const paths: CircuitPath[] = [];
        const numPaths = 20;

        for (let i = 0; i < numPaths; i++) {
            const nodes: CircuitNode[] = [];
            const numNodes = 3 + Math.floor(Math.random() * 4); // 3-6 nodes per path

            let currentX = Math.random() * 100;
            let currentY = Math.random() * 100;
            nodes.push({ x: currentX, y: currentY });

            let pathString = `M${currentX} ${currentY}`;

            for (let j = 1; j < numNodes; j++) {
                // Decide direction: horizontal or vertical (circuit-like)
                const isHorizontal = Math.random() > 0.5;

                if (isHorizontal) {
                    currentX += (Math.random() - 0.5) * 40;
                    currentX = Math.max(0, Math.min(100, currentX));
                } else {
                    currentY += (Math.random() - 0.5) * 40;
                    currentY = Math.max(0, Math.min(100, currentY));
                }

                nodes.push({ x: currentX, y: currentY });
                pathString += ` L${currentX} ${currentY}`;
            }

            paths.push({
                path: pathString,
                nodes,
                duration: 4 + Math.random() * 6,
                delay: Math.random() * 5,
            });
        }

        return paths;
    };

    const [circuitPaths] = useState(generateCircuitPaths);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0"
            >
                {/* Define glowing filter for signals */}
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <filter id="strongGlow">
                        <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Grid pattern */}
                    <pattern id="grid" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
                        <circle cx="0.5" cy="0.5" r="0.15" className="fill-primary/10" />
                    </pattern>
                </defs>

                {/* Background grid */}
                <rect width="100%" height="100%" fill="url(#grid)" opacity="0.3" />

                {/* Circuit paths and signals */}
                {circuitPaths.map((circuit, i) => (
                    <g key={i}>
                        {/* The Circuit Trace (PCB trace) */}
                        <path
                            d={circuit.path}
                            strokeWidth="0.15"
                            fill="none"
                            stroke="hsl(var(--primary))"
                            opacity="0.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        {/* Junction nodes (connection points) */}
                        {circuit.nodes.map((node, nodeIdx) => (
                            <g key={`node-${i}-${nodeIdx}`}>
                                {/* Node circle */}
                                <circle
                                    cx={node.x}
                                    cy={node.y}
                                    r="0.3"
                                    fill="hsl(var(--primary))"
                                    opacity="0.4"
                                />
                                {/* Pulsing glow on nodes */}
                                <circle
                                    cx={node.x}
                                    cy={node.y}
                                    r="0.4"
                                    fill="none"
                                    stroke="hsl(var(--primary))"
                                    strokeWidth="0.1"
                                    opacity="0.3"
                                >
                                    <animate
                                        attributeName="r"
                                        values="0.3;0.8;0.3"
                                        dur={`${2 + Math.random() * 2}s`}
                                        repeatCount="indefinite"
                                        begin={`${nodeIdx * 0.3}s`}
                                    />
                                    <animate
                                        attributeName="opacity"
                                        values="0.5;0;0.5"
                                        dur={`${2 + Math.random() * 2}s`}
                                        repeatCount="indefinite"
                                        begin={`${nodeIdx * 0.3}s`}
                                    />
                                </circle>
                            </g>
                        ))}

                        {/* Electronic Signal Pulse (main particle) */}
                        <circle
                            r="0.4"
                            fill="hsl(var(--primary))"
                            filter="url(#strongGlow)"
                            opacity="0.9"
                        >
                            <animateMotion
                                dur={`${circuit.duration}s`}
                                repeatCount="indefinite"
                                path={circuit.path}
                                begin={`${circuit.delay}s`}
                            />
                        </circle>

                        {/* Signal trail effect (smaller following particles) */}
                        <circle
                            r="0.25"
                            fill="hsl(var(--primary))"
                            filter="url(#glow)"
                            opacity="0.6"
                        >
                            <animateMotion
                                dur={`${circuit.duration}s`}
                                repeatCount="indefinite"
                                path={circuit.path}
                                begin={`${circuit.delay + 0.15}s`}
                            />
                        </circle>

                        {/* Additional trail particle */}
                        <circle
                            r="0.15"
                            fill="hsl(var(--primary))"
                            filter="url(#glow)"
                            opacity="0.4"
                        >
                            <animateMotion
                                dur={`${circuit.duration}s`}
                                repeatCount="indefinite"
                                path={circuit.path}
                                begin={`${circuit.delay + 0.3}s`}
                            />
                        </circle>

                        {/* Accent color signal (occasional) */}
                        {i % 4 === 0 && (
                            <circle
                                r="0.35"
                                fill="hsl(var(--accent))"
                                filter="url(#strongGlow)"
                                opacity="0.8"
                            >
                                <animateMotion
                                    dur={`${circuit.duration * 1.2}s`}
                                    repeatCount="indefinite"
                                    path={circuit.path}
                                    begin={`${circuit.delay + 2}s`}
                                />
                            </circle>
                        )}
                    </g>
                ))}
            </svg>
        </div>
    );
};
