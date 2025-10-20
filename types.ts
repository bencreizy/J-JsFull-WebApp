// FIX: Import React to resolve 'Cannot find namespace React' error.
import React from 'react';

export interface Technician {
    name: string;
    title: string;
    bio: string;
    imageUrl: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    vehicle: string;
}

export interface Service {
    name: string;
    description: string;
    icon: React.ReactNode;
    imageUrl?: string;
}