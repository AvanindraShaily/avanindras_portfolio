

export default function ProjectCard({name, description, technologies}: {name: string, description: string,  technologies: string[]}) {
    return(

        <div className="mb-5 max-w-prose">
                <span className="font-semibold">
                {name}             
                </span>

                <p>
                {description}
                </p>

                <div className="flex">
                {technologies.map((item)=>(
                    <span key={item} className="mr-1">
                        {item}
                    </span>
                ))}
                </div>


        </div>
    );
}