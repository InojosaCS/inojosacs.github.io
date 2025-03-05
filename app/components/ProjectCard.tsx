import { ExternalLink, Github } from "lucide-react"

export type Project = {
    title: string
    description: string
    image: string
    technologies: string[]
    github: string
    demo: string
}

export function ProjectCard({ project, isEven }: { project: Project; isEven: boolean }) {
    return (
        <div className={`relative md:grid md:grid-cols-12 gap-4 items-center ${isEven ? "" : "md:text-right"}`}>
            <div className={`md:col-span-7 ${isEven ? "md:col-start-6" : "md:col-start-1"} relative z-5`}>
                <div className="relative group overflow-hidden rounded-xl">
                    <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#6272a4]/50 transition-opacity duration-300 opacity-40 group-hover:opacity-0"></div>
                </div>
            </div>

            <div className={`md:col-span-6 ${isEven ? "md:col-start-1" : "md:col-start-7"} relative z-5`}>
                <div
                    className={`bg-[#1e293b] p-6 rounded-xl shadow-xl ${isEven ? "md:-mr-16" : "md:-ml-16"} mt-[-2rem] md:mt-0`}
                >
                    <p className="text-[#0bc] text-sm mb-2">Featured Project</p>
                    <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>
                    <ul className={`flex flex-wrap gap-2 text-xs text-slate-400 mb-6 ${isEven ? "" : "md:justify-end"}`}>
                        {project.technologies.map((tech) => (
                            <li key={tech} className="px-2 py-1 bg-[#0f172a] rounded">
                                {tech}
                            </li>
                        ))}
                    </ul>
                    <div className={`flex gap-4 ${isEven ? "" : "md:justify-end"}`}>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 hover:text-[#0bc]"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 hover:text-[#0bc]"
                        >
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

