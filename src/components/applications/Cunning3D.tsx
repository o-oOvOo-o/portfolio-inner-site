import React, { useMemo } from 'react';
import { useLocale } from '../../i18n';
import Window from '../os/Window';

export interface Cunning3DAppProps extends WindowAppProps {}

const Cunning3DApp: React.FC<Cunning3DAppProps> = (props) => {
    const year = useMemo(() => new Date().getFullYear(), []);
    const locale = useLocale();

    return (
        <Window
            top={32}
            left={96}
            width={1100}
            height={760}
            windowBarIcon="windowExplorerIcon"
            windowTitle="Cunning3D"
            bottomLeftText={`cunning3d.vercel.app · ${year}`}
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
        >
            <div className="site-page" style={styles.page}>
                <iframe
                    src="https://cunning3d.vercel.app/"
                    title="Cunning3D"
                    style={styles.iframe}
                />
                <div style={styles.footer}>
                    <p>
                        <sub>
                            {locale === 'zh'
                                ? '想获得原生 Web 流畅体验？'
                                : 'Want the smooth native web experience?'}{' '}
                            {locale === 'zh'
                                ? '点击访问完整 Cunning3D Showcase 网站。'
                                : 'Open the full Cunning3D showcase site.'}
                        </sub>
                    </p>
                    <a
                        className="site-button"
                        href="https://cunning3d.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        style={styles.footerButton}
                    >
                        {locale === 'zh'
                            ? '打开完整 Showcase'
                            : 'Open full showcase'}
                    </a>
                </div>
            </div>
        </Window>
    );
};

const styles: StyleSheetCSS = {
    page: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    iframe: {
        border: 'none',
        width: '100%',
        flex: 1,
        minHeight: 0,
        background: 'white',
    },
    footer: {
        borderTop: '2px solid black',
        background: 'white',
        padding: 10,
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
        flexWrap: 'wrap',
    },
    footerButton: {
        textDecoration: 'none',
        padding: '4px 10px',
        lineHeight: '24px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        whiteSpace: 'nowrap',
    },
};

export default Cunning3DApp;
