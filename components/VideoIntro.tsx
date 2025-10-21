import React, { useEffect, useRef, useState } from 'react';

interface VideoIntroProps {
    onEnded: () => void;
    onVideoTimeUpdate: (currentTime: number, duration: number) => void; // New prop
}

const VideoIntro: React.FC<VideoIntroProps> = ({ onEnded, onVideoTimeUpdate }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            const playVideo = async () => {
                try {
                    // Attempt to play the video with sound
                    await videoElement.play();
                    console.info('Video is playing with sound.');
                } catch (error) {
                    // Autoplay with sound was prevented.
                    console.warn('Video autoplay with sound was prevented. Attempting muted playback:', error);
                    // Mute the video and try playing again
                    videoElement.muted = true;
                    try {
                        await videoElement.play();
                        console.info('Video is playing muted.');
                    } catch (mutedPlayError) {
                        // Even muted autoplay failed (unlikely but possible in very strict environments)
                        console.error('Even muted video autoplay failed:', mutedPlayError);
                        // If all attempts fail, proceed to the next stage immediately to avoid a stuck screen.
                        onEnded();
                    }
                }
            };

            playVideo();

            const handleVideoEnded = () => {
                onEnded();
            };

            const handleTimeUpdate = () => { // New handler for timeupdate event
                if (videoElement.duration) { // Ensure duration is available before reporting
                    onVideoTimeUpdate(videoElement.currentTime, videoElement.duration);
                }
            };

            videoElement.addEventListener('ended', handleVideoEnded);
            videoElement.addEventListener('timeupdate', handleTimeUpdate); // Add timeupdate listener

            return () => {
                videoElement.removeEventListener('ended', handleVideoEnded);
                videoElement.removeEventListener('timeupdate', handleTimeUpdate); // Clean up timeupdate listener
            };
        }
    }, [onEnded, onVideoTimeUpdate]); // Added onVideoTimeUpdate to dependencies

    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-[100] overflow-hidden" aria-hidden="true">
            <video
                ref={videoRef}
                src="https://raw.githubusercontent.com/bencreizy/J-JsFull-WebApp/main/assets/Project_10-21%285%29_Full%20HD%201080p_MEDIUM_FR30_(2).mp4"
                className="max-w-full max-h-full object-contain"
                autoPlay // Attribute for initial autoplay (might be muted by browser by default)
                playsInline // Crucial for iOS to allow autoplay within the viewport
                onContextMenu={(e) => e.preventDefault()} // Prevent right-click context menu on desktop
                aria-label="J&J Automotive intro video"
                // Do NOT set 'muted' attribute here initially. We attempt unmuted playback first.
                // If unmuted playback fails, `videoElement.muted = true` will be set programmatically.
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoIntro;