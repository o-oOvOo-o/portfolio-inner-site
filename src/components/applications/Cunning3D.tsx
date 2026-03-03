import React, { useMemo } from 'react';
import Window from '../os/Window';

export interface Cunning3DAppProps extends WindowAppProps {}

const Cunning3DApp: React.FC<Cunning3DAppProps> = (props) => {
    const year = useMemo(() => new Date().getFullYear(), []);

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
                    width="100%"
                    height="100%"
                    style={styles.iframe}
                />
            </div>
        </Window>
    );
};

const styles: StyleSheetCSS = {
    page: {
        width: '100%',
        height: '100%',
    },
    iframe: {
        border: 'none',
        width: '100%',
        height: '100%',
        background: 'white',
    },
};

export default Cunning3DApp;
