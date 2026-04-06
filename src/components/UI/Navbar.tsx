const navItems = [
    { name: 'Home', href: '#', lineWidth: '37px' },
    { name: 'About', href: '#', lineWidth: '38px' },
    { name: 'Projects', href: '#', lineWidth: '50px' },
    { name: 'Skills', href: '#', lineWidth: '33px' },
    { name: 'Contact', href: '#', lineWidth: '48px' },
]

export const Navbar = () => {
    return (
        <div className="text-neutral-400 w-full mx-auto px-4 h-16 bg-neutral-500/10 backdrop-blur-sm border-b border-neutral-700/20">
            <nav className="relative max-w-6xl mx-auto h-full flex items-center justify-between px-4">
                <div className="w-3/12">
                    <span>presoftCore</span>
                </div>
                <div className="w-7/12 flex items-center justify-end gap-8">
                    {navItems.map((item) => (
                        <a key={item.name} href={item.href} className="nav-link relative text-sm font-dm-sans text-neutral-400 hover:text-neutral-200 transition-colors" style={{ '--line-width': item.lineWidth } as React.CSSProperties}> {item.name} </a>
                    ))}
                </div>
            </nav>
        </div>
    )
}
