import React from 'react';

export interface IllustrationProps {
    width?: number | string;
    height?: number | string;
    style?: React.CSSProperties;
}

export interface PipelineIllustrationProps extends IllustrationProps {
    steps: string[];
    caption?: string;
}

export const PipelineIllustration: React.FC<PipelineIllustrationProps> = ({
    steps,
    width = '100%',
    height = 160,
    style,
}) => {
    const s = steps.slice(0, 4);
    while (s.length < 4) s.push('');

    const box = {
        w: 170,
        h: 56,
        r: 10,
    };
    const gap = 24;
    const x0 = 24;
    const y = 52;
    const viewW = x0 * 2 + box.w * 4 + gap * 3;

    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${viewW} 160`}
            style={Object.assign({}, { display: 'block' }, style)}
            role="img"
            aria-label="Pipeline illustration"
        >
            <defs>
                <linearGradient id="pipeGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0.12" />
                </linearGradient>
                <marker
                    id="arrow"
                    viewBox="0 0 10 10"
                    refX="9"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                >
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#111" />
                </marker>
            </defs>

            <rect
                x="0"
                y="0"
                width={viewW}
                height="160"
                fill="url(#pipeGrad)"
                stroke="#000"
                strokeWidth="2"
                rx="10"
            />

            {s.map((label, idx) => {
                const x = x0 + idx * (box.w + gap);
                const cx = x + box.w / 2;
                const cy = y + box.h / 2;
                return (
                    <g key={`step-${idx}`}>
                        <rect
                            x={x}
                            y={y}
                            width={box.w}
                            height={box.h}
                            rx={box.r}
                            fill="#fff"
                            stroke="#000"
                            strokeWidth="2"
                        />
                        <text
                            x={cx}
                            y={cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="16"
                            fill="#111"
                        >
                            {label}
                        </text>
                        {idx < 3 && (
                            <line
                                x1={x + box.w}
                                y1={cy}
                                x2={x + box.w + gap}
                                y2={cy}
                                stroke="#111"
                                strokeWidth="2"
                                markerEnd="url(#arrow)"
                            />
                        )}
                    </g>
                );
            })}
        </svg>
    );
};

export interface NodeGraphIllustrationProps extends IllustrationProps {
    labels?: string[];
}

const GRAPH_NODE_W = 120;
const GRAPH_NODE_H = 44;
const GRAPH_COL_X = [30, 190, 350, 510, 670];

const GRAPH_NODES = [
    { id: 'noise', col: 0, y: 28, accent: '#8b5cf6' },
    { id: 'curve', col: 0, y: 116, accent: '#8b5cf6' },
    { id: 'terrain', col: 1, y: 72, accent: '#0ea5e9' },
    { id: 'erosion', col: 2, y: 20, accent: '#0ea5e9' },
    { id: 'mask', col: 2, y: 124, accent: '#f59e0b' },
    { id: 'mesh', col: 3, y: 20, accent: '#22c55e' },
    { id: 'scatter', col: 3, y: 124, accent: '#f59e0b' },
    { id: 'runtime', col: 4, y: 72, accent: '#ef4444' },
];

const GRAPH_DEFAULT_LABELS = [
    'Noise',
    'Curve',
    'Terrain',
    'Erosion',
    'Mask',
    'Mesh',
    'Scatter',
    'Runtime',
];

const GRAPH_EDGES: Array<[string, string]> = [
    ['noise', 'terrain'],
    ['curve', 'terrain'],
    ['terrain', 'erosion'],
    ['terrain', 'mask'],
    ['erosion', 'mesh'],
    ['mask', 'scatter'],
    ['mesh', 'runtime'],
    ['scatter', 'runtime'],
];

const graphNodeAt = (id: string) => {
    const node = GRAPH_NODES.find((n) => n.id === id);
    if (!node) return { x: 0, y: 0 };
    return { x: GRAPH_COL_X[node.col], y: node.y };
};

const graphWire = (from: string, to: string) => {
    const a = graphNodeAt(from);
    const b = graphNodeAt(to);
    const x1 = a.x + GRAPH_NODE_W;
    const y1 = a.y + GRAPH_NODE_H / 2;
    const x2 = b.x;
    const y2 = b.y + GRAPH_NODE_H / 2;
    return `M ${x1} ${y1} C ${x1 + 44} ${y1}, ${x2 - 44} ${y2}, ${x2} ${y2}`;
};

export const NodeGraphIllustration: React.FC<NodeGraphIllustrationProps> = ({
    width = '100%',
    height = 190,
    style,
    labels,
}) => {
    const text =
        labels && labels.length === GRAPH_NODES.length
            ? labels
            : GRAPH_DEFAULT_LABELS;

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 820 190"
            style={Object.assign({}, { display: 'block' }, style)}
            role="img"
            aria-label="Operator graph illustration"
        >
            <defs>
                <linearGradient id="graphGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                </linearGradient>
                <pattern
                    id="graphDots"
                    width="16"
                    height="16"
                    patternUnits="userSpaceOnUse"
                >
                    <circle cx="1.5" cy="1.5" r="1.5" fill="#0f172a" opacity="0.2" />
                </pattern>
            </defs>
            <rect x="0" y="0" width="820" height="190" fill="#fff" stroke="#000" strokeWidth="2" rx="10" />
            <rect x="2" y="2" width="816" height="186" fill="url(#graphGrad)" rx="9" />
            <rect x="2" y="2" width="816" height="186" fill="url(#graphDots)" rx="9" />

            {/* Wires: drawn under the nodes, port to port */}
            {GRAPH_EDGES.map(([from, to]) => (
                <g key={`wire-${from}-${to}`}>
                    <path
                        d={graphWire(from, to)}
                        stroke="#fff"
                        strokeWidth="5"
                        fill="none"
                        strokeLinecap="round"
                    />
                    <path
                        d={graphWire(from, to)}
                        stroke="#111"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                    />
                </g>
            ))}

            {/* Nodes */}
            {GRAPH_NODES.map((node, idx) => {
                const x = GRAPH_COL_X[node.col];
                const y = node.y;
                const midY = y + GRAPH_NODE_H / 2;
                const isSource = node.col === 0;
                const isSink = node.col === GRAPH_COL_X.length - 1;
                return (
                    <g key={`node-${node.id}`}>
                        <rect
                            x={x}
                            y={y}
                            width={GRAPH_NODE_W}
                            height={GRAPH_NODE_H}
                            rx="4"
                            fill="#fff"
                            stroke="#000"
                            strokeWidth="2"
                        />
                        <rect
                            x={x + 2}
                            y={y + 2}
                            width="7"
                            height={GRAPH_NODE_H - 4}
                            fill={node.accent}
                        />
                        <text
                            x={x + 9 + (GRAPH_NODE_W - 9) / 2}
                            y={midY + 1}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="15"
                            fontWeight="bold"
                            fill="#111"
                        >
                            {text[idx]}
                        </text>
                        {!isSource && (
                            <rect
                                x={x - 4}
                                y={midY - 4}
                                width="8"
                                height="8"
                                fill="#fff"
                                stroke="#000"
                                strokeWidth="2"
                            />
                        )}
                        {!isSink && (
                            <rect
                                x={x + GRAPH_NODE_W - 4}
                                y={midY - 4}
                                width="8"
                                height="8"
                                fill="#111"
                                stroke="#000"
                                strokeWidth="2"
                            />
                        )}
                    </g>
                );
            })}
        </svg>
    );
};

export const RoadIllustration: React.FC<IllustrationProps> = ({
    width = '100%',
    height = 160,
    style,
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 800 160"
            style={Object.assign({}, { display: 'block' }, style)}
            role="img"
            aria-label="Road illustration"
        >
            <defs>
                <linearGradient id="roadGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.14" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.12" />
                </linearGradient>
            </defs>
            <rect
                x="0"
                y="0"
                width="800"
                height="160"
                fill="url(#roadGrad)"
                stroke="#000"
                strokeWidth="2"
                rx="10"
            />

            {/* Roads */}
            <path
                d="M 40 40 L 760 40"
                stroke="#111"
                strokeWidth="14"
                strokeLinecap="round"
            />
            <path
                d="M 40 120 L 760 120"
                stroke="#111"
                strokeWidth="14"
                strokeLinecap="round"
            />
            <path
                d="M 220 16 L 220 144"
                stroke="#111"
                strokeWidth="14"
                strokeLinecap="round"
            />
            <path
                d="M 580 16 L 580 144"
                stroke="#111"
                strokeWidth="14"
                strokeLinecap="round"
            />

            {/* Lane markings */}
            {Array.from({ length: 14 }).map((_, i) => (
                <rect
                    key={`dash-top-${i}`}
                    x={60 + i * 52}
                    y="37"
                    width="22"
                    height="6"
                    fill="#fff"
                    opacity="0.9"
                />
            ))}
            {Array.from({ length: 14 }).map((_, i) => (
                <rect
                    key={`dash-bottom-${i}`}
                    x={60 + i * 52}
                    y="117"
                    width="22"
                    height="6"
                    fill="#fff"
                    opacity="0.9"
                />
            ))}
        </svg>
    );
};

