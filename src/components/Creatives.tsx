import React from "react";
import mock1 from '../assets/videos/mock1.mp4';
import mock2 from '../assets/videos/mock2.mp4';
import '../assets/styles/Creatives.scss';

const creatives = [
    {
        title: 'Ting-LE: Brainrot Animation',
        description: 'A comedic  short form animated video.',
        src: mock1,
    },
    {
        title: 'PlantAi Advertisement',
        description: 'A sleek, commercial-grade product promo video designed to showcase the features of the PlantAI mobile application.',
        src: mock2,
    },
];

function Creatives() {
    return(
    <div className="creatives-container" id="creatives">
        <h1>Creatives</h1>
        <p className="creatives-intro">This is the home for my video edits.</p>
        <div className="creatives-grid">
            {creatives.map((creative) => (
                <div className="creative-card" key={creative.title}>
                    <div className="creative-video-wrap">
                        <video className="creative-video" controls playsInline preload="metadata">
                            <source src={creative.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <h2>{creative.title}</h2>
                    <p>{creative.description}</p>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Creatives;