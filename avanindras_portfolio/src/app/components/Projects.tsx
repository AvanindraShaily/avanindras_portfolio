import projects from "@/app/data/projects.json";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="flex flex-col max-w-2xl text-justify">
      <h4 className="mb-2 text-xl font-bold tracking-tight text-slate-200">
        Projects
      </h4>
      <div>
        {projects.map((projo) => (
          <ProjectCard
            key={projo.name}
            name={projo.name}
            description={projo.description}
            technologies={projo.technologies}
            demo={projo.demo}
          />
        ))}
      </div>
    </div>
  );
}
