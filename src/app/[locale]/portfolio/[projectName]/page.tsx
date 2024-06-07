import Link from 'next/link';
import Image from 'next/image';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { projectsEn } from '@/projects/projectsEn';
import { projectsRu } from '@/projects/projectsRu';
import { useTranslations } from 'next-intl';

export interface ProjectPageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string;
  title: string;
  description: string;
  year: number;
  imageSrc: string;
  uses: string;
  addLinks: string[];
}

export default function Project({ params }: { params: { projectName: string; locale: string } }) {
  const t = useTranslations('Project');
  const locale = params.locale;

  const project =
    locale == 'en'
      ? projectsEn.find((project) => project.link.split('/')[3] == String(params.projectName))
      : projectsRu.find((project) => project.link.split('/')[3] == String(params.projectName));

  return (
    <main className=''>
      {project && (
        <div className='container main p-4 mx-auto max-w-4xl'>
          <Link className='inline-block hover:opacity-50' href={`/${locale}/portfolio`} title='Назад'>
            <Image src='/icons/arrow-back-icon.svg' width={35} height={25} alt='' />
          </Link>
          <h1 className='gradient text-5xl font-bold mt-6 mb-5 leading-tight'>{project.title}</h1>
          <Image src={project.imageSrc} alt='project image' width={1852} height={933} className='w-full h-auto' />
          <p className='font-light mt-4 text-lg'>{project.description}</p>
          <p className='font-light mt-1 mb-4 text-lg'>
            {t('uses')}: <strong>{project.uses}</strong>
          </p>
          <p className='font-light mb-1 text-lg'>{t('res')}:</p>
          <ul>
            {project.addLinks[0] && (
              <li>
                <Link href={project.addLinks[0]} target='_blank' className='font-light hover:underline block'>
                  {`- ${project.addLinks[0]}`}
                </Link>
              </li>
            )}
            {project.addLinks[1] && (
              <Link href={project.addLinks[1]} target='_blank' className='font-light hover:underline block'>
                {`- ${project.addLinks[1]}`}
              </Link>
            )}
            {project.addLinks[2] && (
              <Link href={project.addLinks[2]} target='_blank' className='font-light hover:underline block'>
                {`- ${project.addLinks[2]}`}
              </Link>
            )}
          </ul>
        </div>
      )}
    </main>
  );
}
