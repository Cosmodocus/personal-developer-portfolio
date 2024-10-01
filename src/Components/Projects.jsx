import { projects } from "../data/projects";
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center container mx-auto px-4 py-32">
      <h1 className="md:text-6xl text-4xl font-bold pb-8 text-center">Featured Projects</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 gap-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
