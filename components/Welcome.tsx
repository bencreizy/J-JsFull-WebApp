import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Welcome: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

    return (
        <section ref={ref} className={`py-20 md:py-32 bg-black border-y border-cyan-500/50 scroll-reveal ${isVisible ? 'visible' : ''}`}>
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold orbitron text-white">Built to Keep You Moving</h2>
                <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 mb-8"></div>
                <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
                    At J & J Automotive-Truck Repair, we understand that downtime is costly. That's why we offer comprehensive on-site repairs and an emergency breakdown service ready to roll 24/7. From advanced computer diagnostics to heavy-duty engine overhauls, our certified technicians have the tools and expertise to get you back on the road safely and swiftly. We're not just mechanics; we're your partners in performance.
                </p>
            </div>
        </section>
    );
};

export default Welcome;