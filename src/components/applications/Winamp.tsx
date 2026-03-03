import React, { useEffect, useRef } from 'react';

export interface WinampAppProps extends WindowAppProps {}

const WinampApp: React.FC<WinampAppProps> = (props) => {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);

    useEffect(() => {
        const onMessage = (event: MessageEvent) => {
            if (event.origin !== window.location.origin) return;
            if (event.source !== iframeRef.current?.contentWindow) return;

            const type = (event.data as any)?.type;
            if (type === 'winamp:close') props.onClose();
            if (type === 'winamp:minimize') props.onMinimize();
            if (type === 'winamp:interact') props.onInteract();
        };

        window.addEventListener('message', onMessage);
        return () => {
            window.removeEventListener('message', onMessage);
        };
    }, [props.onClose, props.onMinimize, props.onInteract]);

    return (
        <div style={styles.container} onMouseDown={props.onInteract}>
            <iframe
                ref={iframeRef}
                src="/winamp.html"
                title="Winamp"
                style={styles.iframe}
            />
        </div>
    );
};

const styles: StyleSheetCSS = {
    container: {
        position: 'absolute',
        top: 56,
        left: 140,
        width: 560,
        height: 420,
        overflow: 'hidden',
    },
    iframe: {
        width: '100%',
        height: '100%',
        border: 'none',
        background: 'transparent',
    },
};

export default WinampApp;
