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
            en: 'A flagship open-world authoring case study that connects city-scale procedural systems, road/traffic logic, and final presentation shots into one story about how tools become player-facing space.',
            zh: '一个围绕旗舰级开放世界创作系统展开的案例页，把城市尺度程序化、道路/交通逻辑与最终展示镜头收束到同一条叙事里，说明工具如何转化为玩家真正看到的空间。',
        },
        coverSrc: '/portfolio/project-mugen/city-crossing.jpg',
        coverCaption: {
            en: 'Project Mugen city cover',
            zh: '无限大城市封面',
        },
        bullets: [
            {
                en: 'Treats the city as the output of an authoring stack: layout, circulation, and spatial rhythm all come from system decisions.',
                zh: '这里把城市视为一整套创作系统的产物：布局、流线与空间节奏都来自底层工具决策。',
            },
            {
                en: 'Keeps editor evidence beside final shots so authorship and process stay visible instead of disappearing behind the beauty images.',
                zh: '我把编辑器证据和最终镜头并置，让作者性与过程证据不会被效果图完全遮住。',
            },
            {
                en: 'The preserved bridge-tool GIF works as workflow proof: a small but concrete example of creator-facing tooling in motion.',
                zh: '保留下来的天桥工具 GIF 更像工作流证据：它直接说明一个面向创作者的工具是如何运转的。',
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
            en: 'A creator-tooling case study centered on animation inspection, rig logic, and physics readability: from ragdoll setup to browsing, fitting, and asset review.',
            zh: '一个围绕动画检查、Rig 逻辑与物理可读性展开的创作者工具案例页，涵盖 ragdoll 配置、动作浏览、拟合与资产检查。',
        },
        coverSrc: '/portfolio/fallen-moon/ragdoll-ui.png',
        coverCaption: {
            en: 'Fallen Moon tooling cover',
            zh: '月球陨落工具封面',
        },
        bullets: [
            {
                en: 'The page emphasizes how interface decisions support animator workflow rather than simply listing tool features.',
                zh: '页面强调的是界面决策如何服务动画工作流，而不是单纯堆叠功能点。',
            },
            {
                en: 'Animated captures make timing, hierarchy, and inspection behavior legible in a way static screenshots cannot.',
                zh: '动态捕捉让时间关系、层级结构与检查逻辑都更易理解，这是静态截图难以替代的。',
            },
            {
                en: 'One stable interface frame paired with multiple motion studies makes the tool readable as both system design and user experience.',
                zh: '一张稳定界面图配合多段运动研究，让这个案例既能被读成系统设计，也能被读成工具体验设计。',
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
            en: 'A compact AI-authoring prototype exploring how assisted recoloring can enter an art workflow as a controllable tool instead of a novelty effect.',
            zh: '一个聚焦 AI 创作辅助的小型原型，讨论换色能力如何以“可控工具”的形式进入美术流程，而不是停留在新奇效果。',
        },
        coverSrc: '/portfolio/aigc-color-tool/texture-recolor-ui.png',
        coverCaption: {
            en: 'AIGC recolor tool cover',
            zh: 'AIGC 换色工具封面',
        },
        bullets: [
            {
                en: 'The key question is not whether AI can generate, but how authorship, control, and efficiency can coexist inside production.',
                zh: '它讨论的重点不是“AI 能不能生成”，而是作者控制、效率与风格一致性如何在生产里共存。',
            },
            {
                en: 'The moving example foregrounds transformation and iteration, which is more persuasive than a single final swatch.',
                zh: '动图强调颜色转译与迭代过程，因此比单张最终效果图更有说服力。',
            },
            {
                en: 'Its scale is intentionally modest, but it clearly signals a research-minded interest in controllable AI tooling.',
                zh: '虽然体量不大，但它非常明确地表达了我对“可控 AI 工具”的研究兴趣。',
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
            en: 'A systems case study about road authoring, traffic graphs, and urban readability, combining editor logic and presentation imagery into one continuous narrative.',
            zh: '一个关于道路创作、交通 Graph 与城市可读性的系统案例，把编辑器逻辑和最终展示镜头串成同一条连续叙事。',
        },
        coverSrc: '/portfolio/city-pcg/road-network-overview.png',
        coverCaption: {
            en: 'City PCG cover',
            zh: '城市 PCG 封面',
        },
        bullets: [
            {
                en: 'The road network is treated as both interface design and spatial composition, not merely as background infrastructure.',
                zh: '我把路网视为界面设计与空间构成的交叉问题，而不是单纯的背景基础设施。',
            },
            {
                en: 'Debug views and final shots are kept together so analytical diagrams can be read against atmosphere rather than hidden from it.',
                zh: '调试视图和最终镜头被放在一起，说明分析图并不需要和氛围表达割裂开来。',
            },
            {
                en: 'The module diagram keeps the system legible and makes authorship visible beyond the rendered result.',
                zh: '模块图让系统保持可读，也让作者性不只停留在渲染结果层面。',
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
            en: 'An archive of tool experiments, devlogs, and interface studies that foregrounds method, debugging, and authorship instead of polished output alone.',
            zh: '一个汇总工具实验、开发日志与界面研究的档案页，强调方法、调试过程与作者性，而不只展示打磨后的结果。',
        },
        coverSrc: '/portfolio/world-tools/cover.jpg',
        coverCaption: {
            en: 'World tools cover',
            zh: '大世界工具封面',
        },
        bullets: [
            {
                en: 'Panels, parameter sheets, and devlogs are treated as first-class evidence of how the systems were actually made.',
                zh: '参数面板、调试图与 Devlog 都被当作一手证据，直接说明这些系统究竟是如何被做出来的。',
            },
            {
                en: 'Manual junction editing, CSG tests, and seamless-world research are shown together to reveal a sustained systems mindset.',
                zh: '手动路口编辑、CSG 测试与 seamless world 研究被放在一起，显露出持续稳定的系统思维。',
            },
            {
                en: 'The page deliberately privileges method over polish so the underlying decision-making stays readable.',
                zh: '这一页刻意把方法放在精修效果之前，因此底层决策过程反而更清楚。',
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
            en: 'A recent authoring-systems study on how realtime road editing, terrain fusion, and intersection assembly can live inside one interactive workflow.',
            zh: '一个较新的创作系统案例，讨论实时道路编辑、地形融合与路口拼装如何共存于同一套交互式工作流中。',
        },
        coverSrc: '/portfolio/terrain-road-2025/cover.jpg',
        coverCaption: {
            en: 'Realtime road × terrain cover',
            zh: '实时道路 × 地形封面',
        },
        bullets: [
            {
                en: 'The page focuses on road, slope, spline, and junction as one authoring problem rather than separate technical features.',
                zh: '页面把路、坡面、样条与路口视为同一个创作问题，而不是彼此割裂的功能点。',
            },
            {
                en: 'Extended GIFs work like moving process sheets, making editing, fusion, and assembly decisions visible over time.',
                zh: '较长的 GIF 更像动态过程页，把编辑、融合与拼装中的时间关系清楚展示出来。',
            },
            {
                en: 'Diagrams and live captures are paired so conceptual framing and executable implementation remain visible at the same time.',
                zh: '概念图和实录并置，让抽象结构与可执行实现同时保持可见。',
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
            en: 'A procedural environment study centered on rock generation and scene assembly, showing how tool learning turns into spatial decisions.',
            zh: '一组围绕岩石生成与场景搭建展开的程序化练习，重点展示工具学习如何逐步转化为空间决策。',
        },
        coverSrc: '/portfolio/procedural-practice/cover.jpg',
        coverCaption: {
            en: 'Procedural practice cover',
            zh: '程序化练习封面',
        },
        bullets: [
            {
                en: 'These studies stay in the portfolio because technical learning also shapes visual language and environment judgment.',
                zh: '这些练习被保留下来，是为了说明技术学习过程也会反向塑造视觉语言与环境判断。',
            },
            {
                en: 'The UI, workflow GIF, wireframes, and final images are arranged like a compact development board.',
                zh: '参数界面、流程 GIF、线框与结果图被组织成一张紧凑的小型开发板。',
            },
            {
                en: 'Within the larger portfolio, this section supports a narrative of iterative making rather than pure production readiness.',
                zh: '在整套作品集中，这一页补充的是“迭代式创作”的叙事，而不只是生产成熟度。',
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
                en: 'Scene work, interaction mockups, and drawing practice share one page to keep the portfolio balanced beyond purely technical authorship.',
                zh: '场景、交互截图与基础美术练习被放在同一页里，让整套作品不至于只剩纯技术作者视角。',
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
                en: 'This page adds continuity, self-direction, and a clearer sense of long-term trajectory.',
                zh: '这页补充了持续性、自驱力，以及一条更清楚的长期成长轨迹。',
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
