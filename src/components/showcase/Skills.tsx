import React from 'react';
import { useLocale, useResumeConfig } from '../../i18n';
import { NodeGraphIllustration } from './ResumeIllustrations';

export interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
    const locale = useLocale();
    const config = useResumeConfig();

    return (
        <div className="site-page-content">
            <h1>{config.skills.title}</h1>
            <div className="captioned-image">
                <NodeGraphIllustration />
                <p>
                    <sub>
                        <b>{locale === 'zh' ? '图示：' : 'Figure:'}</b>{' '}
                        {locale === 'zh'
                            ? '技能像一张图谱：工具把不同学科连接起来。'
                            : 'Skills as a graph — tools connect disciplines.'}
                    </sub>
                </p>
            </div>

            <div className="text-block">
                {config.skills.groups.map((group) => (
                    <div key={group.name} style={styles.group}>
                        <h3>{group.name}</h3>
                        <div style={styles.tags}>
                            {group.items.map((item) => (
                                <span key={item} style={styles.tag}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {config.education.items.length > 0 ? (
                <div className="text-block">
                    <h2>{config.education.title}</h2>
                    <br />
                    <ul>
                        {config.education.items.map((edu) => (
                            <li key={`${edu.school}-${edu.degree}`}>
                                <p>
                                    <b>{edu.school}</b> — {edu.degree}
                                </p>
                                {edu.detail && <p>{edu.detail}</p>}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

const styles: StyleSheetCSS = {
    group: {
        marginBottom: 24,
    },
    tags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        marginTop: 10,
    },
    tag: {
        padding: '4px 10px',
        border: '2px solid black',
        background: 'white',
        fontFamily: 'MillenniumBold',
        fontSize: 16,
    },
};

export default Skills;
