
import React from 'react';

// Using passed className and style for full animation control from parent
export const WrenchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.83-5.83M11.42 15.17l-4.95-4.95a2.652 2.652 0 0 1 0-3.749l5.83-5.83a2.652 2.652 0 0 1 3.75 0l4.95 4.95M11.42 15.17 6.47 20.12a2.652 2.652 0 0 1-3.75 0l-.73-.73a2.652 2.652 0 0 1 0-3.75l5.83-5.83" />
    </svg>
);

export const GearIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-1.007 1.11-.962a8.97 8.97 0 0 1 5.71 5.71c.046.55-.422 1.02-1.02 1.11A8.97 8.97 0 0 1 9.594 3.94ZM14.406 14.06a8.97 8.97 0 0 1-5.71-5.71c-.046-.55.422-1.02 1.02-1.11a8.97 8.97 0 0 1 5.71 5.71c.046.55-.422 1.02-1.02 1.11Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5.04-1.13-1.01-1.01-1.13.04-1.1-1.1-1.1.04-1.01-1.01-.04 1.13-1.01 1.01.04 1.13 1.1 1.1-.04 1.1 1.01 1.01.04-1.13 1.01-1.01-.04-1.13-1.1-1.1-.04-1.01 1.01.04-1.13-1.1-1.1.04-1.1-1.01-1.01Z" />
    </svg>
);

export const SparkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg>
);


export const TireIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 15.91a4.5 4.5 0 0 1-6.32-6.32" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m13.5 8.25.5-1.5-1.5-.5-1.5 2 1.5.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 13.5 2-1.5.5 1.5-1.5.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 8.25 9 9l.5 1.5 2-1.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5-1.5.5L15 13.5l1.5-.5Z" />
    </svg>
);
