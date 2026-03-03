import React from 'react';
import { useLocale, useResumeConfig } from '../../i18n';
import ResumeDownload from './ResumeDownload';
import { PipelineIllustration } from './ResumeIllustrations';

export interface AboutProps {}

function HighlightIcon({ index }: { index: number }) {
    const icons = [
        // Gear
        <path
            key="gear"
            d="M12 2l1 2 2 .5-.5 2 1.5 1.5-1.5 1.5.5 2-2 .5-1 2-2-1-2 1-1-2-2-.5.5-2L2 8l1.5-1.5-.5-2L5 4l1-2 2 1 2-1zM8 8a2 2 0 104 0 2 2 0 00-4 0z"
        />,
        // Bolt
        <path
            key="bolt"
            d="M9 1L3 9h4l-1 6 6-8H8l1-6z"
        />,
        // Check
        <path
            key="check"
            d="M6.5 12.2L3.3 9l1.4-1.4 1.8 1.8 5-5L13 5.8l-6.5 6.4z"
        />,
        // Code
        <path
            key="code"
            d="M6 4L2 8l4 4 1.4-1.4L4.8 8l2.6-2.6L6 4zm4 0l-1.4 1.4L11.2 8l-2.6 2.6L10 12l4-4-4-4z"
        />,
    ];

    const icon = icons[index % icons.length];
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            style={styles.highlightIcon}
            aria-hidden="true"
        >
            <g fill="none" stroke="#000" strokeWidth="1.4">
                {icon}
            </g>
        </svg>
    );
}

const About: React.FC<AboutProps> = () => {
    const locale = useLocale();
    const config = useResumeConfig();

    const pipelineSteps =
        locale === 'zh'
            ? ['编辑器', '校验', '打包', '落地']
            : ['Editor', 'Validation', 'Packaging', 'Shipping'];

    return (
        <div className="site-page-content">
            <h1>{config.meta.title}</h1>
            <h3>{config.profile.title}</h3>
            <br />

            <ResumeDownload
                altText={locale === 'zh' ? '需要 PDF 简历？' : 'Need a PDF resume?'}
            />

            <div className="text-block">
                <div style={styles.profileRow}>
                    <div style={styles.profileLeft}>
                        <p>
                            <b>{locale === 'zh' ? '姓名：' : 'Name: '}</b>
                            {config.profile.name}
                        </p>
                        <p>
                            <b>{locale === 'zh' ? '地点：' : 'Location: '}</b>
                            {config.profile.location}
                        </p>
                        <p>
                            <b>Email: </b>
                            <a href={`mailto:${config.profile.email}`}>
                                {config.profile.email}
                            </a>
                        </p>
                    </div>
                    <div style={styles.profileRight}>
                        <div style={styles.avatar} aria-hidden="true">
                            <p style={styles.avatarText}>
                                {config.profile.name.slice(0, 1).toUpperCase()}
                            </p>
                        </div>
                    </div>
                </div>

                <br />
                <p>{config.profile.bio}</p>

                {config.profile.interests?.length ? (
                    <>
                        <br />
                        <p>
                            <b>{locale === 'zh' ? '兴趣：' : 'Interests: '}</b>
                        </p>
                        <div style={styles.tags}>
                            {config.profile.interests.map((i) => (
                                <span key={i} style={styles.tag}>
                                    {i}
                                </span>
                            ))}
                        </div>
                    </>
                ) : null}
            </div>

            <div className="text-block">
                <h2>{config.highlights.title}</h2>
                <br />
                <div style={styles.highlightGrid}>
                    {config.highlights.items.map((item, idx) => (
                        <div
                            key={`${item.label}-${idx}`}
                            style={styles.highlightCard}
                        >
                            <div style={styles.highlightHeader}>
                                <HighlightIcon index={idx} />
                                <h4>{item.label}</h4>
                            </div>
                            <p>
                                <b>{item.value}</b>
                            </p>
                            {item.detail ? (
                                <p style={styles.highlightDetail}>
                                    {item.detail}
                                </p>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-block">
                <h2>{locale === 'zh' ? '工作流示意' : 'Workflow'}</h2>
                <br />
                <div className="captioned-image">
                    <PipelineIllustration steps={pipelineSteps} height={140} />
                    <p>
                        <sub>
                            <b>{locale === 'zh' ? '图示：' : 'Figure:'}</b>{' '}
                            {locale === 'zh'
                                ? '从编辑器工作流到自动化校验与规范化产物，再到生产落地。'
                                : 'From editor workflows to automated validation and standardized outputs.'}
                        </sub>
                    </p>
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    profileRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: 24,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    profileLeft: {
        flexDirection: 'column',
        gap: 6,
        minWidth: 260,
    },
    profileRight: {
        alignItems: 'center',
    },
    avatar: {
        width: 96,
        height: 96,
        border: '2px solid black',
        background:
            'linear-gradient(135deg, rgba(59,130,246,0.20), rgba(34,197,94,0.16))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: {
        fontFamily: 'MillenniumBold',
        fontSize: 48,
        lineHeight: 1,
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
    highlightGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 16,
    },
    highlightCard: {
        border: '2px solid black',
        background: 'white',
        padding: 14,
        boxSizing: 'border-box',
        flexDirection: 'column',
        gap: 6,
    },
    highlightHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 8,
    },
    highlightDetail: {
        opacity: 0.85,
        marginTop: 6,
    },
    highlightIcon: {
        flexShrink: 0,
    },
};

export default About;
