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
                'Runtime procedural generation, engine systems, and open-world toolchains — shipped on flagship productions.',
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
            name: 'Shuangqing Liu',
            title: 'Runtime PCG / Engine Systems / Open-World Toolchain',
            location: 'Shanghai, China',
            email: '0x1900.eth@gmail.com',
            bio: 'I build procedural generation systems for games, and I ship them. My core work is runtime PCG: terrain, geometry, and island-scale world generation executed live in the engine — the kind of content usually confined to offline DCC pipelines — with streaming and open-world scale built in. That work has hardened into a shared PCG backend now used across multiple projects. Before that I owned road authoring and large-world asset pipelines on flagship open-world titles that shipped to public reveal and testing. I work in Rust, C++, and C# across runtime, editor, and toolchain. Independently I build Cunning3D, a procedural authoring platform, and Metra, the Rust-native GPU-driven GUI framework underneath it — written because DCC-scale and agent-facing tools stall on Web/Electron.',
            interests: [
                'Runtime PCG',
                'Engine Systems',
                'Open World',
                'AI × Games',
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
                    value: 'Runtime PCG · Engine Systems',
                    detail: 'Procedural world generation that runs live, not offline',
                },
                {
                    label: 'Breakthrough',
                    value: 'Offline-Grade PCG, Delivered at Runtime',
                    detail: 'Terrain and geometry generation in-engine, with streaming and open-world scale',
                },
                {
                    label: 'Shipped',
                    value: 'Flagship Open Worlds',
                    detail: 'Road systems and asset pipelines stable through public reveal and testing',
                },
                {
                    label: 'Platformized',
                    value: 'Shared PCG Backend',
                    detail: 'One generation core adopted across multiple company projects',
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
                    summary:
                        'Owned the 0→1 road generation system and the large-world asset partitioning/packaging pipeline for a flagship open-world title. Both ran stable through the first PV reveal, and the project became a NetEase flagship.',
                    bullets: [
                        'Built the road generation system end-to-end: core data model, generation logic, editor workflow, and engine integration.',
                        'Built the large-world asset partitioning and packaging pipeline: dependency resolution, standardized outputs, and automated validation.',
                        'Sustained both systems in production through the first PV reveal without regressions.',
                        'Co-developed the traffic-graph data system, supported scene-load optimization, and maintained mobile open-world PCG asset workflows at production scale.',
                    ],
                    tags: ['C++', 'C#', 'PCG', 'Tooling', 'Pipeline'],
                },
                {
                    company: '妙世界科技',
                    role: 'Technical Art Lead · City PCG & Terrain',
                    start: '2024.05',
                    end: '2025.07',
                    summary:
                        'Led the TA team while personally building the project’s city PCG generation and dual-platform large-world terrain. The project reached #1 on the TapTap popularity chart at its first public test.',
                    bullets: [
                        'Solo-built the city PCG generation system and the dual-platform (PC + mobile) large-world terrain solution.',
                        'Built and maintained the asset packaging pipeline, improving delivery consistency and cross-team handoff.',
                        'Directed development of the animation toolset, setting technical direction for the team rather than implementing it alone.',
                        'Partnered with engineering to unblock mobile build, packaging, and integration workflows.',
                    ],
                    tags: ['City PCG', 'Terrain', 'Open World', 'Pipeline'],
                },
                {
                    company: 'miHoYo · Vasapura',
                    role: 'Runtime PCG Engineer · AI Game Project',
                    start: '2025.07',
                    end: '2026.03',
                    summary:
                        'Maintained the city PCG pipeline, then delivered the project’s core technical breakthrough: terrain and island generation executed at runtime rather than baked offline — the class of PCG content usually presented as an offline pipeline, made live.',
                    bullets: [
                        'Built runtime real-time PCG terrain and island generation for an AI game project.',
                        'Moved terrain and geometry generation into the runtime — conference-grade procedural content (comparable to published Ubisoft PCG work) delivered live instead of pre-baked.',
                        'Carried streaming and open-world support through the runtime path, so generated worlds hold up at production scale.',
                        'Hardened the system into a shared PCG backend now adopted across multiple company projects.',
                        'Maintained and extended the existing city PCG pipeline alongside the new runtime work.',
                    ],
                    tags: ['Runtime PCG', 'Terrain', 'Streaming', 'Rust', 'C++'],
                },
                {
                    company: 'miHoYo · Anti-Entropy',
                    role: 'AI Technology R&D Group',
                    start: '2026.03',
                    end: '2026.07',
                    summary:
                        'Moved internally to the AI technology R&D department, carrying the runtime island and terrain generation work into an AI-driven research context.',
                    bullets: [
                        'Continued the runtime island/terrain generation line of work inside the AI R&D department.',
                        'Applied runtime procedural world generation in an AI-driven research and production setting.',
                    ],
                    tags: ['AI R&D', 'Runtime PCG', 'World Generation'],
                },
            ],
        },
        projects: {
            title: 'Selected Works',
            items: [
                {
                    name: 'Runtime PCG Terrain & Island Generation',
                    description:
                        'Real-time procedural terrain, geometry, and island generation executed at runtime, with streaming and open-world support — now a shared PCG backend across multiple projects.',
                    highlights: [
                        'Takes procedural content of the kind usually shown as an offline pipeline and delivers it live in the runtime.',
                        'Streaming and large-world support carried through the runtime path, so generation holds at production scale.',
                        'Generalized from one AI game project into reusable backend infrastructure adopted company-wide.',
                    ],
                    tags: ['Runtime PCG', 'Terrain', 'Streaming', 'Open World', 'Rust'],
                },
                {
                    name: 'Cunning3D',
                    description:
                        'An independent procedural authoring platform (DCC) built around a reusable Rust kernel, node-graph workflows, and creator-facing tools — the same class of system as Houdini-style procedural authoring, built from scratch.',
                    highlights: [
                        'A complete, runnable system rather than a mockup: node graph, geometry kernel, viewport, and tooling all live in one Rust codebase.',
                        'Reusable kernel design lets the same operators drive both authoring-time graphs and runtime generation.',
                        'Runs on Metra, the self-built native GUI framework, so the editor avoids the Web/Electron performance ceiling.',
                        'Doubles as the testbed for graph-based authoring and AI-native creation workflow.',
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
                    name: 'Metra — Rust-Native GPU-Driven GUI Framework',
                    description:
                        'A self-built native GUI, app, and rendering framework written to solve a concrete problem: DCC tools and agent-facing apps built on Web/Electron stalls under real workloads. Metra puts UI on a GPU-driven Rust-native runtime instead.',
                    highlights: [
                        'Built to replace the Web/Electron route for DCC-scale interfaces, where large node graphs and heavy tool panels expose latency and jank the browser stack cannot absorb.',
                        'GPU-driven rendering: text, SVG, SDF, images, paths, and native surfaces share one pipeline, with a Vulkan (ash) route for native PC performance and WGPU for cross-platform reach.',
                        'Semantic action reflection makes the same native UI operable by humans and agents — controls expose stable ids, roles, values, and action contracts, so agents observe and act through the UI instead of brittle scripted automation.',
                        'Native capture reads frames back out of the render pipeline itself rather than scraping the OS screen, so an agent gets the actual presented image alongside the pipeline state that produced it.',
                        'That pairing lets agents localize geometry and rendering defects at both pixel and pipeline level: what is wrong on screen, and which stage of the render graph it came from.',
                        'Retained UI runtime with immediate authoring and native Hot UI for fast iteration on real application surfaces.',
                        'Serves as the application and tooling layer for Cunning3D, so the framework is validated against a real product rather than demos.',
                    ],
                    tags: [
                        'Rust',
                        'GUI Framework',
                        'GPU-Driven',
                        'Vulkan',
                        'WGPU',
                        'Agent Reflection',
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
                    name: 'PCG Road System · Project Mugen',
                    description:
                        'A production road authoring system designed for scale, reliability, and day-to-day content iteration.',
                    highlights: [
                        'End-to-end ownership from design to implementation and iteration with content teams.',
                        'Treats tooling as product surface: usability, stability, and iteration speed all mattered.',
                    ],
                    tags: ['PCG', 'C++', 'Tools'],
                },
                {
                    name: 'Seamless Open World Streaming',
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
                { name: 'Languages', items: ['Rust', 'C++', 'C#'] },
                {
                    name: 'Runtime Systems',
                    items: [
                        'Runtime PCG',
                        'Terrain & geometry generation',
                        'Streaming',
                        'Open-world scale',
                    ],
                },
                {
                    name: 'PCG / Open World',
                    items: [
                        'Road & city generation',
                        'Traffic graphs',
                        'Island & terrain generation',
                        'Asset partitioning & packaging',
                    ],
                },
                {
                    name: 'Engine & Tooling',
                    items: [
                        'Editor tools',
                        'Graph workflows',
                        'Reusable kernels & backends',
                        'Native GUI frameworks',
                        'GPU-driven UI (Vulkan / WGPU)',
                        'AI-native workflows',
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
                'Open to game development engineering roles in runtime systems, PCG, and AI × games. Email is best.',
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
            description: 'Runtime PCG、引擎系统与大世界工具链——在旗舰项目上真正跑到上线。',
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
            name: 'Shuangqing Liu',
            title: 'Runtime PCG / 引擎系统 / 大世界工具链',
            location: '上海',
            email: '0x1900.eth@gmail.com',
            bio: '我做游戏程序化生成系统，并且把它们真正跑到上线。核心能力是 Runtime PCG：把通常只存在于离线 DCC 管线里的地形、几何与岛屿级世界生成搬进运行时实时兑现，并且完整带上流式加载与大世界规模支持。这套东西已经沉淀成公司级 PCG 后端，被多个项目复用。在此之前，我在旗舰开放世界项目上负责道路生成系统与大世界资产分割打包管线，稳定支撑到 PV 首爆与首测。技术栈覆盖 Rust / C++ / C#，横跨运行时、编辑器与工具链。个人项目上独立开发 Cunning3D（程序化创作平台）与其底层的 Metra——一个 Rust 原生、GPU 驱动的 GUI 框架，动机是 DCC 量级与 Agent 类工具在 Web / Electron 上会卡。',
            interests: ['Runtime PCG', '引擎系统', '大世界', 'AI × 游戏'],
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
                    value: 'Runtime PCG · 引擎系统',
                    detail: '程序化世界生成在运行时实时兑现，而不是离线烘出来',
                },
                {
                    label: '技术突破',
                    value: '离线级 PCG，Runtime 兑现',
                    detail: '地形与几何生成搬进运行时，并带流式加载与大世界支持',
                },
                {
                    label: '落地',
                    value: '旗舰级开放世界',
                    detail: '道路系统与资产管线稳定支撑到 PV 首爆与首测',
                },
                {
                    label: '平台化',
                    value: '公司级 PCG 后端',
                    detail: '一套生成内核被多个项目复用',
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
                    summary:
                        '负责从 0 到 1 的道路生成系统，以及大世界资产分割打包管线。两套系统稳定运行至 PV 首爆，项目成为网易旗舰项目。',
                    bullets: [
                        '从 0 到 1 搭建道路生成系统：核心数据、生成逻辑、编辑器工作流与引擎对接全部负责。',
                        '建设大世界资产分割打包管线：依赖处理、产物规范与自动化校验完整覆盖。',
                        '两套系统稳定运行至 PV 首爆，全程无回归事故。',
                        '与客户端共同建设交通 Graph 数据系统，支撑场景负载优化，并维护移动端开放世界 PCG 资产流程。',
                    ],
                    tags: ['C++', 'C#', 'PCG', '工具链', '管线'],
                },
                {
                    company: '妙世界科技',
                    role: 'TA 组长 · 城市 PCG 与地形',
                    start: '2024.05',
                    end: '2025.07',
                    summary:
                        '带 TA 组，同时个人独立完成项目的城市 PCG 生成与双端大世界地形。项目首爆测试登上 TapTap 人气榜首。',
                    bullets: [
                        'Solo 完成城市 PCG 生成系统，以及双端（PC + 移动）大世界 Terrain 方案。',
                        '建设并维护资产打包管线，提升交付一致性与跨团队交接质量。',
                        '指导动画工具集开发，负责技术方向把控而非独立实现。',
                        '与工程团队一起打通移动端构建、打包与资源集成流程。',
                    ],
                    tags: ['城市 PCG', 'Terrain', '大世界', '管线'],
                },
                {
                    company: '米哈游 · Vasapura',
                    role: 'Runtime PCG 工程师 · AI 游戏项目',
                    start: '2025.07',
                    end: '2026.03',
                    summary:
                        '负责城市 PCG 管线维护，并完成项目核心技术突破：地形与岛屿生成在 Runtime 实时兑现，而非离线烘制——把通常以离线管线形态呈现的 PCG 内容做成了实时的。',
                    bullets: [
                        '为 AI 游戏项目实现 Runtime 实时 PCG 地形与岛屿生成。',
                        '把地形生成与几何生成搬进 Runtime：达到育碧分享级的程序化内容规格，但以运行时实时兑现，而不是预先烘出。',
                        'Runtime 路径完整覆盖流式加载与大世界支持，保证生成结果在生产规模下站得住。',
                        '将系统沉淀为公司级 PCG 底层后端，已在多个项目中复用。',
                        '同时维护并扩展既有城市 PCG 管线。',
                    ],
                    tags: ['Runtime PCG', 'Terrain', '流式加载', 'Rust', 'C++'],
                },
                {
                    company: '米哈游 · 逆熵',
                    role: 'AI 技术研发组',
                    start: '2026.03',
                    end: '2026.07',
                    summary:
                        '内部转入 AI 技术研发部门，把 Runtime 岛屿与地形生成的工作延续到 AI 驱动的研发语境中。',
                    bullets: [
                        '在 AI 技术研发部门内延续 Runtime 岛屿 / 地形生成方向的工作。',
                        '在 AI 驱动的研发与生产场景中应用 Runtime 程序化世界生成。',
                    ],
                    tags: ['AI 研发', 'Runtime PCG', '世界生成'],
                },
            ],
        },
        projects: {
            title: '精选作品',
            items: [
                {
                    name: 'Runtime PCG 地形与岛屿生成',
                    description:
                        '在运行时实时执行的程序化地形、几何与岛屿生成，完整支持流式加载与大世界规模；现已成为跨项目复用的 PCG 底层后端。',
                    highlights: [
                        '把通常以离线管线形态呈现的程序化内容，做到运行时实时兑现。',
                        '流式加载与大世界支持贯穿 Runtime 路径，保证生成在生产规模下站得住。',
                        '从单个 AI 游戏项目泛化为可复用后端基础设施，被公司多个项目采用。',
                    ],
                    tags: ['Runtime PCG', 'Terrain', '流式加载', '大世界', 'Rust'],
                },
                {
                    name: 'Cunning3D',
                    description:
                        '围绕可复用 Rust 内核、节点图工作流与创作者工具从零搭建的独立程序化创作平台（DCC），对标 Houdini 一类的程序化创作系统。',
                    highlights: [
                        '不是概念图，而是完整可运行的系统：节点图、几何内核、视口与工具链都在同一套 Rust 代码库里。',
                        '可复用内核设计让同一套算子既能驱动创作期 Graph，也能用于运行时生成。',
                        '运行在自研 GUI 框架 Metra 之上，因此编辑器不受 Web / Electron 的性能天花板限制。',
                        '同时作为图式创作与 AI 原生工作流的试验场。',
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
                    name: 'Metra — Rust 原生 GPU 驱动 GUI 框架',
                    description:
                        '自研的原生 GUI / 应用 / 渲染框架，起因是一个很具体的问题：DCC 工具与 Agent 应用建在 Web / Electron 上，在真实负载下会卡。Metra 把 UI 放到 GPU 驱动的 Rust 原生运行时上重做。',
                    highlights: [
                        '针对 DCC 量级界面替换 Web / Electron 路线——大规模节点图与重型工具面板会暴露浏览器栈吸收不掉的延迟与卡顿。',
                        'GPU 驱动渲染：文本、SVG、SDF、图像、路径与原生表面进入同一条管线；Vulkan（ash）负责 PC 原生高性能路线，WGPU 负责跨平台兼容路线。',
                        '语义化 Action 反射让人和 Agent 操作同一套原生 UI：控件暴露稳定 id、role、value 与 action 契约，Agent 通过 UI 本身观察与执行，而不是靠脆弱的脚本自动化。',
                        '原生截图直接从渲染管线回读帧，而不是去抓操作系统屏幕，因此 Agent 拿到的是真实呈现结果，并且能同时拿到产生这一帧的管线状态。',
                        '这套组合让 Agent 能做像素级 + 管线级的几何与渲染问题定位：画面上哪里不对，以及它来自 Render Graph 的哪一级。',
                        'Retained UI 运行时 + 即时式编写 + 原生 Hot UI，支持在真实应用界面上快速迭代。',
                        '作为 Cunning3D 的应用与工具层，框架是在真实产品上验证的，而不是靠 demo。',
                    ],
                    tags: [
                        'Rust',
                        'GUI 框架',
                        'GPU 驱动',
                        'Vulkan',
                        'WGPU',
                        'Agent 反射',
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
                    name: 'PCG 道路系统 · 《无限大》',
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
                { name: '语言', items: ['Rust', 'C++', 'C#'] },
                {
                    name: '运行时系统',
                    items: ['Runtime PCG', '地形与几何生成', '流式加载', '大世界规模'],
                },
                {
                    name: 'PCG / 大世界',
                    items: ['道路与城市生成', '交通 Graph', '岛屿与地形生成', '资产分割与打包'],
                },
                {
                    name: '引擎与工具',
                    items: [
                        '编辑器工具',
                        'Graph 工作流',
                        '可复用内核与后端',
                        '原生 GUI 框架',
                        'GPU 驱动 UI（Vulkan / WGPU）',
                        'AI 原生工作流',
                    ],
                },
            ],
        },
        education: {
            title: '教育',
            items: [],
        },
        contact: {
            title: '联系',
            subtitle: '正在寻找游戏开发工程师机会，方向为运行时系统、PCG 与 AI × 游戏；优先邮件。',
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
