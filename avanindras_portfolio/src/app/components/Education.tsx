
import education  from "@/app/data/education.json";
import EducationCard from "./EducationCard";

export default function Education(){

    return(
        <div>
            <h3 className="mb-2 text-l font-bold tracking-tight text-slate-200">Education</h3>
            <div className="= space-y-1">
            {education.map((edu)=>(
                <EducationCard
                key={edu.location}
                location={edu.location}
                degree={edu.degree}
                graduation={edu.graduation_date}
                />
            ))}
            </div>
        </div>
    );
}