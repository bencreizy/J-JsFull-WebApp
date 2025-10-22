import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
    {
        quote: "J&J's 24/7 service is a lifesaver. They got my rig back on the road in hours, not days. Absolute professionals.",
        author: "Mark T.",
        vehicle: "Freightliner Cascadia"
    },
    {
        quote: "After a fender bender, I thought my truck would never look the same. The bodywork and paint job were flawless. Better than new!",
        author: "Samantha K.",
        vehicle: "Ford F-150"
    },
    {
        quote: "The diagnostics team found an electrical issue three other shops missed. Saved me a fortune in the long run. Highly recommend.",
        author: "David L.",
        vehicle: "Peterbilt 389"
    }
];

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
    </svg>
);


const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
    return (
        <div className="bg-[#2b2b2b] p-8 rounded-lg border border-cyan-500 shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-300 hover:bg-[#3a3a3a] hover:shadow-[0_0_20px_rgba(255,255,255,0.75)] will-change-transform translate-z-0">
            <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5" />)}
            </div>
            <p className="text-gray-400 italic mb-6">"{testimonial.quote}"</p>
            <div className="text-right">
                <p className="font-bold text-lg text-cyan-400 orbitron">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.vehicle}</p>
            </div>
        </div>
    );
};

const Testimonials: React.FC = () => {

    return (
        <section className="py-20 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold orbitron text-slate-100">Trusted by Drivers</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Hear what our satisfied customers have to say about our work.</p>
                     <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;