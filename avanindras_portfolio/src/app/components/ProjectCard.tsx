export default function ProjectCard({
  name,
  description,
  technologies,
  demo,
}: {
  name: string;
  description: string;
  technologies: string[];
  demo: string;
}) {
  return (
    <div className="mb-5 max-w-prose flex flex-col">
      <span className="font-semibold">{name}</span>
      {demo !=="N/A" && (<video src={demo} autoPlay loop muted playsInline className="mb-3 rounded-lg max-w-xl"/>)}

      <p>{description}</p>


      <div className="flex">
        <span className="mr-1 font-semibold text-sm">Skills:</span>
        {technologies.map((item) => (
          <span key={item} className="mr-1 text-sm">
            {item + " |"}
          </span>
        ))}
      </div>
    </div>
  );
}
