import { projects } from '../projects/projects';
import ProjectCard, { ProjectProps } from '../components/ProjectCard/ProjectCard';

export default function Portfolio(): JSX.Element {
  return (
    <main>
      <div className='container p-4 mx-auto max-w-4xl'>
        <h1 className='gradient text-6xl font-bold mt-6 mb-3'>Portfolio</h1>
        <div className='grid md:grid-cols-3 gap-2'>
          {projects &&
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                link={project.link}
                title={project.title}
                description={project.description}
                iconsSrc={project.iconsSrc}
                year={project.year}
              />
            ))}
        </div>
      </div>
    </main>
  );
}
