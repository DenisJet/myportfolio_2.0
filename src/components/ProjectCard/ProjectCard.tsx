import Link from 'next/link';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProjectProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string;
  title: string;
  description: string;
  year: number;
  iconsSrc: string[];
  link: string;
}

export default function ProjectCard(project: ProjectProps): JSX.Element {
  return (
    <Link
      href={project.link}
      className='group/portfolio-item text-black bg-white flex flex-col justify-start p-2 opacity-70 shadow-sm hover:opacity-100 hover:shadow-lg rounded-lg transition-all'
    >
      <div className='flex gap-1 mt-1 mb-2'>
        {project.iconsSrc &&
          project.iconsSrc.map((src) => <img key={src} src={src} alt='' className='max-w-[20px] max-h-[20px]' />)}
      </div>
      <div className='font-bold mb-3'>{project.title}</div>
      <div className='excerpt mb-3'>{project.description}</div>
      <div className='flex justify-between items-center mb-0 mt-auto'>
        <div className='italic text-sm text-gray-700'>{project.year}</div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          className='opacity-0 group-hover/portfolio-item:opacity-100 transition-all'
        >
          <path d='m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z'></path>
        </svg>
      </div>
    </Link>
  );
}
