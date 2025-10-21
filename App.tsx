import React, { useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Services from './components/RepairServices';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoIntro from './components/VideoIntro';
import LogoFadeIn from './components/LogoFadeIn';

// Component to hold the original application content
const MainAppContent: React.FC = () => {
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
        <div>
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

const App: React.FC = () => {
    // State to manage the intro sequence: 'video' -> 'video-with-logo' -> 'mainApp'
    const [introStage, setIntroStage] = useState<'video' | 'video-with-logo' | 'mainApp'>('video');
    const [logoOverlayActive, setLogoOverlayActive] = useState(false);
    const logoTriggeredRef = useRef(false); // To ensure logo fade-in is triggered only once

    // How many seconds before the video ends the logo should appear
    const VIDEO_END_OVERLAP_SECONDS = 2; 

    const handleVideoTimeUpdate = (currentTime: number, duration: number) => {
        // Trigger logo overlay if not already active and within the overlap time
        if (!logoTriggeredRef.current && duration > 0 && duration - currentTime <= VIDEO_END_OVERLAP_SECONDS) {
            setLogoOverlayActive(true);
            logoTriggeredRef.current = true;
            setIntroStage('video-with-logo'); // Transition to stage where both video and logo can render
        }
    };

    const handleVideoEnded = () => {
        // Once video ends, transition directly to the main app, unmounting both video and logo overlay
        setIntroStage('mainApp');
    };

    return (
        <>
            {(introStage === 'video' || introStage === 'video-with-logo') && (
                <>
                    <VideoIntro onEnded={handleVideoEnded} onVideoTimeUpdate={handleVideoTimeUpdate} />
                    {logoOverlayActive && <LogoFadeIn />}
                </>
            )}
            {introStage === 'mainApp' && <MainAppContent />}
        </>
    );
};

export default App;