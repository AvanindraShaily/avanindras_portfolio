

export default function EducationCard({location, degree, graduation}: {location: string, degree: string, graduation: string}) {
    return(

        <div className="max-w-prose">
            <div className="flex w-full">

                <span className="font-semibold">
                {location}            
                </span>

                <span  className="ml-auto">
                {graduation}            
                </span>

            </div>
            
            <span>{degree}</span>
        </div>
    );
}