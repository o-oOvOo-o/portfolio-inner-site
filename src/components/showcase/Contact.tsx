import React, { useEffect, useMemo, useState } from 'react';
import twitterIcon from '../../assets/pictures/contact-twitter.png';
import ghIcon from '../../assets/pictures/contact-gh.png';
import inIcon from '../../assets/pictures/contact-in.png';
import { useLocale, useResumeConfig } from '../../i18n';
import ResumeDownload from './ResumeDownload';

export interface ContactProps {}

interface SocialBoxProps {
    icon: string;
    link: string;
    label: string;
}

const SocialBox: React.FC<SocialBoxProps> = ({ link, icon, label }) => {
    return (
        <a rel="noreferrer" target="_blank" href={link} aria-label={label}>
            <div className="big-button-container" style={styles.social}>
                <img src={icon} alt="" style={styles.socialImage} />
            </div>
        </a>
    );
};

async function copyToClipboard(text: string): Promise<boolean> {
    try {
        if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(text);
            return true;
        }
    } catch {
        // ignore and fall back
    }

    try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', 'true');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(textarea);
        return ok;
    } catch {
        return false;
    }
}

const Contact: React.FC<ContactProps> = () => {
    const locale = useLocale();
    const config = useResumeConfig();
    const email = config.profile.email;

    const socials = useMemo(() => {
        const s = config.profile.social ?? {};
        return [
            s.github
                ? { icon: ghIcon, link: s.github, label: 'GitHub' }
                : null,
            s.linkedin
                ? { icon: inIcon, link: s.linkedin, label: 'LinkedIn' }
                : null,
            s.twitter
                ? { icon: twitterIcon, link: s.twitter, label: 'Twitter' }
                : null,
        ].filter(Boolean) as Array<{ icon: string; link: string; label: string }>;
    }, [config.profile.social]);

    const [toast, setToast] = useState<
        | null
        | {
              title: string;
              description: string;
              color: string;
          }
    >(null);

    useEffect(() => {
        if (!toast) return;
        const id = window.setTimeout(() => setToast(null), 2400);
        return () => window.clearTimeout(id);
    }, [toast]);

    const onSendEmail = () => {
        window.location.href = `mailto:${email}`;
    };

    const onCopyEmail = async () => {
        const ok = await copyToClipboard(email);
        if (ok) {
            setToast({
                title: config.contact.copiedTitle,
                description: config.contact.copiedDescription,
                color: '#0000a3',
            });
        } else {
            setToast({
                title: locale === 'zh' ? '复制失败' : 'Copy failed',
                description:
                    locale === 'zh'
                        ? '浏览器不支持剪贴板，请手动复制邮箱。'
                        : 'Clipboard is unavailable. Please copy the email manually.',
                color: '#ff0000',
            });
        }
    };

    return (
        <div className="site-page-content">
            <div style={styles.header}>
                <div style={styles.headerLeft}>
                    <h1>{config.contact.title}</h1>
                    <h3>{config.contact.subtitle}</h3>
                </div>
                {socials.length ? (
                    <div style={styles.socials}>
                        {socials.map((s) => (
                            <SocialBox
                                key={s.link}
                                icon={s.icon}
                                link={s.link}
                                label={s.label}
                            />
                        ))}
                    </div>
                ) : null}
            </div>

            <div className="text-block">
                <p>
                    <b>Email: </b>
                    <a href={`mailto:${email}`}>{email}</a>
                </p>

                <div style={styles.actions}>
                    <button
                        className="site-button"
                        style={styles.actionButton}
                        onMouseDown={onSendEmail}
                        type="button"
                    >
                        {config.contact.sendEmail}
                    </button>
                    <button
                        className="site-button"
                        style={styles.actionButton}
                        onMouseDown={onCopyEmail}
                        type="button"
                    >
                        {config.contact.copyEmail}
                    </button>
                </div>

                {config.profile.social?.website ? (
                    <p style={styles.website}>
                        <b>{locale === 'zh' ? '网站：' : 'Website: '}</b>
                        <a
                            href={config.profile.social.website}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {config.profile.social.website}
                        </a>
                    </p>
                ) : null}

                {toast ? (
                    <div style={styles.toast}>
                        <p style={{ color: toast.color }}>
                            <b>{toast.title}</b>
                        </p>
                        <p>
                            <sub>{toast.description}</sub>
                        </p>
                    </div>
                ) : null}
            </div>

            <ResumeDownload
                altText={
                    locale === 'zh'
                        ? '需要一份 PDF 简历？'
                        : 'Need a PDF resume?'
                }
            />
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 16,
        flexWrap: 'wrap',
    },
    headerLeft: {
        flexDirection: 'column',
        gap: 8,
        minWidth: 260,
    },
    socials: {
        marginBottom: 16,
        justifyContent: 'flex-end',
    },
    socialImage: {
        width: 36,
        height: 36,
    },
    social: {
        width: 4,
        height: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
    actions: {
        marginTop: 18,
        gap: 12,
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    actionButton: {
        minWidth: 160,
        height: 32,
    },
    website: {
        marginTop: 18,
        opacity: 0.95,
    },
    toast: {
        marginTop: 18,
        border: '2px solid black',
        background: 'white',
        padding: 12,
        boxSizing: 'border-box',
        flexDirection: 'column',
        gap: 6,
        maxWidth: 720,
    },
};

export default Contact;
