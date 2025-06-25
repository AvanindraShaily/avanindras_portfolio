import Title from "@/app/components/Title";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import Education from "@/app/components/Education";
import Certifications from "./components/Certifications";

export default function Home() {
  return (
    <div className="items-left min-h-screen p-16 pb-20 flex flex-col gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Title />
      <Education />
      <Projects />
      <Experience />
      <Certifications/>
    </div>
  );
}
