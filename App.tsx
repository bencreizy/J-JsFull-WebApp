import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Services from './components/RepairServices'; // Renamed import for clarity, points to the updated services component
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Technicians component is not currently used in the main layout but is available.
// import Technicians from './components/Technicians'; 

const App: React.FC = () => {
    const homeRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const testimonialsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const locationRef = useRef<HTMLDivElement>(null);

    const navLinks = [
        { name: 'Home', ref: homeRef },
        { name: 'Services', ref: servicesRef },
        { name: 'Testimonials', ref: testimonialsRef },
        { name: 'Contact', ref: contactRef },
        { name: 'Location', ref: locationRef },
    ];

    return (
        <div className="bg-black">
            <Header navLinks={navLinks} />
            <main>
                <div ref={homeRef}><Hero contactRef={contactRef} /></div>
                <Welcome />
                <div ref={servicesRef}><Services /></div>
                <div ref={testimonialsRef}><Testimonials /></div>
                <div ref={contactRef}><Contact /></div>
            </main>
            <div ref={locationRef}><Footer /></div>
        </div>
    );
};

export default App;