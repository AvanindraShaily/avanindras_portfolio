export default function EducationCard({
  location,
  degree,
  graduation,
}: {
  location: string;
  degree: string;
  graduation: string;
}) {
  return (
    <div className="mb-3">
      <div className="flex w-full">
        <span className="font-semibold">{location}</span>

        <span className="ml-auto">{graduation}</span>
      </div>

      <span className=" ml-5 text-sm">{degree}</span>
    </div>
  );
}
