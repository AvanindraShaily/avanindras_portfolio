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

    /*

    {
        "location": "Exact Sciences - Madison, WI",
        "dates": "May 2024-Nov 2024",
        "position": "Clinical Lab Scientist",
        "description": "Operated and maintained Cologuard testing equipment to process 300-400 patient samples a day under strict regulation. Troubleshot processes with lab product developers to continuously decrease the error rate of one of our automated machines by > 90%."
    },

    */