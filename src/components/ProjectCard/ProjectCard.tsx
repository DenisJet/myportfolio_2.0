import Image from "next/image";
import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProjectCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string;
  title: string;
  descriptionCard: string;
  iconsSrc: string[];
  link: string;
}

export default function ProjectCard(project: ProjectCardProps): JSX.Element {
  return (
    <Link
      href={project.link}
      className="group/portfolio-item text-black bg-white flex flex-col justify-start p-2 opacity-70 shadow-sm hover:opacity-100 hover:shadow-lg rounded-lg transition-all duration-500 ease-in-out"
    >
      <div className="flex gap-1 mt-1 mb-2">
        {project.iconsSrc &&
          project.iconsSrc.map((src) => (
            <Image key={src} src={src} alt="" width={20} height={20} />
          ))}
      </div>
      <div className="font-bold mb-3">{project.title}</div>
      <div className="excerpt mb-3">{project.descriptionCard}</div>
      <div className="mb-0 mt-auto ms-auto me-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="opacity-0 group-hover/portfolio-item:opacity-100 transition-all"
        >
          <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
        </svg>
      </div>
    </Link>
  );
}
