import Image from "next/image";

export default function Title() {
  return (
    <div className="flex flex-col max-w-xl ">

      <h1 className="mb-2 text-4xl font-bold tracking-tight text-slate-200">
        Avanindra Shaily
      </h1>
      <p className="mb-8 text-slate-300">Full-stack Software Engineer</p>
      <p className="mb-3 text-justify">
        M.S in Computer Science student at the University of Wisconsin-Madison with
        three years of Healthcare software/health tech experience at both Epic Systems and Exact Sciences.
      </p>
      <p className="text-justify">
        Experienced in full-stack development with a focus on NextJS and React.
        Expertise in both Python and Javascript/Typescript. Certified in the AWS
        cloud suite as both a Solutions Architect and Cloud Developer, as well as 2+ years of experience with both VMWare and Docker.
      </p>
    </div>
  );
}
