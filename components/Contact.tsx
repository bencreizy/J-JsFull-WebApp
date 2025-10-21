import React, { useState } from 'react';

// Service list copied from RepairServices.tsx for populating the dropdown
const servicesList = [
    'Main Service Hub',
    'General Repair & Diagnostics',
    'Engine Overhaul & Performance',
    'Electrical Systems',
    'Powertrain / Drivetrain',
    'Brakes, Suspension & Steering',
    'Emissions, Muffler & Exhaust',
    'Fluids & Preventive Maintenance',
    'Paint, Body & Collision Repair',
];

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'General Inquiry / Quote Request',
        service: servicesList[0],
        message: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    // IMPORTANT: Replace this with your unique Formspree endpoint URL.
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgvnqzyv';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmissionStatus('sending');

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmissionStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    inquiryType: 'General Inquiry / Quote Request',
                    service: servicesList[0],
                    message: ''
                });
            } else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmissionStatus('error');
        }
    };

    return (
        <section className="py-20 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold orbitron text-slate-100">Get In Touch</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                        Have a question or need a quote? Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                    <div className="w-24 h-1 bg-cyan-400 mx-auto mt-6"></div>
                </div>

                <div className="max-w-4xl mx-auto bg-[#2b2b2b] border border-cyan-500 rounded-lg p-8 shadow-[0_0_12px_rgba(255,255,255,0.5)] will-change-transform translate-z-0">
                    {submissionStatus === 'success' ? (
                        <div className="text-center py-12">
                            <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <h3 className="text-2xl font-bold orbitron text-white mt-4">Thank You!</h3>
                            <p className="text-gray-400 mt-2">Your message has been sent successfully. We'll be in touch shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 orbitron uppercase tracking-wider mb-2">Full Name</label>
                                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full bg-[#2b2b2b] border border-white/20 rounded-md py-2 px-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all translate-z-0" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 orbitron uppercase tracking-wider mb-2">Email Address</label>
                                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full bg-[#2b2b2b] border border-white/20 rounded-md py-2 px-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all translate-z-0" />
                                </div>
                            </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 orbitron uppercase tracking-wider mb-2">Phone Number</label>
                                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[#2b2b2b] border border-white/20 rounded-md py-2 px-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all translate-z-0" />
                                </div>
                                <div>
                                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-400 orbitron uppercase tracking-wider mb-2">Inquiry Type</label>
                                    <select name="inquiryType" id="inquiryType" value={formData.inquiryType} onChange={handleChange} className="w-full bg-[#2b2b2b] border border-white/20 rounded-md py-2 px-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all translate-z-0">
                                        <option>General Inquiry / Quote Request</option>
                                        <option>Schedule a Call Back</option>
                                    </select>
                                </div>
                            </div>
                             <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-400 orbitron uppercase tracking-wider mb-2">Service of Interest</label>
                                <select name="service" id="service" value={formData.service} onChange={handleChange} className="w-full bg-[#2b2b2b] border border-white/20 rounded-md py-2 px-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all translate-z-0">
                                    {servicesList.map(service => (
                                        <option key={service} value={service}>{service}</option>
                                    ))}
                                </select>
                            </div>
                             <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 orbitron uppercase tracking-wider mb-2">Message</label>
                                <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="w-full bg-[#2b2b2b] border border-white/20 rounded-md py-2 px-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all translate-z-0" placeholder="Tell us more about your needs..."></textarea>
                            </div>
                             <div className="text-center">
                                {submissionStatus === 'error' && <p className="text-cyan-400 text-center mb-4">Oops! Something went wrong. Please try again.</p>}
                                <button type="submit" disabled={submissionStatus === 'sending'} className="bg-[#3a3a3a] text-white font-bold orbitron uppercase tracking-widest py-3 px-8 rounded-sm border-2 border-cyan-400 shadow-[0_0_8px_rgba(255,255,255,0.4)] hover:bg-[#2b2b2b] hover:shadow-[0_0_20px_rgba(255,255,255,0.75)] transition-all duration-300 transform hover:-translate-y-1 disabled:bg-gray-500 disabled:cursor-not-allowed">
                                    {submissionStatus === 'sending' ? 'Sending...' : 'Submit Request'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;