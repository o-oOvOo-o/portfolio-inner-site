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

export const NodeGraphIllustration: React.FC<IllustrationProps> = ({
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
            aria-label="Node graph illustration"
        >
            <defs>
                <linearGradient id="graphGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.14" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.12" />
                </linearGradient>
            </defs>
            <rect
                x="0"
                y="0"
                width="800"
                height="160"
                fill="url(#graphGrad)"
                stroke="#000"
                strokeWidth="2"
                rx="10"
            />

            {/* Links */}
            <path
                d="M 120 80 C 240 20, 320 20, 420 80"
                stroke="#111"
                strokeWidth="2"
                fill="none"
            />
            <path
                d="M 120 80 C 240 140, 320 140, 420 80"
                stroke="#111"
                strokeWidth="2"
                fill="none"
            />
            <path
                d="M 420 80 C 520 30, 620 30, 700 80"
                stroke="#111"
                strokeWidth="2"
                fill="none"
            />
            <path
                d="M 420 80 C 520 130, 620 130, 700 80"
                stroke="#111"
                strokeWidth="2"
                fill="none"
            />

            {/* Nodes */}
            {[
                { x: 120, y: 80, r: 22, fill: '#fff' },
                { x: 420, y: 80, r: 26, fill: '#fff' },
                { x: 700, y: 80, r: 22, fill: '#fff' },
                { x: 300, y: 34, r: 16, fill: '#fff' },
                { x: 300, y: 126, r: 16, fill: '#fff' },
                { x: 560, y: 44, r: 16, fill: '#fff' },
                { x: 560, y: 116, r: 16, fill: '#fff' },
            ].map((n, i) => (
                <circle
                    key={`node-${i}`}
                    cx={n.x}
                    cy={n.y}
                    r={n.r}
                    fill={n.fill}
                    stroke="#000"
                    strokeWidth="2"
                />
            ))}
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

