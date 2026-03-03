import React from 'react';
import { Link } from '../general';
import { useLocation, useNavigate } from 'react-router';
import { useLocale, useResumeConfig } from '../../i18n';
import LanguageToggle from './LanguageToggle';

export interface VerticalNavbarProps {}

const VerticalNavbar: React.FC<VerticalNavbarProps> = (props) => {
    const location = useLocation();
    const locale = useLocale();
    const config = useResumeConfig();
    const isHome = location.pathname === '/';

    const navigate = useNavigate();
    const goToContact = () => {
        navigate('/contact');
    };

    const year = new Date().getFullYear() % 100;
    const nameLines = config.profile.name.split(' ').filter(Boolean);
    const displayLines =
        nameLines.length === 2 ? nameLines : [config.profile.name];

    return !isHome ? (
        <div style={styles.navbar}>
            <div style={styles.header}>
                {displayLines.map((line) => (
                    <h1 key={line} style={styles.headerText}>
                        {line}
                    </h1>
                ))}
                <h3 style={styles.headerShowcase}>
                    {locale === 'zh' ? '作品集' : 'Showcase'} '{year}
                </h3>
                <div style={styles.lang}>
                    <LanguageToggle />
                </div>
            </div>
            <div style={styles.links}>
                <Link
                    containerStyle={styles.link}
                    to=""
                    text={config.nav.home}
                />
                <Link
                    containerStyle={styles.link}
                    to="about"
                    text={config.nav.about}
                />
                <Link
                    containerStyle={styles.link}
                    to="experience"
                    text={config.nav.experience}
                />
                <Link
                    containerStyle={styles.link}
                    to="projects"
                    text={config.nav.projects}
                />
                <Link
                    containerStyle={styles.link}
                    to="skills"
                    text={config.nav.skills}
                />
                <Link
                    containerStyle={styles.link}
                    to="contact"
                    text={config.nav.contact}
                />
            </div>
            <div style={styles.spacer} />
            <div style={styles.forHireContainer} onMouseDown={goToContact}>
                {/* <img src={forHire} style={styles.image} alt="" /> */}
            </div>
        </div>
    ) : (
        <></>
    );
};

const styles: StyleSheetCSS = {
    navbar: {
        width: 300,
        height: '100%',
        flexDirection: 'column',
        padding: 48,
        boxSizing: 'border-box',
        position: 'fixed',
        overflow: 'hidden',
    },
    header: {
        flexDirection: 'column',
        marginBottom: 64,
    },
    headerText: {
        fontSize: 38,
        lineHeight: 1,
    },
    headerShowcase: {
        marginTop: 12,
    },
    lang: {
        marginTop: 18,
    },
    logo: {
        width: '100%',
        marginBottom: 8,
    },
    link: {
        marginBottom: 32,
    },
    links: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: '80%',
    },
    spacer: {
        flex: 1,
    },
    forHireContainer: {
        cursor: 'pointer',

        width: '100%',
    },
};

export default VerticalNavbar;
