import experience from "@/app/data/experience.json";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div className="flex flex-col max-w-prose text-justify">
      <h5 className="mb-1 text-xl font-bold tracking-tight text-slate-200">
        Experience
      </h5>
      <div>
        {experience.map((expt) => (
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
