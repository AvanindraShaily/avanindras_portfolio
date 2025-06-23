import experience from "@/app/data/experience.json";
import ExperienceCard from "./ExperienceCard";

export default function Experience(){
    return(
       <div>
            <h5 className="mb-1 text-l font-bold tracking-tight text-slate-200">Education</h5>
            <div className="space-y-1">
            {experience.map((expt)=>(
                <ExperienceCard
                key={expt.location}
                location={expt.location}
                dates={expt.dates}
                position={expt.position}
                description={expt.description}
                />
            ))}
            </div>
        </div>
    );
}