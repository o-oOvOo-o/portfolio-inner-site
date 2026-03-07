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
        en: 'The live Cunning3D site stays separate from this archive so it keeps its native interactive showcase. Open the homepage for the full real-time experience and latest updates.',
        zh: '实时版 Cunning3D 主页继续保持独立站点，这样可以保留它原生的交互式 showcase。点击主页即可进入完整实时体验与最新更新。',
    },
    buttonLabel: {
        en: 'Visit homepage',
        zh: '访问主页',
    },
    tags: ['Rust', 'Bevy', 'DCC', 'Procedural Modeling', 'PCG'],
};

const Projects: React.FC<ProjectsProps> = () => {
    const locale = useLocale();
    const config = useResumeConfig();
    const mediaCountLabel = (count: number) =>
        locale === 'zh' ? `${count} 项内容` : `${count} items`;

    return (
        <div className="site-page-content">
            <div style={styles.header}>
                <p style={styles.eyebrow}>
                    {locale === 'zh'
                        ? '作品档案 / Portfolio Dossiers'
                        : 'Portfolio Dossiers / Archive'}
                </p>
                <h1>{config.projects.title}</h1>
                <div className="text-block" style={styles.introBlock}>
                    <p>
                        {locale === 'zh'
                            ? '下面这些项目档案已从 2021–2025 作品集 PPT 中拆出。列表页只展示轻量封面，点击后进入单独详情页，查看更多静图、GIF 和说明。'
                            : 'These dossiers are extracted from the 2021–2025 portfolio deck. The index stays lightweight with cover images only; each card opens into a dedicated detail page with more stills, GIFs, and notes.'}
                    </p>
                </div>
            </div>

            <section style={styles.section}>
                <div style={styles.sectionHeader}>
                    <h3>{locale === 'zh' ? '精选外链' : 'Featured External'}</h3>
                    <p style={styles.sectionCopy}>
                        {locale === 'zh'
                            ? 'Cunning3D 仍然直接跳转到主站。'
                            : 'Cunning3D still points directly to the main site.'}
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
                                {locale === 'zh' ? '实时主页' : 'Live Homepage'}
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
                    <h3>{locale === 'zh' ? '项目封面索引' : 'Project Cover Index'}</h3>
                    <p style={styles.sectionCopy}>
                        {locale === 'zh'
                            ? '其余项目全部进入单独展示页，详情里保留更多图和动图。'
                            : 'All remaining projects open into standalone showcase pages with richer galleries.'}
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
                                                ? '进入展示页'
                                                : 'Open showcase'}
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
