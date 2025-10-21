import React, { useState, useEffect } from 'react';
import { FacebookIcon, InstagramIcon, XTwitterIcon } from './icons/SocialIcons';
import { DirectionsIcon, ShareIcon } from './icons/ActionIcons';

const Footer: React.FC = () => {
    const [canShare, setCanShare] = useState(false);

    useEffect(() => {
        if (navigator.share) {
            setCanShare(true);
        }
    }, []);

    const address = "321 ORINOCO DRIVE, BAY SHORE N.Y 11706";
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.292994960334!2d-73.26876172355529!3d40.68962803874052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8326244517179%3A0x6b885f8f8447d29!2s321%20Orinoco%20Dr%2C%20Bay%20Shore%2C%20NY%2011706!5e0!3m2!1sen!2sus!4v1719441865322!5m2!1sen!2sus`;

    const handleShare = async () => {
        const shareData = {
            title: "J&J's Automotive-Truck Repair",
            text: `Find us at: ${address}`,
            url: googleMapsUrl,
        };
        try {
            await navigator.share(shareData);
        } catch (err) {
            console.error("Error sharing location:", err);
        }
    };

    return (
        <footer className="border-t border-white/10 shadow-inner shadow-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold orbitron text-white mb-4">J&J's Automotive</h3>
                        <p className="text-gray-400 mb-2">{address.split(',')[0]}<br/>{address.split(',').slice(1).join(',')}</p>
                        <p className="text-gray-400 mb-2">
                            <span className="font-semibold text-gray-300">Phone:</span> <a href="tel:8554608778" className="hover:text-cyan-300 transition-colors">(855) 460-8778</a>
                        </p>
                        <p className="text-gray-400">
                            <span className="font-semibold text-gray-300">Email:</span> <a href="mailto:jcichon@jjautotruckrepair.com" className="hover:text-cyan-300 transition-colors">jcichon@jjautotruckrepair.com</a>
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-slate-500 hover:text-white transition-colors"><FacebookIcon /></a>
                            <a href="#" className="text-slate-500 hover:text-white transition-colors"><InstagramIcon /></a>
                            <a href="#" className="text-slate-500 hover:text-white transition-colors"><XTwitterIcon /></a>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="md:col-span-2">
                         <h3 className="text-xl font-bold orbitron text-white mb-4">Our Location</h3>
                        <div className="bg-[#2b2b2b] border border-cyan-500 rounded-lg h-64 md:h-80 overflow-hidden shadow-[0_0_8px_rgba(255,255,255,0.4)] will-change-transform translate-z-0">
                           <iframe
                                src={mapEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="J&J Automotive Location"
                           ></iframe>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                             <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-[#3a3a3a] text-white font-bold orbitron uppercase tracking-widest py-3 px-6 rounded-sm border-2 border-cyan-400 shadow-[0_0_8px_rgba(255,255,255,0.4)] hover:bg-[#2b2b2b] hover:shadow-lg hover:shadow-[0_0_20px_#FFFFFF] transition-all duration-300 transform hover:-translate-y-1 will-change-transform translate-z-0 flex items-center justify-center gap-2">
                                <DirectionsIcon className="w-5 h-5" />
                                Get Directions
                            </a>
                            {canShare && (
                                <button onClick={handleShare} className="flex-1 text-center bg-[#3a3a3a] text-white font-bold orbitron uppercase tracking-widest py-3 px-6 rounded-sm border-2 border-cyan-400 shadow-[0_0_8px_rgba(255,255,255,0.4)] hover:bg-[#2b2b2b] hover:shadow-[0_0_20px_#FFFFFF] transition-all duration-300 transform hover:-translate-y-1 will-change-transform translate-z-0 flex items-center justify-center gap-2">
                                    <ShareIcon className="w-5 h-5" />
                                    Share Location
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-slate-500">
                    <p>&copy; {new Date().getFullYear()} J & J's Automotive-Truck Repair. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;