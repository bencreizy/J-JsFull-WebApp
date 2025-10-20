import React, { useState, useEffect } from 'react';
import { WrenchIcon, GearIcon, SparkIcon, TireIcon } from './icons/AnimatedIcons';

interface HeroProps {
    contactRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ contactRef }) => {
    const [shake, setShake] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShake(true);
            setTimeout(() => setShake(false), 500);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    
    const handleRequestServiceClick = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
             <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
             <div className="absolute inset-0 z-0">
                <img src="https://picsum.photos/seed/truckengine/1920/1080" alt="Truck engine background" className="w-full h-full object-cover opacity-30" />
                {/* Animated Icons */}
                <WrenchIcon className="absolute top-[10%] left-[5%] w-16 h-16 text-slate-500 opacity-20" style={{ animation: 'float-item 8s ease-in-out infinite' }} />
                <GearIcon className="absolute bottom-[15%] right-[10%] w-24 h-24 text-slate-600 opacity-20 gear-rotate" />
                <SparkIcon className="absolute top-[20%] right-[20%] w-12 h-12 text-cyan-400 opacity-50" style={{ animation: 'spark-flash 3s ease-in-out infinite 1s' }} />
                <TireIcon className="absolute bottom-[5%] left-[15%] w-20 h-20 text-slate-500 opacity-10 gear-rotate-fast" />
                <GearIcon className="absolute top-[50%] left-[25%] w-12 h-12 text-slate-700 opacity-20 gear-rotate-fast" style={{ animationDuration: '15s' }} />
                <WrenchIcon className="absolute bottom-[25%] right-[30%] w-14 h-14 text-slate-600 opacity-20" style={{ animation: 'float-item 10s ease-in-out infinite reverse 2s' }} />
            </div>

            <div className="relative z-20 container mx-auto px-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black orbitron uppercase tracking-tighter">
                    <span className="text-white">J & J</span> <span className="text-white">Automotive</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                    Your Trusted Source for Automotive and Truck Repair.
                </p>
                <div className="mt-12">
                    <p className="text-xl md:text-2xl text-gray-300">24/7 EMERGENCY BREAKDOWN SERVICE</p>
                    <a href="tel:8554608778" className="mt-2 inline-block text-4xl md:text-6xl font-bold orbitron text-slate-200 pulse-glow-text transition-transform hover:scale-105">
                        (855) 460-8778
                    </a>
                </div>
                <div className="mt-12">
                     <button onClick={handleRequestServiceClick} className={`bg-[#3a3a3a] text-white font-bold orbitron uppercase tracking-widest py-3 px-8 rounded-sm border-2 border-cyan-500 shadow-[0_0_8px_rgba(255,255,255,0.4)] hover:bg-[#2b2b2b] hover:shadow-lg hover:shadow-[0_0_20px_#FFFFFF] transition-all duration-300 transform hover:-translate-y-1 ${shake ? 'subtle-shake' : ''}`}>
                        Request Service
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;