import { navItems } from "@/utils/navbar.utils"
import { MenuButton } from "./MenuButton"

export const Navbar = () => {
    return (
        <div className="text-neutral-400 w-full mx-auto px-4 h-16 bg-neutral-500/10 backdrop-blur-sm border-b border-neutral-700/20 select-none">
            <nav className="relative max-w-6xl mx-auto h-full flex items-center justify-between">
                <div className="w-5/12 font-display text-xl">
                    <span className="gradient-text bg-linear-to-br from-primary-500 from-0% to-accent-400 bg-clip-text text-transparent">preSoft</span>
                    <span className="font-bold">Core</span>
                </div>
                <div className="hidden md:flex w-7/12 items-center justify-end gap-10">
                    {navItems.map((item) => (
                        <a key={item.name} href={item.href} className="nav-link font-body relative text-sm text-neutral-400 hover:text-neutral-200 transition-colors" style={{ '--line-width': '100%' } as React.CSSProperties}> {item.name} </a>
                    ))}
                </div>
                <MenuButton />
            </nav>
        </div>
    )
}
