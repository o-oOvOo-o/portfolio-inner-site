import React from 'react';
import { Link } from '../general';

import { useNavigate } from 'react-router';
import { useLocale, useResumeConfig } from '../../i18n';
import LanguageToggle from './LanguageToggle';
import { PipelineIllustration } from './ResumeIllustrations';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
    const navigate = useNavigate();
    const locale = useLocale();
    const config = useResumeConfig();

    const goToContact = () => {
        navigate('/contact');
    };

    const pipelineSteps =
        locale === 'zh'
            ? ['工具', '管线', 'PCG', '落地']
            : ['Tools', 'Pipeline', 'PCG', 'Shipping'];

    return (
        <div style={styles.page}>
            <div style={styles.lang}>
                <LanguageToggle />
            </div>
            <div style={styles.header}>
                <h1 style={styles.name}>{config.profile.name}</h1>
                <h2>{config.profile.title}</h2>
                <p style={styles.tagline}>{config.meta.description}</p>
                {config.profile.interests?.length ? (
                    <div style={styles.focusRow}>
                        {config.profile.interests.map((item) => (
                            <span key={item} style={styles.focusTag}>
                                {item}
                            </span>
                        ))}
                    </div>
                ) : null}
            </div>
            <div style={styles.buttons}>
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
            <div style={styles.illustration}>
                <PipelineIllustration steps={pipelineSteps} height={140} />
            </div>
            <div style={styles.forHireContainer} onMouseDown={goToContact}>
                {/* <img src={forhire} alt="" /> */}
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
    },
    lang: {
        position: 'absolute',
        top: 12,
        right: 12,
    },
    header: {
        textAlign: 'center',
        marginBottom: 64,
        marginTop: 64,

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tagline: {
        marginTop: 12,
        maxWidth: 900,
        textAlign: 'center',
        opacity: 0.9,
    },
    focusRow: {
        marginTop: 20,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'center',
        maxWidth: 900,
    },
    focusTag: {
        padding: '4px 10px',
        border: '2px solid black',
        background: 'white',
        fontFamily: 'MillenniumBold',
        fontSize: 16,
    },
    buttons: {
        justifyContent: 'space-between',
    },
    image: {
        width: 800,
    },
    link: {
        padding: 16,
    },
    nowHiring: {
        backgroundColor: 'red',
        padding: 16,
    },
    illustration: {
        width: 900,
        maxWidth: '90%',
        marginTop: 36,
    },
    forHireContainer: {
        marginTop: 64,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    name: {
        fontSize: 72,
        marginBottom: 16,
        lineHeight: 0.9,
    },
};

export default Home;
