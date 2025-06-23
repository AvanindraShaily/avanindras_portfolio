import Image from "next/image";


export default function Title(){
    return(
        <div>
            <Image src="/temp_portrait.jpg" 
            alt="Avanindra's portrait" 
            width="100"
            height="100"
            className="rounded-full"
            />
            <h1 className="text-2xl font-bold tracking-tight text-slate-200">Avanindra Shaily</h1>
            <p className = "text-slate-300">Full-stack Software Engineer</p>

        </div>
    );
}