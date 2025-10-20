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
    { 
        name: 'Main Service Hub', 
        description: 'Our full-service toolbox for comprehensive shop and hub services.', 
        icon: <ToolboxIcon />,
        imageUrl: 'https://raw.githubusercontent.com/bencreizy/J-JsFull-WebApp/main/1760815108794.png'
    },
    { 
        name: 'General Repair & Diagnostics', 
        description: 'Expert diagnostics and general repairs to address any issue, big or small.', 
        icon: <GeneralRepairIcon />,
        imageUrl: 'https://raw.githubusercontent.com/bencreizy/J-JsFull-WebApp/main/1760916745796.png'
    },
    { 
        name: 'Engine Overhaul & Performance', 
        description: 'Complete engine rebuilds, performance tuning, and heavy-duty overhauls.', 
        icon: <EngineIcon />,
        imageUrl: 'https://raw.githubusercontent.com/bencreizy/J-JsFull-WebApp/main/1760918206712.png'
    },
    { 
        name: 'Electrical Systems', 
        description: 'Advanced troubleshooting and repair of complex vehicle electrical systems.', 
        icon: <BatteryIcon />,
        imageUrl: 'https://raw.githubusercontent.com/bencreizy/J-JsFull-WebApp/main/1760916798842.png'
    },
    { 
        name: 'Powertrain / Drivetrain', 
        description: 'Specialized service for transmissions, differentials, and drivetrain components.', 
        icon: <TransmissionIcon />,
        imageUrl: 'https://raw.githubusercontent.com/bencreizy/J-JsFull-WebApp/main/1760917628776.png'
    },
    { 
        name: 'Brakes, Suspension & Steering', 
        description: 'Ensuring your safety and ride comfort with expert brake and chassis work.', 
        icon: <BrakeSuspensionIcon />,
        imageUrl: 'https://raw.githubusercontent.com/bencreizy/J-JsFull-WebApp/main/1760916833650.png'
    },
    { 
        name: 'Emissions, Muffler & Exhaust', 
        description: 'Servicing exhaust systems and ensuring your vehicle meets emissions standards.', 
        icon: <EmissionsIcon />,
        imageUrl: 'https://raw.githubusercontent.com/bencreizy/J-JsFull-WebApp/main/1760916775897.png'
    },
    { 
        name: 'Fluids & Preventive Maintenance', 
        description: 'Oil changes and fluid services to keep your vehicle running reliably.', 
        icon: <FluidsIcon />,
        imageUrl: 'https://raw.githubusercontent.com/bencreizy/J-JsFull-WebApp/main/1760918366738.png'
    },
    { 
        name: 'Paint, Body & Collision Repair', 
        description: 'Restoring your vehicle to pre-accident condition with flawless bodywork.', 
        icon: <PaintBodyIcon />,
        imageUrl: 'https://raw.githubusercontent.com/bencreizy/J-JsFull-WebApp/main/1760916622128.png'
    },
];

const ServiceCard: React.FC<{ service: Service; delay: number }> = ({ service, delay }) => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
    
    // Conditionally apply rotation for the specific service icon
    const isEmissionsCard = service.name === 'Emissions, Muffler & Exhaust';
    const imageClasses = `max-h-full w-auto object-contain transition-transform duration-250 ease-out group-hover:scale-115 group-hover:-translate-y-2 group-hover:drop-shadow-[0_8px_8px_rgba(0,0,0,0.4)] ${isEmissionsCard ? 'rotate-[28deg]' : ''}`;

    return (
         <div ref={ref} className={`group bg-[#2b2b2b] border border-cyan-500 rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:bg-[#3a3a3a] hover:shadow-[0_0_20px_rgba(255,255,255,0.75)] shadow-[0_0_8px_rgba(255,255,255,0.4)] scroll-reveal flex flex-col justify-between min-h-72 ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
            {service.imageUrl ? (
                <div className="flex justify-center items-center h-36">
                    <img 
                        src={service.imageUrl} 
                        alt={service.name} 
                        className={imageClasses}
                    />
                </div>
            ) : <div className="h-36" />}
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