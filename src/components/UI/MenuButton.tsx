import { handleItemClick, navItems } from '@/utils/navbar.utils';
import { useState } from 'react';

export const MenuButton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <div className="md:hidden flex items-center justify-end">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex flex-col justify-center items-center h-9 w-9 p-1 gap-1 rounded-md hover:bg-white/5 transition-colors cursor-pointer"
                aria-label={isMenuOpen ? 'close menu' : 'open menu'}
            >
                <span
                    className={`block h-[1.5px] bg-neutral-400 rounded-sm transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-5.5 translate-y-1.25 rotate-45 bg-primary-300' : 'w-5.5'}`}
                />
                <span
                    className={`block h-[1.5px] bg-neutral-400 rounded-sm transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 scale-x-0' : 'w-4'}`}
                />
                <span
                    className={`block h-[1.5px] bg-neutral-400 rounded-sm transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-5.5 -translate-y-1.5 -rotate-45 bg-primary-300' : 'w-5.5'}`}
                />
            </button>
            <div
                className={`absolute top-16 left-0 right-0 bg-neutral-950 overflow-hidden duration-400 ease-in-out ${isMenuOpen ? 'max-h-72 py-4' : 'max-h-0 pointer-events-none'}`}
            >
                {navItems.map((item) => (
                    <div key={item.name} className="">
                        <a
                            href={item.href}
                            onClick={(e) => handleItemClick(e, item.name, setIsMenuOpen)}
                            className="block w-full font-body px-8 py-3 text-sm text-neutral-400/90 hover:text-neutral-200 hover:pl-10 border-b border-neutral-400/10 last:border-none transition-all duration-300"
                        >
                            {item.name}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};
