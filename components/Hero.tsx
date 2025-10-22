import React from 'react';

interface HeroProps {
    contactRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ contactRef }) => {
    
    const handleRequestServiceClick = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
             <div className="absolute inset-0 z-0">
                {/* Animated Icons Removed */}
            </div>

            <div className="relative z-20 container mx-auto px-4">
                <img 
                    src="https://raw.githubusercontent.com/bencreizy/J-JsFull-WebApp/main/assets/1761057621578.png" 
                    alt="J & J Automotive Logo" 
                    className="mx-auto mt-8 max-w-[85%] md:max-w-[65%] h-auto float-logo-animation scale-[1.15] will-change-transform translate-z-0"
                />
                {/* New Request Service button added here */}
                <div className="mt-8">
                     <button onClick={handleRequestServiceClick} className={`bg-[#3a3a3a] text-white font-bold orbitron uppercase tracking-widest py-3 px-8 rounded-sm border-2 border-cyan-500 shadow-[0_0_8px_rgba(255,255,255,0.4)] hover:bg-[#2b2b2b] hover:shadow-lg hover:shadow-[0_0_20px_#FFFFFF] transition-all duration-300 transform hover:-translate-y-1 will-change-transform translate-z-0`}>
                        Request Service
                    </button>
                </div>
                <div className="mt-16">
                    <p className="text-xl md:text-2xl text-gray-300">24/7 EMERGENCY BREAKDOWN SERVICE</p>
                    <a href="tel:8554608778" className="mt-2 inline-block text-4xl md:text-6xl font-bold orbitron text-slate-200 transition-transform hover:scale-105 whitespace-nowrap will-change-transform translate-z-0">
                        (855) 460-8778
                    </a>
                </div>
                <div className="mt-12">
                     <button onClick={handleRequestServiceClick} className={`bg-[#3a3a3a] text-white font-bold orbitron uppercase tracking-widest py-3 px-8 rounded-sm border-2 border-cyan-500 shadow-[0_0_8px_rgba(255,255,255,0.4)] hover:bg-[#2b2b2b] hover:shadow-lg hover:shadow-[0_0_20px_#FFFFFF] transition-all duration-300 transform hover:-translate-y-1 will-change-transform translate-z-0`}>
                        Request Service
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;