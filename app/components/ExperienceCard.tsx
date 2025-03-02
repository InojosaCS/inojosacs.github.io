import { ChevronRight } from "lucide-react"

export type Experience = {
    period: string
    role: string
    company: string
    responsibilities: string[]
}

export function ExperienceCard({ experience }: { experience: Experience }) {
    return (
        <div className="bg-[#1e293b] p-6 rounded-xl hover:translate-y-[-5px] transition-transform duration-300">
            <div className="text-[#0bc] mb-2">{experience.period}</div>
            <h3 className="text-xl font-bold text-white mb-1">{experience.role}</h3>
            <h4 className="text-slate-300 mb-4">{experience.company}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
                {experience.responsibilities.map((resp, index) => (
                    <li key={index} className="flex">
                        <ChevronRight className="text-[#0bc] mr-2 flex-shrink-0 mt-1" size={16} />
                        <span>{resp}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}