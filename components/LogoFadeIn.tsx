import React, { useEffect, useState } from 'react';

// The LogoFadeIn component now only handles fading in.
// Its unmounting and the subsequent transition to the main app are managed by App.tsx.
const LogoFadeIn: React.FC = () => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const INITIAL_RENDER_DELAY_MS = 50; 

        // Trigger fade-in after a very short delay to allow CSS to initialize
        const fadeInTimeout = setTimeout(() => {
            setOpacity(1);
        }, INITIAL_RENDER_DELAY_MS);

        return () => {
            clearTimeout(fadeInTimeout);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div 
            className="fixed inset-0 bg-black flex items-center justify-center z-[100] transition-opacity duration-500 ease-in-out"
            style={{ opacity }}
            aria-hidden="true"
        >
            <img 
                src="https://raw.githubusercontent.com/bencreizy/J-JsFull-WebApp/main/assets/1761077550776.png" 
                alt="J & J Automotive Logo" 
                className="max-w-full max-h-full object-contain"
            />
        </div>
    );
};

export default LogoFadeIn;