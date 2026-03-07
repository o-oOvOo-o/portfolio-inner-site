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
    layout?: 'default' | 'wide';
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
            en: 'A curated urban-world case study centered on spatial composition, city-scale procedural thinking, and the translation of tool-driven systems into cinematic, player-facing environments.',
            zh: '一组围绕城市开放世界展开的案例研究，关注空间组织、城市尺度的程序化思维，以及如何把工具驱动的系统转译成具有叙事感的玩家视角环境。',
        },
        coverSrc: '/portfolio/project-mugen/city-crossing.jpg',
        coverCaption: {
            en: 'Project Mugen city cover',
            zh: '无限大城市封面',
        },
        bullets: [
            {
                en: 'Frames the city not only as technical output, but as a designed atmosphere shaped through scale, circulation, and viewpoint.',
                zh: '这部分把“城市”视为被设计出来的空间氛围，而不只是技术产出；尺度、流线与视角共同构成它的视觉语言。',
            },
            {
                en: 'Brings together editor evidence and presentation shots, allowing process and final visual language to be read as one continuous design story.',
                zh: '我把编辑器证据与展示镜头并置，让过程与最终效果能够被读成同一条连续的设计叙事。',
            },
            {
                en: 'The preserved bridge-tool animation functions as process material, closer to the development sheets often expected in an application portfolio.',
                zh: '保留下来的天桥工具 GIF 更像申请作品集里的过程页材料，能直接说明方法，而不只是结果。',
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
                src: '/portfolio/project-mugen/light-rail-shot.jpg',
                caption: {
                    en: 'Light-rail / transit presentation shot.',
                    zh: '城市轻轨 / 轨道展示镜头。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/project-mugen/elevated-track-shot.jpg',
                caption: {
                    en: 'Elevated track and road composition.',
                    zh: '高架轨道与道路组合镜头。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/project-mugen/skyline-tower-shot.jpg',
                caption: {
                    en: 'Skyline tower / megastructure beauty shot.',
                    zh: '天际线与巨构地标镜头。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/project-mugen/sunset-avenue-shot.jpg',
                caption: {
                    en: 'Sunset avenue shot from the city deck.',
                    zh: '作品集中拆出的城市黄昏街景。',
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
            en: 'A character-tooling case study focused on motion, rig logic, and readability: from ragdoll setup to animation browsing, collision fitting, and asset inspection.',
            zh: '一个围绕角色运动与工具可读性展开的案例页面，涵盖 ragdoll 配置、动作库浏览、物理骨架检查与碰撞体拟合。',
        },
        coverSrc: '/portfolio/fallen-moon/ragdoll-ui.png',
        coverCaption: {
            en: 'Fallen Moon tooling cover',
            zh: '月球陨落工具封面',
        },
        bullets: [
            {
                en: 'Presented as a compact case study, it highlights how interface decisions support animation workflow rather than merely listing features.',
                zh: '页面以“案例研究”的方式组织内容，强调界面决策如何服务动画工作流，而不只是罗列功能。',
            },
            {
                en: 'Animated captures make timing, hierarchy, and inspection behavior legible in a way static screenshots cannot.',
                zh: '动态捕捉让时间关系、层级结构与检查逻辑都更易理解，这是静态截图难以替代的。',
            },
            {
                en: 'One stable interface frame paired with multiple motion studies reads closer to the process boards commonly seen in application portfolios.',
                zh: '一张稳定界面图配合多段运动研究，更接近留学申请作品集中常见的过程展示方式。',
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
            en: 'A small but deliberate prototype exploring how AI-assisted recoloring can enter an art workflow as a controlled post-processing instrument rather than a novelty.',
            zh: '一个规模不大但研究意图明确的原型：把 AI 辅助换色放进真实美术流程中，作为可控的后处理工具，而不是单纯的新奇功能。',
        },
        coverSrc: '/portfolio/aigc-color-tool/texture-recolor-ui.png',
        coverCaption: {
            en: 'AIGC recolor tool cover',
            zh: 'AIGC 换色工具封面',
        },
        bullets: [
            {
                en: 'The project asks where authorship, control, and efficiency can coexist when generative tooling is introduced into production.',
                zh: '它讨论的不是“能不能生成”，而是作者控制、效率与风格一致性如何在流程中共存。',
            },
            {
                en: 'The moving example foregrounds transformation and iteration, which is more persuasive than a single final swatch.',
                zh: '动图强调颜色转译与迭代过程，因此比单张最终效果图更有说服力。',
            },
            {
                en: 'Its scale is intentionally modest, but it clearly communicates a research-minded attitude within the larger portfolio.',
                zh: '虽然体量较小，但它在整套作品集中清楚地表达了我对研究型工具的兴趣。',
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
            en: 'A systems-oriented city study that combines road editing, traffic logic, and presentation imagery into one narrative about structure, movement, and urban readability.',
            zh: '一组关于城市结构与流动关系的系统性研究，把道路编辑、交通逻辑与氛围化镜头整合为同一叙事。',
        },
        coverSrc: '/portfolio/city-pcg/road-network-overview.png',
        coverCaption: {
            en: 'City PCG cover',
            zh: '城市 PCG 封面',
        },
        bullets: [
            {
                en: 'The road network is treated as both interface design and spatial composition, rather than as background infrastructure alone.',
                zh: '我把路网视为界面设计与空间构成的交叉问题，而不是单纯的背景基础设施。',
            },
            {
                en: 'Night scenes and debug views are kept together to show how analytical diagrams can coexist with atmosphere.',
                zh: '夜景镜头与调试视图并置，说明分析性图层也可以与氛围表达同时成立。',
            },
            {
                en: 'The module diagram keeps the system legible, echoing the explanatory drawings often expected in academic portfolios.',
                zh: '模块拆解图让系统逻辑保持可读，这种解释性表达也很接近学术类作品集常见的版面方式。',
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
                src: '/portfolio/city-pcg/lane-module-diagram.png',
                caption: {
                    en: 'Lane module breakdown.',
                    zh: '车道模块拆解图。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/city-pcg/road-blockout-overview.jpg',
                caption: {
                    en: 'Road blockout overview for city layout iteration.',
                    zh: '用于城市布局迭代的路网白模总览。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/city-pcg/night-crossing-shot.jpg',
                caption: {
                    en: 'Night crossing shot tied back to the road system.',
                    zh: '和路网系统关联的夜景路口镜头。',
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
            en: 'A process-heavy archive that foregrounds interface logic, debugging, and iterative experiments, treating tools themselves as design artifacts worthy of presentation.',
            zh: '一组强调界面逻辑、调试过程与迭代实验的过程档案，把“工具本身”作为值得展示的设计对象。',
        },
        coverSrc: '/portfolio/world-tools/cover.jpg',
        coverCaption: {
            en: 'World tools cover',
            zh: '大世界工具封面',
        },
        bullets: [
            {
                en: 'Panels, parameter sheets, and devlogs are treated as visual material, much like process boards in an application portfolio.',
                zh: '参数面板、设置表与 Devlog 在这里被当作视觉材料处理，类似申请作品集里的草图板与过程板。',
            },
            {
                en: 'Manual junction editing, CSG tests, and seamless-world research are shown together to reveal a sustained interest in systems thinking.',
                zh: '手动路口编辑、CSG 验证与无缝世界研究共同呈现出我对系统思维的持续兴趣。',
            },
            {
                en: 'The page deliberately privileges method and authorship over polish, which clarifies how the work was actually made.',
                zh: '这页刻意优先展示方法与作者判断，而不是只追求一张光鲜的结果图。',
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
            en: 'A recent case study on the dialogue between terrain and infrastructure, asking how realtime road editing can become a spatial design problem rather than a purely technical one.',
            zh: '一项较新的案例研究，讨论地形与基础设施之间的对话：实时道路编辑如何从纯技术问题转变为空间设计问题。',
        },
        coverSrc: '/portfolio/terrain-road-2025/cover.jpg',
        coverCaption: {
            en: 'Realtime road × terrain cover',
            zh: '实时道路 × 地形封面',
        },
        bullets: [
            {
                en: 'The page focuses on relationships—road, slope, spline, and junction—so it reads as landscape composition as much as tool development.',
                zh: '页面关注的是道路、坡度、Spline 与路口之间的关系，因此它既是工具开发，也是地形与景观构成。',
            },
            {
                en: 'Extended GIFs work like moving process sheets, making temporal decisions visible across editing, fusion, and assembly.',
                zh: '较长的 GIF 像会动的过程页，把编辑、融合与搭建中的时间性决策展示出来。',
            },
            {
                en: 'Diagrams and live captures are paired so conceptual framing and executable implementation remain visible at the same time.',
                zh: '图示与实录并置，分别承担概念框架与可执行实现，两者共同构成完整论述。',
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
            en: 'A study-led procedural exploration centered on rock generation and environment assembly, tracing the movement from formal experimentation to spatial atmosphere.',
            zh: '一组以研究为导向的程序化练习，围绕岩石生成与环境搭建，记录从形式实验到空间氛围形成的过渡。',
        },
        coverSrc: '/portfolio/procedural-practice/cover.jpg',
        coverCaption: {
            en: 'Procedural practice cover',
            zh: '程序化练习封面',
        },
        bullets: [
            {
                en: 'These exploratory studies remain in the portfolio to show how technical learning also shapes visual language.',
                zh: '我保留了这些更偏探索性的内容，用来说明技术学习也在塑造我的视觉语言。',
            },
            {
                en: 'The UI, workflow GIF, wireframes, and final images are arranged like a small development board.',
                zh: '参数界面、工作流 GIF、线框图与结果图的排列方式，更接近一个小型 development board。',
            },
            {
                en: 'Within an application portfolio, this section supports a narrative of iterative making rather than pure production readiness.',
                zh: '对于申请作品集而言，这部分能补充“持续迭代、边做边研究”的工作方法。',
            },
        ],
        tags: ['Houdini', 'HDA', 'Procedural', 'Environment', 'Practice'],
        media: [
            {
                type: 'image',
                src: '/portfolio/procedural-practice/rock-workflow.gif',
                caption: {
                    en: 'Houdini workflow scene study, UE4.26.',
                    zh: 'houdini工作流场景练习 ue4.26',
                },
                layout: 'wide',
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
            en: 'A quieter personal section combining environment studies, a small game prototype, and foundational art exercises; it broadens the portfolio beyond strictly technical authorship.',
            zh: '一组更安静、也更个人化的页面：包含环境练习、小型游戏原型，以及一些素描与绘画基础，用来把作品集从纯技术作者扩展到更完整的创作个体。',
        },
        coverSrc: '/portfolio/practice/town-scene.jpg',
        coverCaption: {
            en: 'Practice archive cover',
            zh: '练习档案封面',
        },
        bullets: [
            {
                en: 'Scene work, interaction mockups, and drawing practice share one page, closer to the balance often expected in school applications.',
                zh: '场景、交互截图与基础美术练习被放在同一页里，这种平衡也更接近留学申请作品集的阅读期待。',
            },
            {
                en: 'The fragments are modest in scale, but they reveal sensitivity to mood, staging, and character.',
                zh: '这些片段体量不大，但能看出我对氛围、调度与角色感的敏感度。',
            },
            {
                en: 'Placed beside the tooling-heavy pages, this section softens the portfolio and makes its overall voice more personal.',
                zh: '放在工具页旁边，它能让整个作品集的声音更柔和，也更像个人叙事。',
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
                src: '/portfolio/practice/minigame-town-night.jpg',
                caption: {
                    en: 'Mini-game town night scene.',
                    zh: '小游戏夜景小镇场景。',
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
                src: '/portfolio/practice/minigame-dialogue-shot.jpg',
                caption: {
                    en: 'Mini-game dialogue / UI screenshot.',
                    zh: '小游戏对话 / UI 截图。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/practice/minigame-combat-shot.jpg',
                caption: {
                    en: 'Mini-game combat / gameplay screenshot.',
                    zh: '小游戏战斗 / 玩法截图。',
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
            en: 'An early archive of modding, asset-making, and server-side experimentation that functions less as polished work and more as evidence of a long-running making culture.',
            zh: '一个更早期的兴趣档案，包含 modding、资源制作与服务器侧实验；它未必最成熟，却清楚说明了“长期自发创作”这件事。',
        },
        coverSrc: '/portfolio/hobby-modchina/weapon-kit.jpg',
        coverCaption: {
            en: 'Legacy hobby/mod cover',
            zh: '旧 hobby / mod 封面',
        },
        bullets: [
            {
                en: 'It restores the starting point of the portfolio timeline, showing that tool-oriented thinking began long before formal TA work.',
                zh: '它把个人时间线的起点重新补回来，说明我对工具与内容的兴趣早于正式 TA 工作。',
            },
            {
                en: 'Plugin captures, old props, and gameplay screenshots are presented as historical process material rather than contemporary hero pieces.',
                zh: '插件截图、旧道具与玩法画面在这里更像历史性的过程材料，而不是今天的主视觉。',
            },
            {
                en: 'For an application portfolio, this page adds continuity, self-direction, and a clearer sense of trajectory.',
                zh: '对于申请作品集来说，这页补充了持续性、自驱力，以及一条更清楚的成长轨迹。',
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
