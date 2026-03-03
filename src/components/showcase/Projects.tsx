import React from 'react';
import { useLocale, useResumeConfig } from '../../i18n';
import { NodeGraphIllustration } from './ResumeIllustrations';

export interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
    const locale = useLocale();
    const config = useResumeConfig();
    const items = config.projects.items;

    return (
        <div className="site-page-content">
            <h1>{config.projects.title}</h1>
            <h3>{locale === 'zh' ? '精选 · 图文卡片' : 'Selected · Visual cards'}</h3>
            <br />

            <div className="captioned-image">
                <NodeGraphIllustration />
                <p>
                    <sub>
                        <b>{locale === 'zh' ? '图示：' : 'Figure:'}</b>{' '}
                        {locale === 'zh'
                            ? '项目像一张图：不同领域的节点，最终汇聚到“工具与管线”。'
                            : 'Projects as a graph — different domains, same tooling mindset.'}
                    </sub>
                </p>
            </div>

            <div className="text-block">
                <p>
                    {locale === 'zh'
                        ? '以下为部分代表性项目（含个人作品与保密项目概述）。'
                        : 'A selection of work (personal projects and high-level summaries of confidential work).'}{' '}
                    {locale === 'zh'
                        ? '点击卡片内链接可跳转到相关页面。'
                        : 'Use the links inside cards to jump out for details.'}
                </p>
            </div>

            <div style={styles.grid}>
                {items.map((p, idx) => (
                    <div key={`${p.name}-${idx}`} style={styles.card}>
                        <div style={styles.cardHeader}>
                            <h3 style={styles.cardTitle}>{p.name}</h3>
                            {p.links?.length ? (
                                <div style={styles.linkRow}>
                                    {p.links.map((l) => (
                                        <a
                                            key={`${p.name}-${l.href}`}
                                            href={l.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={styles.cardLink}
                                        >
                                            {l.label}
                                        </a>
                                    ))}
                                </div>
                            ) : null}
                        </div>

                        <p style={styles.desc}>{p.description}</p>

                        {p.highlights?.length ? (
                            <ul style={styles.list}>
                                {p.highlights.map((h, i) => (
                                    <li key={`${p.name}-h-${i}`}>
                                        <p>{h}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : null}

                        {p.tags?.length ? (
                            <div style={styles.tags}>
                                {p.tags.map((t) => (
                                    <span key={`${p.name}-${t}`} style={styles.tag}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 16,
        width: '100%',
        paddingBottom: 24,
    },
    card: {
        border: '2px solid black',
        background: 'white',
        padding: 14,
        boxSizing: 'border-box',
        flexDirection: 'column',
        gap: 10,
        minWidth: 0,
    },
    cardHeader: {
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    cardTitle: {
        flex: 1,
        minWidth: 220,
    },
    linkRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
    },
    cardLink: {
        border: '2px solid black',
        padding: '2px 10px',
        background: 'white',
        color: 'black',
        textDecoration: 'none',
        fontFamily: 'MillenniumBold',
        fontSize: 16,
    },
    desc: {
        opacity: 0.92,
    },
    list: {
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 20,
        display: 'block',
    },
    tags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        marginTop: 2,
    },
    tag: {
        padding: '4px 10px',
        border: '2px solid black',
        background: 'white',
        fontFamily: 'MillenniumBold',
        fontSize: 16,
    },
};

export default Projects;
