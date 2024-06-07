import { projectsEn } from '../../../projects/projectsEn';
import { projectsRu } from '../../../projects/projectsRu';
import ProjectCard from '../../../components/ProjectCard/ProjectCard';
import { useLocale, useTranslations } from 'next-intl';

export default function Portfolio(): JSX.Element {
  const t = useTranslations('Portfolio');
  const locale = useLocale();

  return (
    <main>
      <div className='container p-4 mx-auto max-w-4xl'>
        <h1 className='gradient text-5xl font-bold mt-6 mb-5'>{t('title')}</h1>
        <div className='grid md:grid-cols-3 gap-2'>
          {locale == 'en'
            ? projectsEn &&
              projectsEn.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  link={project.link}
                  title={project.title}
                  descriptionCard={project.descriptionCard}
                  iconsSrc={project.iconsSrc}
                />
              ))
            : projectsRu &&
              projectsRu.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  link={project.link}
                  title={project.title}
                  descriptionCard={project.descriptionCard}
                  iconsSrc={project.iconsSrc}
                />
              ))}
        </div>
      </div>
    </main>
  );
}
