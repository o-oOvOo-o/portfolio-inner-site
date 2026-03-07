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
        period: '2023 – 2025',
        summary: {
            en: 'A more engineering-heavy slice from the deck: export tooling, weight-remap tooling, road-segment devlogs, CSG/boolean benchmarks, and a lightweight seamless-world GIF.',
            zh: '这部分更偏工程化：导出工具、权重重映射工具、路段 Devlog、CSG / Boolean 基准，以及无缝大世界 GIF。',
        },
        coverSrc: '/portfolio/world-tools/seamless-world.gif',
        coverCaption: {
            en: 'World tools cover',
            zh: '大世界工具封面',
        },
        bullets: [
            {
                en: 'Keeps the devlog feel instead of flattening everything into glossy final images.',
                zh: '保留了 Devlog 气质，而不是把所有内容都抹平成“最终效果图”。',
            },
            {
                en: 'The local seamless-world GIF gives the portfolio an always-on animated hook.',
                zh: '本地化的无缝大世界 GIF 让这一组始终带有动态展示钩子。',
            },
            {
                en: 'Useful for readers who care more about tooling decisions than beauty shots.',
                zh: '很适合那些更关心工具设计而非纯美术效果的浏览者。',
            },
        ],
        tags: ['Pipeline', 'CSG', 'Boolean', 'Seamless World', 'Devlog'],
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
                src: '/portfolio/world-tools/road-segment-devlog.gif',
                caption: {
                    en: 'Road-segment devlog GIF.',
                    zh: '路段 Devlog 动图。',
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
        slug: 'practice',
        title: {
            en: 'Practice / Props / Hobby Archive',
            zh: '练习 / 道具 / 兴趣档案',
        },
        period: '2016 – 2025',
        summary: {
            en: 'The “everything else worth keeping” section: practice scenes, prop work, a tiny mini-game video, and older hobby visuals that still add personality to the portfolio.',
            zh: '把“值得保留的其他内容”统一归档：练习场景、道具作品、小型 Demo 视频，以及能补充个人气质的早期兴趣作品。',
        },
        coverSrc: '/portfolio/practice/town-scene.jpg',
        coverCaption: {
            en: 'Practice archive cover',
            zh: '练习档案封面',
        },
        bullets: [
            {
                en: 'Helps the portfolio feel human instead of only corporate tooling.',
                zh: '让作品集不至于只有企业工具感，而是更像完整的个人档案。',
            },
            {
                en: 'Includes one more animated GIF so the section still feels alive.',
                zh: '这一组也放入了动态图，保证不是纯静态收尾。',
            },
            {
                en: 'Pairs environment, prop, weapon, and gameplay samples into one compact archive.',
                zh: '把场景、道具、枪械与玩法样片并成一组紧凑档案。',
            },
        ],
        tags: ['Practice', 'Environment', 'Prop', 'Mini Demo', 'Hobby'],
        media: [
            {
                type: 'image',
                src: '/portfolio/practice/terrain-scene.gif',
                caption: {
                    en: 'Animated terrain / scene exploration.',
                    zh: '动态地形 / 场景练习。',
                },
            },
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
                src: '/portfolio/practice/fuel-prop.jpg',
                caption: {
                    en: 'Vintage fuel prop study.',
                    zh: '复古加油机道具练习。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/practice/firearm-kit.jpg',
                caption: {
                    en: 'Weapon kit presentation.',
                    zh: '枪械道具展示。',
                },
            },
            {
                type: 'image',
                src: '/portfolio/practice/indoor-scene.jpg',
                caption: {
                    en: 'Older hobby scene / gameplay capture.',
                    zh: '较早期的兴趣场景 / 玩法截图。',
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
        ],
    },
];

export function getLocalizedText(
    value: LocalizedText,
    locale: DossierLocale
): string {
    return value[locale];
}
