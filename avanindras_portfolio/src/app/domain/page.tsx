import Title from "@/app/components/Title";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import Education from "@/app/components/Education";

export default function Home() {
  return (
    <div className="items-left min-h-screen p-8 pb-20 flex flex-col gap-24 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <Title/>
    <About/>
    <Education/>
    <Projects/>
    <Experience/>
    </div>
  );
}
