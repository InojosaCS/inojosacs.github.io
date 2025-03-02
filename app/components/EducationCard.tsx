import { ChevronRight } from "lucide-react";

export const EducationCard = () => {
    return (
        <div className="rounded-xl transition-transform duration-300">
            <div className="grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2">
                    {/* <div className="text-[#0bc] mb-2">2017 cohort</div> */}
                    <h3 className="text-xl font-bold text-white mb-1">B.S. in Computer Engineering</h3>
                    <h4 className="text-slate-300 mb-4">Universidad Simón Bolívar, Venezuela</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li key={1} className="flex">
                            <ChevronRight className="text-[#0bc] mr-2 flex-shrink-0 mt-1" size={16} />
                            <span>Degree in Computer Engineering (Computer Science-focused), having pursued advanced elective coursework in Algorithm Design, Software Engineering, and Databases.</span>
                        </li>
                        <li key={2} className="flex">
                            <ChevronRight className="text-[#0bc] mr-2 flex-shrink-0 mt-1" size={16} />
                            <span>ICPC Competitor: ICPC is an algorithmic programming competition for university students.</span>
                        </li>
                        <li key={3} className="flex">
                            <ChevronRight className="text-[#0bc] mr-2 flex-shrink-0 mt-1" size={16} />
                            <span>Sports coordinator of the Computer Engineering Student Center.</span>
                        </li>
                        <li key={3} className="flex">
                            <ChevronRight className="text-[#0bc] mr-2 flex-shrink-0 mt-1" size={16} />
                            <span>First graduate of the 2017 cohort in Computer Engineering.</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}