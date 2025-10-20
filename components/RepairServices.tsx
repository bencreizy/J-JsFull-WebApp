import React from 'react';
import type { Service } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
    ToolboxIcon, 
    GeneralRepairIcon, 
    EngineIcon, 
    BatteryIcon, 
    TransmissionIcon, 
    BrakeSuspensionIcon, 
    EmissionsIcon, 
    FluidsIcon, 
    PaintBodyIcon 
} from './icons/ServiceIcons';

const services: Service[] = [
    { name: 'Main Service Hub', description: 'Our full-service toolbox for comprehensive shop and hub services.', icon: <ToolboxIcon /> },
    { name: 'General Repair & Diagnostics', description: 'Expert diagnostics and general repairs to address any issue, big or small.', icon: <GeneralRepairIcon /> },
    { name: 'Engine Overhaul & Performance', description: 'Complete engine rebuilds, performance tuning, and heavy-duty overhauls.', icon: <EngineIcon /> },
    { name: 'Electrical Systems', description: 'Advanced troubleshooting and repair of complex vehicle electrical systems.', icon: <BatteryIcon /> },
    { name: 'Powertrain / Drivetrain', description: 'Specialized service for transmissions, differentials, and drivetrain components.', icon: <TransmissionIcon /> },
    { name: 'Brakes, Suspension & Steering', description: 'Ensuring your safety and ride comfort with expert brake and chassis work.', icon: <BrakeSuspensionIcon /> },
    { name: 'Emissions, Muffler & Exhaust', description: 'Servicing exhaust systems and ensuring your vehicle meets emissions standards.', icon: <EmissionsIcon /> },
    { name: 'Fluids & Preventive Maintenance', description: 'Oil changes and fluid services to keep your vehicle running reliably.', icon: <FluidsIcon /> },
    { name: 'Paint, Body & Collision Repair', description: 'Restoring your vehicle to pre-accident condition with flawless bodywork.', icon: <PaintBodyIcon /> },
];

const ServiceCard: React.FC<{ service: Service; delay: number }> = ({ service, delay }) => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
    return (
         <div ref={ref} className={`bg-[#2b2b2b] border border-cyan-500 rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:bg-[#3a3a3a] hover:shadow-[0_0_20px_rgba(255,255,255,0.75)] shadow-[0_0_8px_rgba(255,255,255,0.4)] scroll-reveal flex flex-col justify-end min-h-72 ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
            <div>
                <h3 className="text-xl font-bold orbitron text-slate-100 mb-2">{service.name}</h3>
                <p className="text-gray-400">{service.description}</p>
            </div>
        </div>
    );
};

const Services: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
    return (
        <section ref={ref} className={`py-20 md:py-24 bg-black scroll-reveal ${isVisible ? 'visible' : ''}`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold orbitron text-slate-100">Our Core Services</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Precision solutions for every need, from preventative maintenance to complete overhauls.</p>
                    <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={service.name} service={service} delay={index * 100} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;