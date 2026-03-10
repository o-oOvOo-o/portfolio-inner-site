export type ResumeLocale = 'en' | 'zh';

export interface ResumeHighlightItem {
    label: string;
    value: string;
    detail?: string;
}

export interface ResumeExperienceItem {
    company: string;
    role: string;
    start: string;
    end: string;
    location?: string;
    summary?: string;
    bullets: string[];
    tags?: string[];
}

export interface ResumeProjectLink {
    label: string;
    href: string;
}

export interface ResumeProjectItem {
    name: string;
    description: string;
    highlights?: string[];
    tags?: string[];
    links?: ResumeProjectLink[];
}

export interface ResumeSkillGroup {
    name: string;
    items: string[];
}

export interface ResumeEducationItem {
    school: string;
    degree: string;
    start?: string;
    end?: string;
    detail?: string;
}

export interface ResumeProfile {
    name: string;
    title: string;
    location: string;
    email: string;
    bio: string;
    interests?: string[];
    social?: {
        github?: string;
        linkedin?: string;
        twitter?: string;
        website?: string;
    };
}

export interface ResumeConfig {
    meta: {
        title: string;
        description: string;
    };
    nav: {
        home: string;
        about: string;
        experience: string;
        projects: string;
        skills: string;
        contact: string;
    };
    profile: ResumeProfile;
    highlights: {
        title: string;
        items: ResumeHighlightItem[];
    };
    experience: {
        title: string;
        items: ResumeExperienceItem[];
    };
    projects: {
        title: string;
        items: ResumeProjectItem[];
    };
    skills: {
        title: string;
        groups: ResumeSkillGroup[];
    };
    education: {
        title: string;
        items: ResumeEducationItem[];
    };
    contact: {
        title: string;
        subtitle: string;
        sendEmail: string;
        copyEmail: string;
        copiedTitle: string;
        copiedDescription: string;
    };
    resume: {
        title: string;
        hint: string;
        url?: string;
    };
}

export const RESUME_BY_LOCALE: Record<ResumeLocale, ResumeConfig> = {
    en: {
        meta: {
            title: 'About',
            description:
                'AI-native authoring systems, engine tools, and creator workflows for flagship open-world production.',
        },
        nav: {
            home: 'HOME',
            about: 'ABOUT',
            experience: 'EXPERIENCE',
            projects: 'PROJECTS',
            skills: 'SKILLS',
            contact: 'CONTACT',
        },
        profile: {
            name: 'Anonymous',
            title: 'AI-Native Authoring Systems / Engine Tools / Technical Art',
            location: 'Private',
            email: 'anonymous@example.com',
            bio: 'I build creator-facing systems for flagship game production: procedural authoring, editor tooling, validation pipelines, packaging workflows, and runtime-connected utilities that help art and design teams ship faster with more control. My work sits between engine, technical art, and production systems, with a long-term focus on open-world scale, PCG, and AI-native tooling. In parallel, I build Cunning3D as an independent experiment in graph-based authoring, reusable kernels, and next-generation creator workflow.',
            interests: [
                'AI Authoring',
                'Creator Tools',
                'Open World Systems',
                'PCG',
            ],
            social: {
                github: 'https://github.com/Cunning3D',
                website: 'https://cunning3d.vercel.app/',
            },
        },
        highlights: {
            title: 'Highlights',
            items: [
                {
                    label: 'Positioning',
                    value: 'AI-Native Authoring · Engine Tools',
                    detail: 'Creator-facing systems designed for real production use',
                },
                {
                    label: 'Ownership',
                    value: '0→1 Systems · Workflow Architecture',
                    detail: 'Roads, validation, packaging, and graph-driven tooling',
                },
                {
                    label: 'Scale',
                    value: 'Flagship Open Worlds',
                    detail: 'Large-scene iteration, streaming-aware tooling, and shipping constraints',
                },
                {
                    label: 'Bridge',
                    value: 'Art × Engine × Production',
                    detail: 'Translating between artists, TA, and core engineering',
                },
                {
                    label: 'Stack',
                    value: 'C++ · Rust · C#',
                    detail: 'Editor/runtime/toolchain work across host engines',
                },
            ],
        },
        experience: {
            title: 'Experience',
            items: [
                {
                    company: 'NetEase Games · Tianxia Division · “Moonfall”',
                    role: 'Technical Artist · Animation Tooling',
                    start: '2019.07',
                    end: '2020.07',
                    location: 'Confidential',
                    summary:
                        'Started in animation tooling on a high-end in-house-engine production, learning how editor UX, rig logic, and batch automation directly affect content throughput.',
                    bullets: [
                        'Built batch tools for animation assets and repeatable cleanup tasks.',
                        'Developed bulk skeleton hierarchy update tooling to reduce manual rig maintenance.',
                        'Closed the loop on Messiah animation-tool feedback through debugging, tuning, and iteration with users.',
                        'Prototyped Houdini-assisted workflows for hard engine constraints and one-off conversion problems.',
                    ],
                    tags: ['Houdini', 'Animation', 'Tools', 'Pipeline'],
                },
                {
                    company: 'NetEase Games (Leihuo) · Project New World',
                    role: 'PCG Tools Engineer · Pipeline Integration',
                    start: '2020.07',
                    end: '2021.07',
                    location: 'Confidential',
                    summary:
                        'Worked with the central tech-platform side to adapt shared PCG capability into project production and turn it into something content teams could actually use.',
                    bullets: [
                        'Landed shared PCG pipeline tooling into a Unity-based project with Houdini-assisted geometry and terrain-mask workflows.',
                        'Debugged toolchain issues across editor, data, and content usage scenarios.',
                        'Built a project-specific PCG cliff tool as direct production support.',
                        'Translated platform-side capability into day-to-day creator workflow.',
                    ],
                    tags: ['Unity', 'Houdini', 'C#', 'PCG', 'Tools', 'Pipeline'],
                },
                {
                    company: 'NetEase Games (Leihuo) · “无限大”',
                    role: 'PCG Roads System Owner · Tools & Pipeline',
                    start: '2021.07',
                    end: '2024.05',
                    location: 'Confidential',
                    summary:
                        'Owned 0→1 road authoring and PCG asset-pipeline work for a flagship open-world production, with responsibility spanning system design, editor UX, and production landing.',
                    bullets: [
                        'Built the road authoring stack end-to-end: core data, generation logic, editor workflows, and engine integration.',
                        'Improved iteration speed for environment and level teams through robust WYSIWYG tooling and production-safe UX decisions.',
                        'Built a PCG art-asset packaging/validation pipeline covering dependencies, standardized outputs, and automated checks.',
                        'Co-developed a traffic-graph data system, supported scene-load optimization, and maintained mobile open-world PCG asset workflows at production scale.',
                    ],
                    tags: ['C++', 'C#', 'PCG', 'Tooling', 'Pipeline'],
                },
                {
                    company: 'Game Studio (Confidential)',
                    role: 'Technical Art Lead',
                    start: '2024.05',
                    end: '2025.07',
                    location: 'Confidential',
                    summary:
                        'Led technical art direction for tools and production pipelines on a large-scale project, with emphasis on shipping stable workflows rather than one-off demos.',
                    bullets: [
                        'Led the TA team around creator-tooling priorities and production pain points.',
                        'Implemented seamless open-world streaming support for large-scene organization and iteration.',
                        'Built and maintained packaging/validation tooling to improve delivery quality, reliability, and cross-team handoff.',
                        'Partnered with engineering to unblock mobile build, packaging, and integration workflows.',
                    ],
                    tags: ['Technical Art', 'Open World', 'Pipeline', 'Tools'],
                },
                {
                    company: 'Top-tier AI Lab (Confidential)',
                    role: 'AI-Native Engine / Authoring Systems Lead',
                    start: '2025.07',
                    end: 'Present',
                    location: 'Confidential',
                    summary:
                        'Leading exploration of AI-driven generation and MCP-style engine workflows, while grounding experiments in real creator tooling and flagship-scale production needs.',
                    bullets: [
                        'Define and prototype AI-assisted authoring workflows that connect engine runtime, tools, and creator operations.',
                        'Explore MCP-style engine integration so AI agents can act through structured tool surfaces instead of brittle ad-hoc automation.',
                        'Continue shipping procedural world-building utilities for confidential large-scale production.',
                        'Use Rust/C++ to turn exploratory ideas into stable interfaces, reusable kernels, and production-minded prototypes.',
                    ],
                    tags: ['AI Systems', 'MCP', 'Authoring', 'Rust', 'PCG'],
                },
            ],
        },
        projects: {
            title: 'Selected Works',
            items: [
                {
                    name: 'Cunning3D',
                    description:
                        'An independent procedural authoring platform built around a reusable Rust kernel, graph workflows, and creator-facing tools.',
                    highlights: [
                        'A complete, runnable system rather than a mockup, with live interaction and growing procedural examples.',
                        'Explores graph-based authoring, reusable kernels, and the shape of AI-native creation workflow.',
                    ],
                    tags: ['Rust', 'ECS', 'DCC', 'Procedural Modeling', 'PCG'],
                    links: [
                        { label: 'Website', href: 'https://cunning3d.vercel.app/' },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/Cunning3D/Cunning3D-Dev',
                        },
                    ],
                },
                {
                    name: 'Real-time Procedural Road System (Unity, Personal)',
                    description:
                        'A real-time procedural road & junction system built in the Unity Editor for large scenes.',
                    highlights: [
                        'Lofted multi-lane roads with sidewalks/curbs/green belts and consistent UV tiling.',
                        'Junction generation with zebra crossings; block/parcel scanning from sidewalk outer edges.',
                        'Large-scene editor performance: LOD + multi-threaded culling.',
                        'Real-time generation per-GameObject for road segments & junctions (WYSIWYG in Editor).',
                        'Highly programmable geometry customization (lane counts, turning rules, etc.).',
                        'Cunning3D Graph integration as a Houdini-PCG-Graph alternative for procedural workflows.',
                        'Cunning Engine for Unity: operators API + graph data access for hybrid dev; HDA-like black-box usage with async builds (no main-thread stalls).',
                        'Rust-based DLL wrapping a geometry library (non-RPC session) with strict validation (unwrap/assert) around memory ops to reduce leak/crash risk.',
                    ],
                    tags: ['Unity', 'C#', 'PCG', 'Graph', 'Rust', 'Editor Tools'],
                },
                {
                    name: 'PCG Road System (Confidential)',
                    description:
                        'A production road authoring system designed for scale, reliability, and day-to-day content iteration.',
                    highlights: [
                        'End-to-end ownership from design to implementation and iteration with content teams.',
                        'Treats tooling as product surface: usability, stability, and iteration speed all mattered.',
                    ],
                    tags: ['PCG', 'C++', 'Tools'],
                },
                {
                    name: 'Seamless Open World Streaming (Confidential)',
                    description:
                        'A seamless open-world streaming solution built to support large-scene organization and production iteration.',
                    highlights: [
                        'Designed around production constraints, ownership boundaries, and predictable shipping behavior.',
                    ],
                    tags: ['Open World', 'Tools', 'Pipeline'],
                },
                {
                    name: 'Art Asset Packaging Pipeline',
                    description:
                        'A packaging and validation pipeline for art assets that improves delivery quality, consistency, and maintainability.',
                    highlights: [
                        'Low-maintenance pipeline with automated validation, standardized outputs, and fewer late-stage surprises.',
                    ],
                    tags: ['Pipeline', 'C#', 'Automation'],
                },
                {
                    name: 'CometSwap',
                    description: 'Blockchain swap front-end built with React.',
                    highlights: [
                        'AI-coding learning project: exploring what AI can do end-to-end.',
                    ],
                    tags: ['React', 'Blockchain', 'Frontend', 'AI Coding'],
                },
                {
                    name: 'AoMDC Modding & Community (2007–2009)',
                    description:
                        'Early modding and community work for the Half-Life (GoldSrc) mod AoMDC.',
                    highlights: [
                        'Contributed to multiplayer map creation for AoMDC (predecessor of Cry of Fear).',
                        'Built and published maps using Hammer (Valve Hammer Editor).',
                        'Learned AMX Mod X (AMXX) plugin development.',
                        'Moderated the GoldSrc mod section on Modchian and hosted an AoMDC server.',
                    ],
                    tags: [
                        'GoldSrc',
                        'Half-Life',
                        'Modding',
                        'Hammer',
                        'AMXX',
                        'Server',
                    ],
                },
            ],
        },
        skills: {
            title: 'Skills',
            groups: [
                { name: 'Languages', items: ['C++', 'Rust', 'C#'] },
                {
                    name: 'Authoring Systems',
                    items: [
                        'AI-native workflows',
                        'Editor tools',
                        'Graph workflows',
                        'Validation & packaging',
                    ],
                },
                {
                    name: 'Open World / PCG',
                    items: [
                        'Road systems',
                        'Traffic graphs',
                        'Streaming-aware tooling',
                        'Procedural world details',
                    ],
                },
                {
                    name: 'Production',
                    items: [
                        'Creator UX',
                        'Automation',
                        'Cross-discipline translation',
                        'Shipping constraints',
                    ],
                },
            ],
        },
        education: {
            title: 'Education',
            items: [],
        },
        contact: {
            title: 'Contact',
            subtitle:
                'Open to PhD, research, and senior creator-tools / engine-systems opportunities. Email is best.',
            sendEmail: 'Send email',
            copyEmail: 'Copy email',
            copiedTitle: 'Copied',
            copiedDescription: 'Email address copied to clipboard.',
        },
        resume: {
            title: 'Resume',
            hint: 'PDF resume / portfolio version available upon request — please email me.',
        },
    },
    zh: {
        meta: {
            title: '关于我',
            description: 'AI 原生创作系统、引擎工具与面向旗舰大世界生产的创作者工作流。',
        },
        nav: {
            home: '首页',
            about: '关于',
            experience: '经历',
            projects: '项目',
            skills: '技能',
            contact: '联系',
        },
        profile: {
            name: 'Anonymous',
            title: 'AI 原生创作系统 / 引擎工具 / 技术美术',
            location: '保密',
            email: 'anonymous@example.com',
            bio: '我长期在游戏生产一线做面向创作者的系统：程序化创作、编辑器工具、资源校验、打包流程，以及和运行时紧密相连的生产工具，目标是让美术与设计团队以更高的控制力、更低的成本完成迭代。我的工作天然处在引擎、技术美术和生产系统的交叉带，长期关注大世界规模、PCG 与 AI 原生工具。与此同时，我也在持续构建 Cunning3D，把它作为图式创作、可复用内核和下一代创作者工作流的独立实验场。',
            interests: ['AI 创作', '创作者工具', '大世界系统', 'PCG'],
            social: {
                github: 'https://github.com/Cunning3D',
                website: 'https://cunning3d.vercel.app/',
            },
        },
        highlights: {
            title: '亮点',
            items: [
                {
                    label: '定位',
                    value: 'AI 原生创作 · 引擎工具',
                    detail: '不是演示型原型，而是面向真实生产的创作者系统',
                },
                {
                    label: '能力',
                    value: '0→1 系统 · 工作流架构',
                    detail: '道路、校验、打包、Graph 工作流都能独立搭起来',
                },
                {
                    label: '规模',
                    value: '旗舰级大世界',
                    detail: '围绕大场景迭代、流式加载与落地约束组织工具系统',
                },
                {
                    label: '协同',
                    value: '美术 × 引擎 × 生产',
                    detail: '能在创作者语言和核心工程语言之间做翻译',
                },
                {
                    label: '技术栈',
                    value: 'C++ · Rust · C#',
                    detail: '覆盖编辑器、运行时与工具链',
                },
            ],
        },
        experience: {
            title: '经历',
            items: [
                {
                    company: '网易 · 天下事业部 · 《月球陨落》',
                    role: '动画工具开发 · 技术美术',
                    start: '2019.07',
                    end: '2020.07',
                    location: '保密',
                    summary:
                        '从动画工具切入高品质自研引擎项目，最早一批经验就落在“编辑器体验、Rig 逻辑、批处理自动化如何直接影响内容产能”这件事上。',
                    bullets: [
                        '开发动画资产批处理工具，覆盖重复性整理与清理任务。',
                        '开发批量骨骼层级更新工具，降低手工维护 Rig 的成本。',
                        '围绕 Messiah 动画工具做调试、调优与用户反馈闭环。',
                        '用 Houdini 辅助解决硬引擎约束下的一次性转换与特殊流程问题。',
                    ],
                    tags: ['Houdini', '动画', '工具链', '管线'],
                },
                {
                    company: '网易雷火 · Project New World',
                    role: 'PCG 工具工程师 · 中台接入',
                    start: '2020.07',
                    end: '2021.07',
                    location: '保密',
                    summary:
                        '和技术中台一起把共享 PCG 能力真正落进项目生产，不只是“接上去”，而是把它变成内容团队愿意用、能稳定用的流程。',
                    bullets: [
                        '负责中台 PCG 管线工具在 Unity 项目内落地，并结合 Houdini 处理几何、地形 Mask 等流程。',
                        '排查编辑器、数据与内容使用链路中的工具问题。',
                        '开发 PCG 崖壁工具，作为项目侧直接生产支持。',
                        '把平台能力翻译成日常可执行的创作者工作流。',
                    ],
                    tags: ['Unity', 'Houdini', 'C#', 'PCG', '工具链', '管线'],
                },
                {
                    company: '网易雷火 · 《无限大》',
                    role: 'PCG 道路系统负责人 · 工具/管线',
                    start: '2021.07',
                    end: '2024.05',
                    location: '保密',
                    summary:
                        '围绕旗舰级开放世界项目，负责从 0 到 1 的道路创作系统与 PCG 资产管线；工作内容同时覆盖系统设计、编辑器体验和生产落地。',
                    bullets: [
                        '从 0 到 1 搭建道路创作系统：核心数据、生成逻辑、编辑器工作流与引擎对接全部负责。',
                        '通过所见即所得、稳定可控的工具体验提升环境与关卡团队迭代效率。',
                        '建设 PCG 美术资产打包/校验管线：依赖处理、产物规范与自动化检查完整覆盖。',
                        '与客户端共同建设交通 Graph 数据系统，支撑场景负载优化，并维护移动端开放世界 PCG 资产流程。',
                    ],
                    tags: ['C++', 'C#', 'PCG', '工具链', '管线'],
                },
                {
                    company: '游戏工作室（保密）',
                    role: 'TA组长',
                    start: '2024.05',
                    end: '2025.07',
                    location: '保密',
                    summary:
                        '负责工具与生产管线方向的技术美术组织工作，重点不是一次性 demo，而是让跨团队工作流长期稳定运行。',
                    bullets: [
                        '围绕创作者工具与生产痛点组织 TA 团队优先级。',
                        '开发无缝大世界/流式加载支持方案，服务大场景组织与迭代。',
                        '建设并维护资产打包与自动化校验工具，提升交付一致性与跨团队交接质量。',
                        '与工程团队一起打通移动端构建、打包与资源集成流程。',
                    ],
                    tags: ['技术美术', '大世界', '管线', '工具'],
                },
                {
                    company: '头部 AI 实验室（保密）',
                    role: 'AI 原生引擎 / 创作系统负责人',
                    start: '2025.07',
                    end: '至今',
                    location: '保密',
                    summary: '主导 AI 驱动生成与 MCP 风格引擎工作流的探索，把研究型想法落回真实创作者工具与旗舰项目生产约束中。',
                    bullets: [
                        '定义并原型化 AI 辅助创作工作流，把引擎运行时、工具层与创作者操作串起来。',
                        '探索 MCP 风格的引擎集成方式，让 AI Agent 通过结构化工具表面工作，而不是脆弱的临时脚本拼接。',
                        '继续为保密大型项目交付程序化世界构建工具。',
                        '用 Rust/C++ 把探索性想法收敛成稳定接口、可复用内核与面向生产的原型。',
                    ],
                    tags: ['AI Systems', 'MCP', 'Authoring', 'Rust', 'PCG'],
                },
            ],
        },
        projects: {
            title: '精选作品',
            items: [
                {
                    name: 'Cunning3D',
                    description:
                        '围绕可复用 Rust 内核、Graph 工作流与创作者工具搭建的独立程序化创作平台。',
                    highlights: [
                        '不是概念图，而是完整可运行的系统，交互与界面本身就是作品的一部分。',
                        '持续探索图式创作、可复用内核与 AI 原生工作流的可能性。',
                    ],
                    tags: ['Rust', 'ECS', 'DCC', '程序化建模', 'PCG'],
                    links: [
                        { label: '官网', href: 'https://cunning3d.vercel.app/' },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/Cunning3D/Cunning3D-Dev',
                        },
                    ],
                },
                {
                    name: '实时程序化道路系统（个人作品）',
                    description:
                        '基于 Unity Editor 的实时程序化道路/路口系统，用于大规模场景的道路制作与编辑。',
                    highlights: [
                        '支持多车道参数化道路，并生成道路/人行道/路缘/绿化带等网格与 UV。',
                        '支持路口生成与斑马线，并基于人行道外沿扫描闭合区域生成地块占位符。',
                        '面向大场景的编辑器 EDITOR 下：LOD / 多线程裁剪等辅助工具。',
                        '逐 GameObject 维度对路段/路口进行实时生成与更新，所见即所得。',
                        '高度程序员可控的几何自定义：左右车道数、转向规则等能力。',
                        '替代 Houdini 的 PCG Graph：集成 Cunning3D Graph，支持流程编排与数据访问。',
                        'Cunning Engine for Unity：可直接调算子，也可配合 Graph 做混合开发；支持 HDA 式黑盒使用，异步构建不阻塞主线程。',
                        '非 RPC Session：本质是几何库封装；Rust 实现并在关键内存操作处加入 unwrap/断言与边界保护，降低内存泄露与 DLL 带崩宿主风险。',
                    ],
                    tags: ['Unity', 'C#', 'PCG', 'Graph', 'Rust', '编辑器工具'],
                },
                {
                    name: 'PCG 道路系统（保密）',
                    description:
                        '面向内容生产的道路创作系统，重点放在规模化、稳定性与日常迭代效率。',
                    highlights: [
                        '从设计到实现端到端负责，并和内容团队一起把工作流磨到可长期使用。',
                        '把工具视为产品表面：易用性、稳定性和迭代速度同样重要。',
                    ],
                    tags: ['PCG', 'C++', '工具'],
                },
                {
                    name: '无缝大世界方案',
                    description:
                        '面向大规模场景组织与生产迭代的无缝大世界 / 流式加载方案。',
                    highlights: [
                        '围绕真实生产约束、模块边界与可预测的上线行为来设计。',
                    ],
                    tags: ['大世界', '工具链', '管线'],
                },
                {
                    name: '美术资产打包管线',
                    description:
                        '美术资产打包与校验管线，提升产物一致性、交付质量与可维护性。',
                    highlights: [
                        '自动化校验、规范化产物、减少末端返工，长期稳定且低维护。',
                    ],
                    tags: ['管线', 'C#', '自动化'],
                },
                {
                    name: '彗星swap',
                    description: '区块链 Swap 前端（React）。',
                    highlights: ['AI Coding 学习作品：测试 AI 可以做到什么程度。'],
                    tags: ['React', '区块链', '前端', 'AI Coding'],
                },
                {
                    name: 'AoMDC 联机地图 & 服务器（Modchian 版主，2007–2009）',
                    description:
                        '小学时期的 Mod 开发与社区实践：围绕 Half-Life（GoldSrc）Mod「AoMDC」。',
                    highlights: [
                        '参与 AoMDC 联机地图制作与迭代（《Cry of Fear》前作）。',
                        '学习并使用 Hammer 工具制作/发布场景地图。',
                        '学习 AMXX 插件制作。',
                        '担任 Modchian GoldSrc 引擎 Mod 板块版主，搭建并维护 AoMDC 服务器。',
                    ],
                    tags: ['GoldSrc', 'Half-Life', 'Mod', 'Hammer', 'AMXX', '服务器'],
                },
            ],
        },
        skills: {
            title: '技能',
            groups: [
                { name: '语言', items: ['C++', 'Rust', 'C#'] },
                {
                    name: '创作系统',
                    items: ['AI 原生工作流', '编辑器工具', 'Graph 工作流', '校验与打包'],
                },
                {
                    name: '大世界 / PCG',
                    items: ['道路系统', '交通 Graph', '流式加载工具', '程序化世界细节'],
                },
                {
                    name: '生产',
                    items: ['创作者体验', '自动化', '跨学科协同', '上线约束'],
                },
            ],
        },
        education: {
            title: '教育',
            items: [],
        },
        contact: {
            title: '联系',
            subtitle: '可联系 PhD / research / 高级 creator-tools 与 engine-systems 机会；优先邮件。',
            sendEmail: '发送邮件',
            copyEmail: '复制邮箱',
            copiedTitle: '已复制',
            copiedDescription: '邮箱地址已复制到剪贴板。',
        },
        resume: {
            title: '简历',
            hint: '如需 PDF 简历 / 作品集版本，请邮件联系我。',
        },
    },
};
