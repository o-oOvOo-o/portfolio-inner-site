import React, { useState } from 'react';
import Window from '../os/Window';

export interface WinampAppProps extends WindowAppProps {}

const WinampApp: React.FC<WinampAppProps> = (props) => {
    const [width, setWidth] = useState(720);
    const [height, setHeight] = useState(520);

    return (
        <Window
            top={56}
            left={140}
            width={width}
            height={height}
            windowBarIcon="winampIcon"
            windowTitle="Winamp"
            bottomLeftText="Classic player powered by Webamp"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
        >
            <div className="site-page" style={styles.page}>
                <iframe
                    src="/winamp.html"
                    title="Winamp"
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
        width: '100%',
        height: '100%',
        border: 'none',
        background: '#c0c0c0',
    },
};

export default WinampApp;
