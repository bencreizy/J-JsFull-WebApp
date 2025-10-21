import React from 'react';
import type { Technician } from '../types';

const technicians: Technician[] = [
    {
        name: 'Jake "The Wrench" Riley',
        title: 'Lead Diesel Technician',
        bio: 'With over 20 years under the hood, Jake has seen it all. Specializes in complex engine diagnostics and performance tuning.',
        imageUrl: 'https://picsum.photos/seed/mechanic1/400/400'
    },
    {
        name: 'Maria "Sparks" Garcia',
        title: 'Electrical & Collision Expert',
        bio: 'Maria brings precision and an artist\'s touch to every job, from intricate wiring to flawless bodywork and paint.',
        imageUrl: 'https://picsum.photos/seed/mechanic2/400/400'
    },
    {
        name: '"Big Dave" Chen',
        title: 'Heavy-Duty & Fabrication',
        bio: 'The master of heavy machinery and custom fabrication. If it needs to be stronger or built from scratch, Dave is the man.',
        imageUrl: 'https://picsum.photos/seed/mechanic3/400/400'
    },
];

const TechnicianCard: React.FC<{ tech: Technician }> = ({ tech }) => {

    return (
        <div className="group relative overflow-hidden rounded-lg bg-[#2b2b2b] border border-cyan-500 shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.75)] will-change-transform translate-z-0">
            <img src={tech.imageUrl} alt={tech.name} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold orbitron text-white">{tech.name}</h3>
                <p className="text-cyan-400 font-semibold">{tech.title}</p>
                <p className="text-slate-300 mt-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500">{tech.bio}</p>
            </div>
        </div>
    );
};


const Technicians: React.FC = () => {
    return (
        <section className="py-20 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold orbitron text-slate-100">Our Expert Technicians</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">The skilled hands and brilliant minds behind every successful repair.</p>
                    <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {technicians.map((tech) => (
                       <TechnicianCard key={tech.name} tech={tech} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technicians;