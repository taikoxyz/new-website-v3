import React from 'react';
import type { Project } from '@/content/types';
import css from './projects-list.module.scss';

interface Props {
    projects: Project[];
}

export const ProjectsList: React.FC<Props> = React.memo(({ projects }) => {
    return (
        <ul className={css.list}>
            {projects.map((project) => (
                <li className={css.list_item} key={project.id}>
                    <a
                        className={css.card}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className={css.card_header}>
                            <img
                                className={css.card_icon}
                                src={project.icon}
                                alt={project.name}
                            />
                            <span className={css.card_type} data-type={project.type.toLowerCase().replace(/\s+/g, '-')}>
                                {project.type}
                            </span>
                        </div>

                        <h3 className={css.card_title}>{project.name}</h3>
                        <p className={css.card_text}>{project.description}</p>

                        <div className={css.card_categories}>
                            {project.categories.map((cat) => (
                                <span className={css.card_category} key={cat}>
                                    {cat}
                                </span>
                            ))}
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    );
});

ProjectsList.displayName = 'ProjectsList';
