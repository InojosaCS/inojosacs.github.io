export function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white">{children}</h2>
            <div className="flex-grow ml-4 h-px bg-slate-700"></div>
        </div>
    )
}