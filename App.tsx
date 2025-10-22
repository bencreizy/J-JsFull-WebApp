import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Services from './components/icons/RepairServices';
import Testimonials from './components/icons/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';


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
        <>
            <Header navLinks={navLinks} /> {/* Header is now at the very top */}
            <div>
                {/* The primary logo is now managed within the Header component. This section is removed. */}

                <main>
                    <div ref={homeRef}><Hero contactRef={contactRef} /></div>
                    <Welcome />
                    <div ref={servicesRef}><Services /></div>
                    <div ref={testimonialsRef}><Testimonials /></div>
                    <div ref={contactRef}><Contact /></div>
                </main>
                <div ref={locationRef}><Footer /></div>
            </div>
        </>
    );
};

export default App;