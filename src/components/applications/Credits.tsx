import React, { useEffect, useMemo, useState } from 'react';
import Window from '../os/Window';
import { useInterval } from 'usehooks-ts';
import { motion } from 'framer-motion';
import { useLocale, useResumeConfig } from '../../i18n';

export interface CreditsProps extends WindowAppProps {}

type CreditSlide = {
    title: string;
    rows: Array<[string, string]>;
};

function getCreditsSlides(locale: 'en' | 'zh', name: string): CreditSlide[] {
    if (locale === 'zh') {
        return [
            {
                title: '作品集',
                rows: [
                    [name, '内容策划 / 简历整理'],
                    ['Showcase', 'Windows 95 风格作品集内页'],
                ],
            },
            {
                title: '技术栈',
                rows: [
                    ['React + TypeScript', 'UI 与交互'],
                    ['React Router', '路由'],
                    ['Framer Motion', '动效'],
                    ['js-dos + emulators-ui', 'DOS 游戏运行'],
                ],
            },
            {
                title: '灵感',
                rows: [
                    ['Windows 95', '复古 UI 语言'],
                    ['工具链思维', '把复杂流程做成可用系统'],
                ],
            },
        ];
    }

    return [
        {
            title: 'Portfolio',
            rows: [
                [name, 'Content & curation'],
                ['Showcase', 'Windows 95 style inner site'],
            ],
        },
        {
            title: 'Tech Stack',
            rows: [
                ['React + TypeScript', 'UI & interactions'],
                ['React Router', 'Routing'],
                ['Framer Motion', 'Animations'],
                ['js-dos + emulators-ui', 'Run DOS classics'],
            ],
        },
        {
            title: 'Inspiration',
            rows: [
                ['Windows 95', 'Retro UI language'],
                ['Tooling mindset', 'Make workflows shippable'],
            ],
        },
    ];
}

const Credits: React.FC<CreditsProps> = (props) => {
    const locale = useLocale();
    const config = useResumeConfig();
    const year = useMemo(() => new Date().getFullYear(), []);
    const slides = useMemo(
        () => getCreditsSlides(locale, config.profile.name),
        [locale, config.profile.name]
    );
    const [currentSlide, setCurrentSlide] = useState(0);
    const [time, setTime] = useState(0);

    // every 5 seconds, move to the next slide
    useInterval(() => setTime((t) => t + 1), 1000);

    useEffect(() => {
        if (time > 5) {
            setCurrentSlide((s) => (s + 1) % slides.length);
            setTime(0);
        }
    }, [time, slides.length]);

    const nextSlide = () => {
        setTime(0);
        setCurrentSlide((s) => (s + 1) % slides.length);
    };

    return (
        // add on resize listener
        <Window
            top={48}
            left={48}
            width={1100}
            height={800}
            windowTitle="Credits"
            windowBarIcon="windowExplorerIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={`© ${year} ${config.profile.name}`}
        >
            <div
                onMouseDown={nextSlide}
                className="site-page"
                style={styles.credits}
            >
                <h2>{locale === 'zh' ? '鸣谢' : 'Credits'}</h2>
                <p>
                    {config.profile.social?.website
                        ? `${config.profile.social.website} · ${year}`
                        : `${config.profile.name} · ${year}`}
                </p>
                <br />
                <br />
                <br />
                <div style={styles.slideContainer}>
                    {
                        <motion.div
                            animate={{ opacity: 1, y: -20 }}
                            transition={{ duration: 0.5 }}
                            key={`section-${slides[currentSlide].title}`}
                            style={styles.section}
                        >
                            <h3 style={styles.sectionTitle}>
                                {slides[currentSlide].title}
                            </h3>
                            {slides[currentSlide].rows.map((row, i) => {
                                return (
                                    <div key={`row-${i}`} style={styles.row}>
                                        <p>{row[0]}</p>
                                        <p>{row[1]}</p>
                                    </div>
                                );
                            })}
                        </motion.div>
                    }
                </div>
                <p>{locale === 'zh' ? '点击继续...' : 'Click to continue...'}</p>
                <br />
                <div style={styles.nextSlideTimer}>
                    {/* make a time number of dots */}
                    {Array.from({ length: time }).map((_, i) => {
                        return (
                            <div key={`dot-${i}`}>
                                <p>.</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Window>
    );
};

const styles: StyleSheetCSS = {
    credits: {
        width: '100%',
        backgroundColor: 'black',
        paddingTop: 64,
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 64,
        color: 'white',
        overflow: 'hidden',
    },
    row: {
        overflow: 'none',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: 600,
        alignSelf: 'center',
    },
    section: {
        overflow: 'none',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 32,
        opacity: 0,
    },
    sectionTitle: {
        marginBottom: 32,
    },
    slideContainer: {
        width: '100%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    nextSlideTimer: {
        width: 64,
        height: 32,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
};

export default Credits;
