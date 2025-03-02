export function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#0bc] transition-colors duration-300"
        >
            {icon}
        </a>
    )
}
