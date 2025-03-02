import Link from "next/link";

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="text-slate-400 hover:text-[#0bc] transition-colors duration-300">
            {children}
        </Link>
    )
}