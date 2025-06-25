import certifications from "@/app/data/certifications.json";
import EducationCard from "./EducationCard";
import CertificationCard from "./CertificationCard";

export default function Certifications() {
  return (
    <div className="flex flex-col max-w-xl">
      <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-200">
        Certifications
      </h3>
      <div>
        {certifications.map((cer) => (
          <CertificationCard
            key={cer.title}
            title={cer.title}
            issuer={cer.issuer}
            date={cer.date}
          />
        ))}
      </div>
    </div>
  );
}
