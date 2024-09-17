import { motion } from 'framer-motion';
import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";
import ProjectTag from './ProjectTag';

const Projects = () => {
  // Define animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="w-full flex flex-col items-center justify-center container mx-auto px-4 py-32">
      <h1 className="text-4xl font-bold pb-8">Featured Projects</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="mx-2 flex flex-col items-start text-left gap-4 border rounded-lg p-4 shadow-md"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img
              className="border-4 rounded-lg w-full h-auto object-cover"
              src={project.image}
              alt={project.title}
            />
            <div className="flex flex-col items-start">
              <h2 className="md:text-4xl text-2xl font-bold mt-4">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.mainFocus && (
                  <ProjectTag
                    text="Current Project"
                    bgColor="bg-[#1fc6c6]"
                    textColor="text-white"
                  />
                )}
                {project.latestProject && (
                  <ProjectTag
                    text="Latest Project!"
                    bgColor="bg-green-500"
                    textColor="text-white"
                  />
                )}
                {project.comingSoon && (
                  <ProjectTag
                    text="Coming Soon!"
                    bgColor="bg-yellow-300"
                    textColor="text-black"
                  />
                )}
              </div>
            </div>
            <p className="text-lg text-gray-600">{project.description}</p>
            <div className="mt-2">
              <h3 className="text-xl font-semibold">Skills Used:</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <img
                    key={i}
                    src={skill}
                    alt={`skill-${i}`}
                    className="w-12 h-12 max-w-[3rem] max-h-[3rem] object-contain"
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-start mt-2 gap-2">
              <button
                className={`border-2 rounded-full py-2 px-4 ${project.comingSoon && "cursor-not-allowed opacity-50"}`}
                disabled={project.comingSoon}
              >
                <a
                  className={`flex items-center gap-2 ${project.comingSoon && "text-gray-500"}`}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={20} />
                  GitHub
                </a>
              </button>
              <button
                className={`border-2 rounded-full py-2 px-4 ${project.comingSoon && "cursor-not-allowed opacity-50"}`}
                disabled={project.comingSoon}
              >
                {project.comingSoon ? (
                  "Live Demo"
                ) : (
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
