import React, { useState, useEffect } from 'react';

interface NavLink {
    name: string;
    ref: React.RefObject<HTMLDivElement>;
}

interface HeaderProps {
    navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#home" className="text-white flex items-center group">
                           <span className="text-3xl font-bold orbitron text-white group-hover:text-cyan-400 transition-colors">J&J</span>
                           <span className="ml-3 text-lg font-semibold orbitron text-slate-300 group-hover:text-cyan-300 transition-colors hidden sm:block">Automotive-Truck Repair</span>
                        </a>
                    </div>
                    <nav className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.ref)}
                                    className="text-gray-300 hover:bg-gray-700/50 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 uppercase tracking-wider orbitron"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white focus:outline-none focus:text-white">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.ref)}
                                className="text-gray-300 hover:bg-gray-700 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left uppercase orbitron"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;