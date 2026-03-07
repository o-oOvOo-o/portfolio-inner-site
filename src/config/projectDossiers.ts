export type DossierLocale = 'en' | 'zh';

type LocalizedText = {
    en: string;
    zh: string;
};

export interface ProjectDossierMedia {
    type: 'image' | 'video';
    src: string;
    caption: LocalizedText;
    poster?: string;
}

export interface ProjectDossier {
    slug: string;
    title: LocalizedText;
    period: string;
    summary: LocalizedText;
    coverSrc: string;
    coverCaption: LocalizedText;
    bullets: LocalizedText[];
    tags: string[];
    media: ProjectDossierMedia[];
}

export const PROJECT_DOSSIERS: ProjectDossier[] = [
    {
        slug: 'project-mugen',
        title: {
            en: 'Project Mugen / Infinite City Toolkit',
            zh: '无限大 / 城市内容工具集',
        },
        period: '2021.7 – 2024.6',
        summary: {
            en: 'Extracted from the 2021–2025 portfolio deck: city-scale open-world content work covering procedural roads, elevated roads, pedestrian bridges, and readable urban presentation shots.',
            zh: '从 2021–2025 作品集里拆出的城市向内容片段：涵盖程序化道路、高架、天桥，以及面向开放世界展示的城市镜头素材。',
        },
        coverSrc: '/portfolio/project-mugen/city-crossing.jpg',
        coverCaption: {
            en: 'Project Mugen city cover',
            zh: '无限大城市封面',
        },
        bullets: [
            {
                en: 'Collected the city-facing visuals into one dossier so the website no longer depends on the original PPTX.',
                zh: '把城市方向的核心视觉统一整理成网页档案，不再依赖原始 PPTX 才能浏览。',
            },
            {
                en: 'Shows both presentation shots and editor-side construction results, so viewers can see outcome and process together.',
                zh: '同时展示结果镜头与编辑器构建画面，让浏览者能同时看到效果与制作过程。',
            },
            {
                en: 'Preserves the animated bridge-tool GIF as a local asset for self-hosted deployment.',
                zh: '保留了会动的天桥工具 GIF，并转成本地资源，适合直接自托管部署。',
            },
        ],
        tags: ['Open World', 'City PCG', 'Pedestrian Bridge', 'Showcase'],
        media: [
            {
                type: 'image',
                src: '/portfolio/project-mugen/city-crossing.jpg',
                caption: {
                    en: 'Playable city street shot from the deck.',
                    zh: '作品集里的城市街景展示镜头。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/project-mugen/city-aerial.jpg',
                caption: {
                    en: 'Aerial view showing multilayer traffic and city layout.',
                    zh: '多层交通与城市结构的俯视镜头。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/project-mugen/pedestrian-bridge.png',
                caption: {
                    en: 'Pedestrian bridge construction result.',
                    zh: '天桥构建结果图。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/project-mugen/bridge-tool.gif',
                caption: {
                    en: 'Animated bridge-tool workflow extracted from the deck.',
                    zh: '从作品集拆出的天桥工具动态流程。',
                },
            },
        ],
    },
    {
        slug: 'fallen-moon',
        title: {
            en: 'Fallen Moon Animation Tooling',
            zh: '月球陨落动画工具链',
        },
        period: '2021.7 – 2021.11',
        summary: {
            en: 'A compact documentation slice focused on animation-side tool development: ragdoll setup, animation library browsing, physics rig inspection, and character collision fitting.',
            zh: '聚焦动画侧工具开发的文档片段：包括 ragdoll 配置、动作库浏览、物理骨架检查，以及角色碰撞体拟合。',
        },
        coverSrc: '/portfolio/fallen-moon/ragdoll-ui.png',
        coverCaption: {
            en: 'Fallen Moon tooling cover',
            zh: '月球陨落工具封面',
        },
        bullets: [
            {
                en: 'Turns a previously slide-bound tool summary into browsable web documentation.',
                zh: '把原本只能在幻灯片里看的工具总结，改造成网页可浏览文档。',
            },
            {
                en: 'Keeps multiple animated GIFs so the tools read as workflows instead of static screenshots.',
                zh: '保留多张动态 GIF，让这些工具展示的是“流程”而不是静态截图。',
            },
            {
                en: 'Pairs one stable UI screenshot with several process animations for easier storytelling.',
                zh: '用一张稳定界面图配多张流程动图，更适合讲清楚工具价值。',
            },
        ],
        tags: ['Animation', 'Ragdoll', 'Physics', 'Character Tools'],
        media: [
            {
                type: 'image',
                src: '/portfolio/fallen-moon/ragdoll-ui.png',
                caption: {
                    en: 'Ragdoll editor UI snapshot.',
                    zh: 'Ragdoll 编辑器界面。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/fallen-moon/animation-browser.gif',
                caption: {
                    en: 'Animation browser workflow.',
                    zh: '动作库浏览工具流程。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/fallen-moon/physics-rig.gif',
                caption: {
                    en: 'Physics / body setup inspection.',
                    zh: '物理骨架配置检查。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/fallen-moon/mesh-inspection.gif',
                caption: {
                    en: 'Character mesh inspection and comparison.',
                    zh: '角色模型检查与对比。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/fallen-moon/capsule-fit.gif',
                caption: {
                    en: 'Collision capsule fitting workflow.',
                    zh: '碰撞体拟合流程。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/fallen-moon/monster-skeleton-panel.png',
                caption: {
                    en: 'Monster skeleton / asset inspection panel.',
                    zh: '怪物骨架与资源检查面板。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/fallen-moon/encounter-shot.png',
                caption: {
                    en: 'In-engine encounter / crowd shot.',
                    zh: '引擎内遭遇战 / 群组展示镜头。',
                },
            },
        ],
    },
    {
        slug: 'aigc-color-tool',
        title: {
            en: 'AIGC Texture Recolor Tool',
            zh: 'AIGC 贴图换色工具',
        },
        period: 'R&D / Unity',
        summary: {
            en: 'A small but practical R&D thread: integrating Stable Diffusion-assisted recoloring into a Unity workflow for secondary processing of marketplace assets.',
            zh: '一个很实用的小型研发方向：把 Stable Diffusion 辅助换色接入 Unity 流程，用于商城资产的二次加工。',
        },
        coverSrc: '/portfolio/aigc-color-tool/texture-recolor-ui.png',
        coverCaption: {
            en: 'AIGC recolor tool cover',
            zh: 'AIGC 换色工具封面',
        },
        bullets: [
            {
                en: 'Useful for testing whether AI-assisted art tooling can fit an existing production chain.',
                zh: '用于验证 AI 辅助美术工具能否接入既有生产链路。',
            },
            {
                en: 'The animated GIF preserves the live recolor effect rather than only the control panel.',
                zh: '动态图保留了实际换色过程，而不是只剩一张控制面板截图。',
            },
            {
                en: 'Kept local so it ships with the portfolio without any external dependency.',
                zh: '全部本地化后可直接跟随作品集发布，不依赖外部服务。',
            },
        ],
        tags: ['Unity', 'AIGC', 'Stable Diffusion', 'Tooling'],
        media: [
            {
                type: 'image',
                src: '/portfolio/aigc-color-tool/texture-recolor-ui.png',
                caption: {
                    en: 'Tool UI and preview area.',
                    zh: '工具界面与预览区域。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/aigc-color-tool/texture-recolor.gif',
                caption: {
                    en: 'Animated recolor result.',
                    zh: '动态换色结果。',
                },
            },
        ],
    },
    {
        slug: 'city-pcg',
        title: {
            en: 'City PCG / Road Network / Traffic Graph',
            zh: '城市 PCG / 路网 / Traffic Graph',
        },
        period: '2023 – 2025',
        summary: {
            en: 'This dossier collects the strongest road-generation material from the deck: urban layout overview, road-editor GIFs, traffic graph debugging, and night-time zone graph capture.',
            zh: '这一组整理了作品集里最强的道路生成素材：城市布局总览、路网编辑 GIF、Traffic Graph 调试，以及夜景 Zone Graph 演示。',
        },
        coverSrc: '/portfolio/city-pcg/road-network-overview.png',
        coverCaption: {
            en: 'City PCG cover',
            zh: '城市 PCG 封面',
        },
        bullets: [
            {
                en: 'Presents the road system as both a visual result and a technical editor tool.',
                zh: '把路网系统同时呈现为结果画面与编辑器工具，而不只是单一截图。',
            },
            {
                en: 'Night-time graph capture adds a more “shippable” feeling to the portfolio section.',
                zh: '夜景 Graph 演示让这一页更接近可上线产品的观感。',
            },
            {
                en: 'A compact module diagram stays beside the GIFs so the logic remains readable.',
                zh: '在动态图旁边保留模块化静态示意图，逻辑会更容易读懂。',
            },
        ],
        tags: ['Road Editor', 'Traffic Graph', 'Zone Graph', 'City Tools'],
        media: [
            {
                type: 'image',
                src: '/portfolio/city-pcg/road-network-overview.png',
                caption: {
                    en: 'Large-scale road network overview.',
                    zh: '大尺度路网总览。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/city-pcg/road-editor.gif',
                caption: {
                    en: 'Road editor animation.',
                    zh: '路网编辑器动态演示。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/city-pcg/traffic-graph.gif',
                caption: {
                    en: 'Traffic graph debug view.',
                    zh: 'Traffic Graph 调试视图。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/city-pcg/zone-graph-night.gif',
                caption: {
                    en: 'Night-time zone graph presentation.',
                    zh: '夜景 Zone Graph 展示。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/city-pcg/lane-module-diagram.png',
                caption: {
                    en: 'Lane module breakdown.',
                    zh: '车道模块拆解图。',
                },
            },
        ],
    },
    {
        slug: 'world-tools',
        title: {
            en: 'World Tools / Devlog / Seamless World',
            zh: '大世界工具 / Devlog / 无缝世界',
        },
        period: '2019 – 2025',
        summary: {
            en: 'A tooling-first dossier that keeps the panel UI, workflow notes, road devlogs, CSG/boolean experiments, and the seamless-world animation instead of reducing everything to beauty shots.',
            zh: '这一组更强调工具与过程：保留了面板 UI、工作流记录、道路 Devlog、CSG / Boolean 实验，以及无缝大世界动画，而不是只留下结果图。',
        },
        coverSrc: '/portfolio/world-tools/cover.jpg',
        coverCaption: {
            en: 'World tools cover',
            zh: '大世界工具封面',
        },
        bullets: [
            {
                en: 'Keeps panels, parameter sheets, and devlog captures so the engineering side stays readable.',
                zh: '保留参数面板、配置表和 Devlog 录屏，让工程侧信息仍然可读。',
            },
            {
                en: 'Puts manual junction editing, CSG/boolean checks, and seamless-world R&D into one local archive.',
                zh: '把手动路口编辑、CSG / Boolean 验证和无缝世界研发整理成一个本地档案。',
            },
            {
                en: 'Useful for readers who care more about workflow design and debugging traces than polished renders.',
                zh: '很适合更关心工作流设计和调试痕迹，而非纯渲染效果的浏览者。',
            },
        ],
        tags: ['Pipeline', 'Workflow', 'CSG', 'Boolean', 'Devlog'],
        media: [
            {
                type: 'image',
                src: '/portfolio/world-tools/animation-export-tool.png',
                caption: {
                    en: 'Animation export tool.',
                    zh: '动画导出工具。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/world-tools/weight-remap-tool.png',
                caption: {
                    en: 'Weight remap helper tool.',
                    zh: '权重重映射辅助工具。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/world-tools/parameter-sync-panel.png',
                caption: {
                    en: 'Parameter synchronization / batch panel.',
                    zh: '参数同步 / 批处理面板。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/world-tools/replace-workflow-panel.png',
                caption: {
                    en: 'Replace / remap workflow panel.',
                    zh: '替换 / 重映射工作流面板。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/world-tools/road-segment-devlog.gif',
                caption: {
                    en: 'Road-segment devlog GIF.',
                    zh: '路段 Devlog 动图。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/world-tools/manual-junction.gif',
                caption: {
                    en: 'Manual junction fine-tuning devlog.',
                    zh: '手动路口精调 Devlog。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/world-tools/junction-polygon.gif',
                caption: {
                    en: 'Junction polygon organization test.',
                    zh: '路口多边形组织测试。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/world-tools/csg-benchmark.gif',
                caption: {
                    en: 'CSG benchmark capture.',
                    zh: 'CSG 基准测试动画。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/world-tools/boolean-prototype.gif',
                caption: {
                    en: 'Boolean prototype recording.',
                    zh: 'Boolean 原型录屏。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/world-tools/seamless-world.gif',
                caption: {
                    en: 'Lightweight seamless-world GIF kept as animation.',
                    zh: '保留动态形式的无缝大世界 GIF。',
                },
            },
        ],
    },
    {
        slug: 'terrain-road-2025',
        title: {
            en: 'Realtime Road × Terrain Editor',
            zh: '实时道路 × 地形编辑',
        },
        period: '2025.1 – 2025.3',
        summary: {
            en: 'A newer R&D slice focused on editing realtime roads directly against terrain data: cross-sections, data flow, spline planning, terrain fusion, and a final city-intersection preview all inside one workflow.',
            zh: '一组更新的研发内容：把实时道路编辑直接和地形数据放进同一工作流中，覆盖截面设计、数据流、Spline 规划、地形融合，以及最终的城市场景预览。',
        },
        coverSrc: '/portfolio/terrain-road-2025/cover.jpg',
        coverCaption: {
            en: 'Realtime road × terrain cover',
            zh: '实时道路 × 地形封面',
        },
        bullets: [
            {
                en: 'Keeps road authoring and terrain processing in the same editor context so the interaction stays obvious.',
                zh: '把道路创作和地形处理放到同一编辑器语境中，交互关系一眼就能看懂。',
            },
            {
                en: 'Long GIF captures explain spline editing, terrain fusion, and final junction assembly better than a single still.',
                zh: '长 GIF 比单张截图更能说明 Spline 编辑、地形融合和路口搭建过程。',
            },
            {
                en: 'Pairs diagrams with live editor captures so both design thinking and output stay visible.',
                zh: '把流程图和实时编辑录屏放在一起，既能看到设计思路，也能看到实际产出。',
            },
        ],
        tags: ['Realtime Road', 'Terrain', 'Editor', 'Spline', 'R&D'],
        media: [
            {
                type: 'image',
                src: '/portfolio/terrain-road-2025/runtime-overview.png',
                caption: {
                    en: 'Realtime road / terrain runtime overview.',
                    zh: '实时道路 / 地形运行总览。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/terrain-road-2025/data-flow-diagram.png',
                caption: {
                    en: 'Road-terrain data flow sketch.',
                    zh: '道路 × 地形数据流示意。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/terrain-road-2025/system-diagram.png',
                caption: {
                    en: 'Full system diagram from the deck.',
                    zh: '从原作品集中拆出的完整系统图。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/terrain-road-2025/terrain-fusion.gif',
                caption: {
                    en: 'Terrain fusion / stamping workflow.',
                    zh: '地形融合 / 拓印工作流。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/terrain-road-2025/road-layout.gif',
                caption: {
                    en: 'Road layout editing and terrain interaction.',
                    zh: '道路布局编辑与地形交互。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/terrain-road-2025/spline-planning.gif',
                caption: {
                    en: 'Spline planning / lane routing capture.',
                    zh: 'Spline 规划 / 车道路由演示。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/terrain-road-2025/realtime-intersection.gif',
                caption: {
                    en: 'Realtime city intersection assembly.',
                    zh: '实时城市场景路口搭建。',
                },
            },
        ],
    },
    {
        slug: 'procedural-practice',
        title: {
            en: 'Procedural Practice / Rock HDA Studies',
            zh: '程序化练习 / 岩石 HDA 学习',
        },
        period: '2021 – 2024',
        summary: {
            en: 'Practice material around procedural world-building: rock-generation experiments, Houdini-style tooling, and scene assembly studies that bridge asset work and environment composition.',
            zh: '围绕程序化地编展开的一组练习素材：岩石生成实验、Houdini 式工具学习，以及连接资产制作与场景搭建的研究片段。',
        },
        coverSrc: '/portfolio/procedural-practice/cover.jpg',
        coverCaption: {
            en: 'Procedural practice cover',
            zh: '程序化练习封面',
        },
        bullets: [
            {
                en: 'Keeps the curiosity-driven procedural studies instead of only the production-facing tools.',
                zh: '除了面向生产的工具，也保留了更偏兴趣驱动的程序化研究内容。',
            },
            {
                en: 'Pairs one animated workflow GIF with parameter UI, final look, and wireframe comparisons.',
                zh: '用一张工作流动图配合参数界面、结果图和线框对照，阅读会更完整。',
            },
            {
                en: 'Works well as a Houdini / HDA learning dossier inside the portfolio.',
                zh: '很适合作为作品集里 Houdini / HDA 学习方向的补充档案。',
            },
        ],
        tags: ['Houdini', 'HDA', 'Procedural', 'Environment', 'Practice'],
        media: [
            {
                type: 'image',
                src: '/portfolio/procedural-practice/rock-workflow.gif',
                caption: {
                    en: 'Animated rock-generation / scene workflow.',
                    zh: '岩石生成与场景搭建流程动图。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/procedural-practice/rock-generator-ui.png',
                caption: {
                    en: 'Generator parameter UI.',
                    zh: '生成器参数界面。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/procedural-practice/rock-scene.jpg',
                caption: {
                    en: 'Rock scene result shot.',
                    zh: '岩石场景结果图。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/procedural-practice/character-clay.jpg',
                caption: {
                    en: 'Character + environment clay preview.',
                    zh: '角色与环境的灰模预览。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/procedural-practice/rock-shape-sheet.png',
                caption: {
                    en: 'Rock shape sheet / variation study.',
                    zh: '岩石形体与变体练习。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/procedural-practice/rock-wireframe-a.png',
                caption: {
                    en: 'Wireframe study A.',
                    zh: '线框研究 A。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/procedural-practice/rock-wireframe-b.png',
                caption: {
                    en: 'Wireframe study B.',
                    zh: '线框研究 B。',
                },
            },
        ],
    },
    {
        slug: 'practice',
        title: {
            en: 'Practice / Scenes / Art Studies',
            zh: '练习 / 场景 / 美术基础',
        },
        period: '2016 – 2025',
        summary: {
            en: 'A lighter personal archive: small scenes, prop studies, a mini-game clip, and a few anatomy / painting exercises that keep the portfolio from feeling purely industrial.',
            zh: '更偏个人向的一组归档：小场景、道具练习、小游戏片段，以及一些解剖 / 绘画基础练习，让作品集不至于只剩工业化工具感。',
        },
        coverSrc: '/portfolio/practice/town-scene.jpg',
        coverCaption: {
            en: 'Practice archive cover',
            zh: '练习档案封面',
        },
        bullets: [
            {
                en: 'Keeps scene, prop, mini-demo, and art-study material in one readable personal page.',
                zh: '把场景、道具、小 Demo 和美术基础练习整理成一页更容易浏览的个人档案。',
            },
            {
                en: 'This section is now focused on personal training, without mixing in the older modding archive.',
                zh: '这一页现在更聚焦个人训练内容，不再混入更早期的 mod / 插件档案。',
            },
            {
                en: 'Useful as a softer counterpart to the heavier TA / tooling sections.',
                zh: '作为 TA / 工具向页面之外的柔和补充，会让整体作品集更平衡。',
            },
        ],
        tags: ['Practice', 'Environment', 'Prop', 'Mini Demo', 'Art Study'],
        media: [
            {
                type: 'image',
                src: '/portfolio/practice/town-scene.jpg',
                caption: {
                    en: 'Stylized town scene.',
                    zh: '风格化城镇场景。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/practice/street-scene.jpg',
                caption: {
                    en: 'Street scene environment study.',
                    zh: '街景环境练习。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/practice/fuel-prop.jpg',
                caption: {
                    en: 'Vintage fuel prop study.',
                    zh: '复古加油机道具练习。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/practice/indoor-scene.jpg',
                caption: {
                    en: 'Interior scene / gameplay capture.',
                    zh: '室内场景 / 玩法截图。',
                },
            },
            {
                type: 'video',
                src: '/portfolio/practice/minigame-demo.mp4',
                caption: {
                    en: 'Mini-game demo clip from the deck.',
                    zh: '作品集里拆出的 MiniGame Demo 片段。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/practice/head-study-front.png',
                caption: {
                    en: 'Head sculpt study.',
                    zh: '头像雕刻练习。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/practice/head-study-side.png',
                caption: {
                    en: 'Head study from another angle.',
                    zh: '另一视角的人头练习。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/practice/portrait-painting.jpg',
                caption: {
                    en: 'Portrait painting study.',
                    zh: '肖像绘画练习。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/practice/figure-sketch.jpg',
                caption: {
                    en: 'Figure sketch study.',
                    zh: '人物速写练习。',
                },
            },
        ],
    },
    {
        slug: 'hobby-modchina',
        title: {
            en: 'Hobby Mods / Legacy Game Assets',
            zh: '旧 Hobby / Mod / 游戏资源',
        },
        period: '2009 – 2011',
        summary: {
            en: 'An older but still revealing archive: CS / L4D hobby modding, plugin work, server operation, and a batch of self-made props and weapon renders from the same period.',
            zh: '一组更早期但很能说明问题的档案：CS / L4D 兴趣 mod、插件开发、服务器搭建，以及同一时期制作的道具和枪械资源。',
        },
        coverSrc: '/portfolio/hobby-modchina/weapon-kit.jpg',
        coverCaption: {
            en: 'Legacy hobby/mod cover',
            zh: '旧 hobby / mod 封面',
        },
        bullets: [
            {
                en: 'Adds the earlier modding / plugin / server chapter back into the portfolio timeline.',
                zh: '把更早期的 modding / 插件 / 服务器阶段重新补回到个人时间线里。',
            },
            {
                en: 'Shows that making tools and content started long before the recent TA work.',
                zh: '能看出“做工具 + 做内容”的倾向，其实很早以前就已经开始了。',
            },
            {
                en: 'Old work, but it gives the overall portfolio a much clearer origin story.',
                zh: '虽然年代久远，但它能让整个作品集的起点更清楚，也更有辨识度。',
            },
        ],
        tags: ['CS 1.6', 'L4D', 'Modding', 'Props', 'Legacy'],
        media: [
            {
                type: 'image',
                src: '/portfolio/hobby-modchina/weapon-kit.jpg',
                caption: {
                    en: 'Weapon kit render set.',
                    zh: '枪械资源渲染集合。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/hobby-modchina/smg-kit.jpg',
                caption: {
                    en: 'SMG kit render set.',
                    zh: '冲锋枪资源展示。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/hobby-modchina/zeppelin.jpg',
                caption: {
                    en: 'Airship / prop render.',
                    zh: '飞艇道具渲染。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/hobby-modchina/church-prop.png',
                caption: {
                    en: 'Architecture prop study.',
                    zh: '建筑资源练习。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/hobby-modchina/chair-prop.png',
                caption: {
                    en: 'Chair prop render.',
                    zh: '座椅道具渲染。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/hobby-modchina/infected-corridor.jpg',
                caption: {
                    en: 'Old gameplay screenshot / mod scene.',
                    zh: '早期玩法截图 / Mod 场景。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/hobby-modchina/plugin-overlay.png',
                caption: {
                    en: 'Plugin / server-side overlay capture.',
                    zh: '插件 / 服务器侧界面截图。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/hobby-modchina/survival-scene.png',
                caption: {
                    en: 'Legacy survival-horror scene capture.',
                    zh: '早期生存恐怖场景截图。',
                },
            },
        ],
    },
];

export function getLocalizedText(
    value: LocalizedText,
    locale: DossierLocale
): string {
    return value[locale];
}
