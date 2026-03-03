import React, { useCallback } from 'react';
import { toggleLocale, useLocale } from '../../i18n';

export interface LanguageToggleProps {
    className?: string;
    style?: React.CSSProperties;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className, style }) => {
    const locale = useLocale();
    const label = locale === 'en' ? '中文' : 'EN';

    const onClick = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        toggleLocale();
    }, []);

    return (
        <button
            className={className ? `${className} site-button` : 'site-button'}
            style={Object.assign({}, styles.button, style)}
            onMouseDown={onClick}
            type="button"
        >
            {label}
        </button>
    );
};

const styles: StyleSheetCSS = {
    button: {
        padding: '4px 10px',
        cursor: 'pointer',
    },
};

export default LanguageToggle;

