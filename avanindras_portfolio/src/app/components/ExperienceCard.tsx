export default function ExperienceCard({
  location,
  dates,
  position,
  description,
}: {
  location: string;
  dates: string;
  position: string;
  description: string;
}) {
  return (
    <div className="mb-5 max-w-prose">
      <div className=" mb-2 flex w-full">
        <span className="font-semibold">{position + " - " + location}</span>

        <span className="ml-auto">{dates}</span>
      </div>

      <span>{description}</span>
    </div>
  );
}
