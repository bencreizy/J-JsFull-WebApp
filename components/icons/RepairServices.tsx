import React from 'react';
import type { Service } from '../types';
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
} from './ServiceIcons';

const services: Service[] = [
    {
        name: 'Main Service Hub',
        description: 'Our full-service toolbox for comprehensive shop and hub services.',
        icon: <ToolboxIcon />,
        imageUrl: 'https://raw.githubusercontent.com/bencreizy/J-JsFull-WebApp/main/assets/1760815108794.png?v=1.0.3'
    },
    {
        name: 'General Repair & Diagnostics',
        description: 'Expert diagnostics and general repairs to address any issue, big or small.',
        icon: <GeneralRepairIcon />,
        imageUrl: 'https://raw.githubusercontent.com/bencreizy/J-JsFull-WebApp/main/assets/1760916745796.png?v=1.0.3'
    },
    {
        name: 'Engine Overhaul & Performance',
        description: 'Complete engine rebuilds, performance tuning, and heavy-duty overhauls.',
        icon: <EngineIcon />,
        imageUrl: 'https://raw.githubusercontent.com/bencreizy/J-JsFull-WebApp/main/assets/1760918206712.png?v=1.0.3'
    },
    {
        name: 'Electrical Systems',
        description: 'Advanced troubleshooting and repair of complex vehicle electrical systems.',
        icon: <BatteryIcon />,
        imageUrl: 'https://raw.githubusercontent.com/bencreizy/J-JsFull-WebApp/main/assets/1760916798842.png?v=1.0.3'
    },
    {
        name: 'Powertrain / Drivetrain',
        description: 'Specialized service for transmissions, differentials, and drivetrain components.',
        icon: <TransmissionIcon />,
        imageUrl: 'https://raw.githubusercontent.com/bencreizy/J-JsFull-WebApp/main/assets/1760917628776.png?v=1.0.3'
    },
    {
        name: 'Brakes, Suspension & Steering',
        description: 'Ensuring your safety and ride comfort with expert brake and chassis work.',
        icon: <BrakeSuspensionIcon />,
        imageUrl: 'https://raw.githubusercontent.com/bencreizy/J-JsFull-WebApp/main/assets/1760916833650.png?v=1.0.3'
    },
    {
        name: 'Emissions, Muffler & Exhaust',
        description: 'Servicing exhaust systems and ensuring your vehicle meets emissions standards.',
        icon: <EmissionsIcon />,
        imageUrl: 'https://raw.githubusercontent.com/bencreizy/J-JsFull-WebApp/main/assets/1760916775897.png?v=1.0.3'
    },
    {
        name: 'Fluids & Preventive Maintenance',
        description: 'Oil changes and fluid services to keep your vehicle running reliably.',
        icon: <FluidsIcon />,
        imageUrl: 'https://raw.githubusercontent.com/bencreizy/J-JsFull-WebApp/main/assets/1760918366738.png?v=1.0.3'
    },
    {
        name: 'Paint, Body & Collision Repair',
        description: 'Restoring your vehicle to pre-accident condition with flawless bodywork.',
        icon: <PaintBodyIcon />,
        imageUrl: 'https://raw.githubusercontent.com/bencreizy/J-JsFull-WebApp/main/assets/1760916622128.png?v=1.0.3'
    },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {

    // Conditionally apply rotation for the specific service icon
    const isEmissionsCard = service.name === 'Emissions, Muffler & Exhaust';
    // Updated image classes for a 3D float effect on hover
    const imageClasses = `max-h-full w-auto object-contain transition-transform duration-500 ease-in-out group-hover:scale-115 group-hover:-translate-y-6 group-hover:-rotate-x-15 group-hover:drop-shadow-[0_30px_20px_rgba(0,0,0,0.5)] ${isEmissionsCard ? 'rotate-[28deg]' : ''} preserve-3d-fix will-change-transform translate-z-0`;

    return (
         <div className="group [perspective:1000px] bg-[#2b2b2b] border border-cyan-500 rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:bg-[#3a3a3a] hover:shadow-[0_0_20px_rgba(255,255,255,0.75)] shadow-[0_0_8px_rgba(255,255,255,0.4)] flex flex-col justify-between min-h-72 will-change-transform translate-z-0">
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
    return (
        <section className="py-20 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold orbitron text-slate-100">Our Core Services</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Precision solutions for every need, from preventative maintenance to complete overhauls.</p>
                    <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard key={service.name} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;