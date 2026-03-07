import React, { useMemo } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { PROJECT_DOSSIERS, getLocalizedText } from '../../config/projectDossiers';
import { useLocale } from '../../i18n';

export interface ProjectDetailProps {}

const ProjectDetail: React.FC<ProjectDetailProps> = () => {
    const { slug } = useParams();
    const locale = useLocale();
    const dossier = useMemo(
        () => PROJECT_DOSSIERS.find((entry) => entry.slug === slug),
        [slug]
    );

    if (!dossier) {
        return (
            <div className="site-page-content">
                <div style={styles.wrapper}>
                    <RouterLink to="/projects" style={styles.backLink}>
                        {locale === 'zh' ? '← 返回精选作品' : '← Back to selected works'}
                    </RouterLink>
                    <div style={styles.notFoundBox}>
                        <h2>
                            {locale === 'zh'
                                ? '没找到这个项目档案'
                                : 'Project dossier not found'}
                        </h2>
                        <p>
                            {locale === 'zh'
                                ? '这个路径没有对应的展示页，返回封面索引重新选择即可。'
                                : 'There is no dossier for this path. Return to the cover index and pick another project.'}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    const title = getLocalizedText(dossier.title, locale);
    const summary = getLocalizedText(dossier.summary, locale);
    const bullets = dossier.bullets.map((item) => getLocalizedText(item, locale));
    const coverCaption = getLocalizedText(dossier.coverCaption, locale);

    return (
        <div className="site-page-content">
            <div style={styles.wrapper}>
                <RouterLink to="/projects" style={styles.backLink}>
                    {locale === 'zh' ? '← 返回精选作品' : '← Back to selected works'}
                </RouterLink>

                <section style={styles.hero}>
                    <div style={styles.heroCopy}>
                        <p style={styles.eyebrow}>
                            {locale === 'zh' ? '案例研究' : 'Case Study'}
                        </p>
                        <h1 style={styles.title}>{title}</h1>
                        <p style={styles.period}>{dossier.period}</p>
                        <p style={styles.metaLine}>
                            {locale === 'zh'
                                ? `${dossier.media.length} 组精选视觉材料`
                                : `${dossier.media.length} curated visuals`}
                        </p>
                        <p style={styles.summary}>{summary}</p>
                        <div style={styles.tagRow}>
                            {dossier.tags.map((tag) => (
                                <span key={`${dossier.slug}-${tag}`} style={styles.tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div style={styles.heroMedia}>
                        <img
                            src={dossier.coverSrc}
                            alt={coverCaption}
                            style={styles.heroImage}
                            loading="lazy"
                        />
                        <p style={styles.heroCaption}>{coverCaption}</p>
                    </div>
                </section>

                <section style={styles.section}>
                    <div style={styles.sectionHeader}>
                        <h3>{locale === 'zh' ? '项目陈述' : 'Project Statement'}</h3>
                        <p style={styles.sectionCopy}>
                            {locale === 'zh'
                                ? '这里用简短文字说明项目的意图、方法，以及它在整套作品集中的位置。'
                                : 'These short notes frame intention, method, and why the work matters within the portfolio.'}
                        </p>
                    </div>
                    <ul style={styles.bulletList}>
                        {bullets.map((bullet, index) => (
                            <li key={`${dossier.slug}-bullet-${index}`}>
                                <p>{bullet}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                <section style={styles.section}>
                    <div style={styles.sectionHeader}>
                        <h3>{locale === 'zh' ? '过程与视觉材料' : 'Process & Visual Material'}</h3>
                        <p style={styles.sectionCopy}>
                            {locale === 'zh'
                                ? '静图、GIF 与视频按证据链方式排列，更接近申请作品集里的 case-study board。'
                                : 'Still images, GIFs, and clips are sequenced as supporting evidence, closer to a case-study board in an application portfolio.'}
                        </p>
                    </div>
                    <div style={styles.gallery}>
                        {dossier.media.map((media, index) => {
                            const caption = getLocalizedText(media.caption, locale);
                            const badge =
                                media.type === 'video'
                                    ? locale === 'zh'
                                        ? '视频'
                                        : 'Video'
                                    : media.src.endsWith('.gif')
                                      ? 'GIF'
                                      : locale === 'zh'
                                        ? '图片'
                                        : 'Image';

                            return (
                                <article
                                    key={`${dossier.slug}-${media.src}-${index}`}
                                    style={styles.mediaCard}
                                >
                                    <div style={styles.mediaBadge}>{badge}</div>
                                    {media.type === 'video' ? (
                                        <video
                                            src={media.src}
                                            poster={media.poster}
                                            style={styles.media}
                                            controls
                                            muted
                                            loop
                                            playsInline
                                            preload="metadata"
                                        />
                                    ) : (
                                        <img
                                            src={media.src}
                                            alt={caption}
                                            style={styles.media}
                                            loading="lazy"
                                        />
                                    )}
                                    <div style={styles.mediaBody}>
                                        <p style={styles.mediaCaption}>{caption}</p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    wrapper: {
        flexDirection: 'column',
        gap: 24,
        paddingBottom: 32,
    },
    backLink: {
        display: 'inline-flex',
        alignSelf: 'flex-start',
        border: '2px solid black',
        padding: '8px 14px',
        background: 'white',
        color: 'black',
        textDecoration: 'none',
        fontFamily: 'MillenniumBold',
        fontSize: 16,
    },
    notFoundBox: {
        border: '2px solid black',
        background: 'white',
        padding: 20,
        flexDirection: 'column',
        gap: 10,
        maxWidth: 760,
    },
    hero: {
        display: 'grid',
        gridTemplateColumns: 'minmax(320px, 1.1fr) minmax(280px, 0.9fr)',
        gap: 20,
        alignItems: 'stretch',
    },
    heroCopy: {
        border: '2px solid black',
        background: 'white',
        padding: 20,
        flexDirection: 'column',
        gap: 12,
        boxSizing: 'border-box',
    },
    eyebrow: {
        fontFamily: 'MillenniumBold',
        opacity: 0.75,
        textTransform: 'uppercase',
        letterSpacing: 0.6,
    },
    title: {
        lineHeight: 0.95,
    },
    period: {
        fontFamily: 'MillenniumBold',
        fontSize: 18,
    },
    metaLine: {
        opacity: 0.72,
        fontSize: 16,
    },
    summary: {
        opacity: 0.92,
    },
    heroMedia: {
        border: '2px solid black',
        background: 'white',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    heroImage: {
        width: '100%',
        minHeight: 320,
        height: '100%',
        objectFit: 'cover',
        borderBottom: '2px solid black',
        background: '#efefef',
    },
    heroCaption: {
        padding: 14,
        opacity: 0.75,
        fontSize: 16,
    },
    tagRow: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        marginTop: 4,
    },
    tag: {
        border: '2px solid black',
        padding: '4px 10px',
        fontFamily: 'MillenniumBold',
        fontSize: 15,
        background: 'white',
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
    },
    sectionHeader: {
        flexDirection: 'column',
        gap: 8,
    },
    sectionCopy: {
        opacity: 0.84,
        maxWidth: 900,
    },
    bulletList: {
        display: 'block',
        border: '2px solid black',
        background: 'white',
        padding: '20px 20px 8px 40px',
        marginTop: 0,
        marginBottom: 0,
    },
    gallery: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 18,
        width: '100%',
    },
    mediaCard: {
        display: 'flex',
        border: '2px solid black',
        background: 'white',
        flexDirection: 'column',
        overflow: 'hidden',
        minWidth: 0,
        position: 'relative',
    },
    mediaBadge: {
        position: 'absolute',
        top: 12,
        left: 12,
        border: '2px solid black',
        padding: '4px 10px',
        fontFamily: 'MillenniumBold',
        fontSize: 14,
        background: 'white',
        zIndex: 1,
    },
    media: {
        width: '100%',
        height: 'auto',
        maxHeight: 420,
        objectFit: 'contain',
        borderBottom: '2px solid black',
        background: '#efefef',
    },
    mediaBody: {
        flexDirection: 'column',
        gap: 8,
        padding: 14,
        boxSizing: 'border-box',
    },
    mediaCaption: {
        opacity: 0.92,
    },
};

export default ProjectDetail;
