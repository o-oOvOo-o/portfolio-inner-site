import React from 'react';
import printer from '../../assets/resume/printer.gif';
import { useLocale, useResumeConfig } from '../../i18n';

export interface ResumeDownloadProps {
    altText?: string;
}

const ResumeDownload: React.FC<ResumeDownloadProps> = ({ altText }) => {
    const locale = useLocale();
    const config = useResumeConfig();
    const title = altText ?? config.resume.title;
    const url = config.resume.url;

    return (
        <div style={styles.resumeContainer}>
            <img style={styles.resumePrinter} alt="" src={printer} />
            <div style={styles.resumeContainerText}>
                <h3>{title}</h3>
                {url ? (
                    <a rel="noreferrer" target="_blank" href={url}>
                        <p>
                            {locale === 'zh'
                                ? '点击下载 PDF'
                                : 'Click to download PDF'}
                        </p>
                    </a>
                ) : (
                    <p style={styles.hint}>
                        <sub>{config.resume.hint}</sub>
                    </p>
                )}
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    resumeContainer: {
        backgroundColor: 'white',
        padding: 12,
        boxSizing: 'border-box',
        border: '2px solid black',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: '100%',
        alignItems: 'center',
        gap: 12,
        flexWrap: 'wrap',
    },
    resumeContainerText: {
        flexDirection: 'column',
        minWidth: 220,
    },
    resumePrinter: {
        width: 56,
        height: 48,
        paddingRight: 12,
    },
    hint: {
        opacity: 0.85,
        marginTop: 6,
    },
};

export default ResumeDownload;
