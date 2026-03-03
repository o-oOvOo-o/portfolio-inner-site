import React from 'react';
import { useLocale, useResumeConfig } from '../../i18n';
import ResumeDownload from './ResumeDownload';
import { RoadIllustration } from './ResumeIllustrations';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
    const locale = useLocale();
    const config = useResumeConfig();
    const items = config.experience.items;

    return (
        <div className="site-page-content">
            <h1>{config.experience.title}</h1>
            <h3>{locale === 'zh' ? '时间线' : 'Timeline'}</h3>
            <br />

            <ResumeDownload
                altText={locale === 'zh' ? '需要 PDF 简历？' : 'Need a PDF resume?'}
            />

            <div className="captioned-image">
                <RoadIllustration />
                <p>
                    <sub>
                        <b>{locale === 'zh' ? '图示：' : 'Figure:'}</b>{' '}
                        {locale === 'zh'
                            ? '从 0 到 1 搭建工具与管线：把“路”铺出来，让内容生产跑得更快、更稳。'
                            : 'Building tools & pipelines from 0 to 1 — paving the road for faster and safer iteration.'}
                    </sub>
                </p>
            </div>

            <div style={styles.timeline}>
                {items.map((item, idx) => {
                    const isLast = idx === items.length - 1;
                    const dateRange = `${item.start} - ${item.end}`;
                    return (
                        <div
                            key={`${item.company}-${item.role}-${idx}`}
                            style={styles.timelineItem}
                        >
                            <div style={styles.markerColumn}>
                                <div style={styles.marker} />
                                {!isLast ? (
                                    <div style={styles.markerLine} />
                                ) : (
                                    <div style={styles.markerLineEnd} />
                                )}
                            </div>
                            <div style={styles.itemBody}>
                                <div style={styles.itemHeader}>
                                    <div style={styles.itemHeaderLeft}>
                                        <h2 style={styles.company}>
                                            {item.company}
                                        </h2>
                                        <h4 style={styles.role}>
                                            {item.role}
                                        </h4>
                                    </div>
                                    <div style={styles.itemHeaderRight}>
                                        <p>
                                            <b>{dateRange}</b>
                                        </p>
                                        {item.location ? (
                                            <p style={styles.meta}>
                                                <sub>{item.location}</sub>
                                            </p>
                                        ) : null}
                                    </div>
                                </div>

                                {item.summary ? (
                                    <div className="text-block">
                                        <p>{item.summary}</p>
                                    </div>
                                ) : null}

                                <div className="text-block" style={styles.card}>
                                    <ul style={styles.list}>
                                        {item.bullets.map((b) => (
                                            <li key={b}>
                                                <p>{b}</p>
                                            </li>
                                        ))}
                                    </ul>

                                    {item.tags?.length ? (
                                        <div style={styles.tags}>
                                            {item.tags.map((t) => (
                                                <span key={t} style={styles.tag}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    timeline: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        width: '100%',
        paddingBottom: 24,
    },
    timelineItem: {
        display: 'flex',
        flexDirection: 'row',
        gap: 18,
        width: '100%',
        alignItems: 'stretch',
    },
    markerColumn: {
        width: 22,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 10,
    },
    marker: {
        width: 14,
        height: 14,
        borderRadius: 999,
        border: '2px solid black',
        background: 'white',
        boxSizing: 'border-box',
    },
    markerLine: {
        width: 2,
        flex: 1,
        background: 'black',
        marginTop: 8,
    },
    markerLineEnd: {
        width: 2,
        height: 18,
        background: 'transparent',
        marginTop: 8,
    },
    itemBody: {
        flexDirection: 'column',
        flex: 1,
        minWidth: 0,
    },
    itemHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 18,
        flexWrap: 'wrap',
    },
    itemHeaderLeft: {
        flexDirection: 'column',
        gap: 6,
        minWidth: 320,
    },
    itemHeaderRight: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 2,
    },
    company: {
        fontSize: 32,
        lineHeight: 1.05,
    },
    role: {
        opacity: 0.9,
    },
    meta: {
        opacity: 0.8,
    },
    card: {
        border: '2px solid black',
        background: 'white',
        padding: 14,
        boxSizing: 'border-box',
        width: '100%',
        gap: 12,
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
        marginTop: 10,
    },
    tag: {
        padding: '4px 10px',
        border: '2px solid black',
        background: 'white',
        fontFamily: 'MillenniumBold',
        fontSize: 16,
    },
};

export default Experience;
