import projects from "@/app/data/projects.json";
import ProjectCard from "./ProjectCard";

export default function Projects(){
    return(
        <div>
            <h4 className="mb-2 text-l font-bold tracking-tight text-slate-200">Projects</h4>
            <div className="= space-y-1">
            {projects.map((projo)=>(
                <ProjectCard
                key={projo.name}
                name={projo.name}
                description={projo.description}
                technologies={projo.technologies}
                />
            ))}
            </div>
        </div>
    );
}