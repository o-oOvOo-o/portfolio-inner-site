import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { PROJECT_DOSSIERS, getLocalizedText } from '../../config/projectDossiers';
import { useLocale, useResumeConfig } from '../../i18n';

export interface ProjectsProps {}

const CUNNING3D_CARD = {
    href: 'https://cunning3d.vercel.app/',
    coverSrc: '/portfolio/cunning3d/cover.jpg',
    title: {
        en: 'Cunning3D',
        zh: 'Cunning3D',
    },
    summary: {
        en: 'An ongoing independent platform project presented through its own live site. It remains separate here so the real-time interface, responsiveness, and self-contained world stay part of the work itself.',
        zh: '一个仍在持续发展的独立平台项目，因此保留在它自己的实时站点中；只有这样，交互、流畅度和完整世界观本身才仍然是作品的一部分。',
    },
    buttonLabel: {
        en: 'Open live site',
        zh: '打开实时站点',
    },
    tags: ['Rust', 'ECS', 'DCC', 'Procedural Modeling', 'PCG'],
};

const Projects: React.FC<ProjectsProps> = () => {
    const locale = useLocale();
    const config = useResumeConfig();
    const mediaCountLabel = (count: number) =>
        locale === 'zh' ? `${count} 组材料` : `${count} visuals`;

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
                            ? '这一页按“留学申请作品集 / case study”的方式重新编排：索引页保留简洁封面，进入详情页后再展开图像、GIF 与简短过程说明。'
                            : 'This section is edited like a study-abroad application portfolio: concise covers on the index, then dedicated case-study pages that unfold images, GIFs, and short process statements.'}
                    </p>
                </div>
            </div>

            <section style={styles.section}>
                <div style={styles.sectionHeader}>
                    <h3>{locale === 'zh' ? '独立项目入口' : 'Independent Live Work'}</h3>
                    <p style={styles.sectionCopy}>
                        {locale === 'zh'
                            ? 'Cunning3D 作为独立运行的实时作品保留单独站点。'
                            : 'Cunning3D remains on its own live site so the interactive experience stays intact.'}
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
                            <a
                                href={CUNNING3D_CARD.href}
                                target="_blank"
                                rel="noreferrer"
                                style={styles.primaryButton}
                            >
                                {CUNNING3D_CARD.buttonLabel[locale]}
                            </a>
                        </div>
                    </div>
                </article>
            </section>

            <section style={styles.section}>
                <div style={styles.sectionHeader}>
                    <h3>{locale === 'zh' ? '案例研究索引' : 'Selected Case Studies'}</h3>
                    <p style={styles.sectionCopy}>
                        {locale === 'zh'
                            ? '其余项目都整理成更接近申请作品集的独立 case study 页面，保留视觉材料与简短过程说明。'
                            : 'The remaining projects are edited as compact case-study pages, closer to an application portfolio in tone and pacing.'}
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
