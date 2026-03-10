import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { PROJECT_DOSSIERS, getLocalizedText } from '../../config/projectDossiers';
import { useLocale, useResumeConfig } from '../../i18n';

export interface ProjectsProps {}

const CUNNING3D_CARD = {
    coverSrc: '/portfolio/cunning3d/cover.jpg',
    title: {
        en: 'Cunning3D',
        zh: 'Cunning3D',
    },
    summary: {
        en: 'An independent authoring platform that is best shown as a live system, not a static slide. It stays separate here because interface feel, graph behavior, and responsiveness are part of the work itself.',
        zh: '这是一个更适合以“活系统”而不是静态图版来展示的独立创作平台；之所以保留独立入口，是因为界面手感、Graph 行为与流畅度本身就是作品的一部分。',
    },
    buttonLabel: {
        en: 'Open desktop window',
        zh: '在桌面窗口中打开',
    },
    tags: ['Rust', 'ECS', 'DCC', 'Procedural Modeling', 'PCG'],
};

const Projects: React.FC<ProjectsProps> = () => {
    const locale = useLocale();
    const config = useResumeConfig();
    const mediaCountLabel = (count: number) =>
        locale === 'zh' ? `${count} 组材料` : `${count} visuals`;
    const openCunning3DWindow = () => {
        window.dispatchEvent(
            new CustomEvent('desktop-open-app', {
                detail: {
                    appKey: 'cunning3d',
                },
            })
        );
    };

    return (
        <div className="site-page-content">
            <div style={styles.header}>
                <p style={styles.eyebrow}>
                    {locale === 'zh'
                        ? '精选作品 / Case Studies'
                        : 'Selected Works / Case Studies'}
                </p>
                <h1>{config.projects.title}</h1>
                <div className="text-block" style={styles.introBlock}>
                    <p>
                        {locale === 'zh'
                            ? '这一页按“申请作品集 + 高级岗位作品站”的双重标准重写：索引页先给出清晰定位，详情页再展开图像、GIF、流程图与简短过程说明。'
                            : 'This section is edited for both graduate applications and senior creator-tools roles: concise positioning on the index, then dedicated case-study pages with visuals, GIFs, diagrams, and short process notes.'}
                    </p>
                </div>
            </div>

            <section style={styles.section}>
                <div style={styles.sectionHeader}>
                    <h3>{locale === 'zh' ? '独立项目入口' : 'Independent Live Work'}</h3>
                    <p style={styles.sectionCopy}>
                        {locale === 'zh'
                            ? 'Cunning3D 保留为独立运行入口，因为它本身就是一个实时创作系统，而不只是可截图的项目。'
                            : 'Cunning3D stays as a separate live entry because it is itself a real-time authoring system, not just a project that can be flattened into screenshots.'}
                    </p>
                </div>

                <article style={styles.featuredCard}>
                    <img
                        src={CUNNING3D_CARD.coverSrc}
                        alt={CUNNING3D_CARD.title[locale]}
                        style={styles.featuredImage}
                        loading="lazy"
                    />
                    <div style={styles.featuredBody}>
                        <div style={styles.cardHeader}>
                            <p style={styles.cardKicker}>
                                {locale === 'zh' ? '独立平台' : 'Independent Platform'}
                            </p>
                            <h2 style={styles.featuredTitle}>
                                {CUNNING3D_CARD.title[locale]}
                            </h2>
                        </div>
                        <p style={styles.cardSummary}>
                            {CUNNING3D_CARD.summary[locale]}
                        </p>
                        <div style={styles.tagRow}>
                            {CUNNING3D_CARD.tags.map((tag) => (
                                <span key={tag} style={styles.tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div style={styles.cardActions}>
                            <button
                                type="button"
                                onClick={openCunning3DWindow}
                                style={styles.primaryButton}
                            >
                                {CUNNING3D_CARD.buttonLabel[locale]}
                            </button>
                        </div>
                    </div>
                </article>
            </section>

            <section style={styles.section}>
                <div style={styles.sectionHeader}>
                    <h3>{locale === 'zh' ? '案例研究索引' : 'Selected Case Studies'}</h3>
                    <p style={styles.sectionCopy}>
                        {locale === 'zh'
                            ? '其余项目整理成更利于阅读的独立 case study：每页都尽量同时保留结果、过程证据与系统线索。'
                            : 'The remaining projects are organized as readable case studies, each trying to preserve outcome, process evidence, and system thinking at the same time.'}
                    </p>
                </div>

                <div style={styles.grid}>
                    {PROJECT_DOSSIERS.map((dossier) => {
                        const title = getLocalizedText(dossier.title, locale);
                        const summary = getLocalizedText(dossier.summary, locale);
                        const coverCaption = getLocalizedText(
                            dossier.coverCaption,
                            locale
                        );

                        return (
                            <article key={dossier.slug} style={styles.card}>
                                <RouterLink
                                    to={`/projects/${dossier.slug}`}
                                    style={styles.coverLink}
                                >
                                    <img
                                        src={dossier.coverSrc}
                                        alt={coverCaption}
                                        style={styles.coverImage}
                                        loading="lazy"
                                    />
                                </RouterLink>
                                <div style={styles.cardBody}>
                                    <div style={styles.cardHeader}>
                                        <div style={styles.cardTitleBlock}>
                                            <p style={styles.cardKicker}>
                                                {`${dossier.period} · ${mediaCountLabel(
                                                    dossier.media.length
                                                )}`}
                                            </p>
                                            <h3 style={styles.cardTitle}>{title}</h3>
                                        </div>
                                    </div>
                                    <p style={styles.cardCaption}>{coverCaption}</p>
                                    <p style={styles.cardSummary}>{summary}</p>
                                    <div style={styles.tagRow}>
                                        {dossier.tags.map((tag) => (
                                            <span
                                                key={`${dossier.slug}-${tag}`}
                                                style={styles.tag}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div style={styles.cardActions}>
                                        <RouterLink
                                            to={`/projects/${dossier.slug}`}
                                            style={styles.primaryButton}
                                        >
                                            {locale === 'zh'
                                                ? '查看案例页'
                                                : 'Open case study'}
                                        </RouterLink>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

const sharedButton: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 14px',
    border: '2px solid black',
    color: 'black',
    background: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
    fontFamily: 'MillenniumBold',
    fontSize: 16,
    minWidth: 150,
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        gap: 12,
    },
    eyebrow: {
        fontFamily: 'MillenniumBold',
        letterSpacing: 0.6,
        textTransform: 'uppercase',
    },
    introBlock: {
        marginTop: 0,
        marginBottom: 0,
        maxWidth: 960,
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        marginTop: 32,
        marginBottom: 18,
    },
    sectionHeader: {
        flexDirection: 'column',
        gap: 8,
    },
    sectionCopy: {
        opacity: 0.84,
        maxWidth: 860,
    },
    featuredCard: {
        border: '2px solid black',
        background: 'white',
        display: 'grid',
        gridTemplateColumns: 'minmax(280px, 420px) minmax(0, 1fr)',
        minHeight: 280,
        overflow: 'hidden',
    },
    featuredImage: {
        width: '100%',
        height: '100%',
        minHeight: 280,
        objectFit: 'cover',
        borderRight: '2px solid black',
    },
    featuredBody: {
        flexDirection: 'column',
        gap: 14,
        padding: 18,
        boxSizing: 'border-box',
        justifyContent: 'space-between',
    },
    featuredTitle: {
        marginTop: 4,
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 18,
        width: '100%',
        paddingBottom: 32,
    },
    card: {
        display: 'flex',
        border: '2px solid black',
        background: 'white',
        overflow: 'hidden',
        flexDirection: 'column',
        minWidth: 0,
    },
    coverLink: {
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
    },
    coverImage: {
        width: '100%',
        height: 220,
        objectFit: 'cover',
        borderBottom: '2px solid black',
        background: '#efefef',
    },
    cardBody: {
        flexDirection: 'column',
        gap: 12,
        padding: 16,
        boxSizing: 'border-box',
        flex: 1,
    },
    cardHeader: {
        flexDirection: 'column',
        gap: 4,
    },
    cardTitleBlock: {
        flexDirection: 'column',
        gap: 4,
    },
    cardKicker: {
        fontFamily: 'MillenniumBold',
        opacity: 0.7,
        fontSize: 15,
    },
    cardTitle: {
        lineHeight: 1.15,
    },
    cardCaption: {
        opacity: 0.72,
        fontSize: 16,
    },
    cardSummary: {
        opacity: 0.92,
    },
    tagRow: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
    },
    tag: {
        border: '2px solid black',
        padding: '4px 10px',
        fontFamily: 'MillenniumBold',
        fontSize: 15,
        background: 'white',
    },
    cardActions: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        marginTop: 'auto',
        paddingTop: 4,
    },
    primaryButton: sharedButton,
};

export default Projects;
