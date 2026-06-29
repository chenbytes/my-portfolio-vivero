import React from "react";
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/chenbytes/flexicaptcha" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="flexiCAPTCHA placeholder thumbnail" width="100%"/></a>
                <a href="https://github.com/chenbytes/flexicaptcha" target="_blank" rel="noreferrer"><h2>FlexiCAPTCHA</h2></a>
                <p><strong>FlexiCAPTCHA</strong> is an adaptive authentication security system for WordPress that uses behavioral analysis and machine learning to distinguish legitimate users from automated login attempts. It dynamically adjusts verification based on risk level, reducing friction for real users while improving protection against bots. The project uses <strong>WordPress</strong>, <strong>PHP</strong>, <strong>Python</strong>, <strong>Flask</strong>, and a <strong>Random Forest classifier</strong> for risk scoring, with behavioral session features such as typing rhythm and interaction timing to drive adaptive challenge selection.</p>
            </div>
            <div className="project">
                <a href="https://github.com/chenbytes/Jack-Fetch-" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="Jack, Fetch! placeholder thumbnail" width="100%"/></a>
                <a href="https://github.com/chenbytes/Jack-Fetch-" target="_blank" rel="noreferrer"><h2>Jack, Fetch! <span></span></h2></a>
                <p><strong>Jack, Fetch!</strong> is a full-stack interactive mini-game hub built with <strong>Next.js</strong> and <strong>Express.js</strong>. It brings together five client-facing dog-themed features: an API-driven <strong>Guess the Breed</strong> quiz, a timed <strong>Memory Game</strong>, an Instagram-inspired <strong>Doggo Feed</strong>, a client-side <strong>Dog Puzzle</strong>, and <strong>Spot the Impostor</strong>, an anomaly-detection challenge. By orchestrating third-party Dog APIs, implementing complex state management for state-dependent game loops, and prioritizing an intuitive, highly responsive UI, this project highlights robust full-stack integration, algorithmic problem-solving, and creative product engineering.</p>
            </div>
            <div className="project">
                <a href="https://github.com/chenbytes/seat-occupancy-iot" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="Live Seat Occupancy placeholder thumbnail" width="100%"/></a>
                <a href="https://github.com/chenbytes/seat-occupancy-iot" target="_blank" rel="noreferrer"><h2>Live Seat Occupancy <span></span></h2></a>
                <p><strong>Live Seat Occupancy</strong> is a real-time IoT monitoring and analytics dashboard designed to process and visualize live sensor telemetry for spatial resource management. The application features a dynamic, state-driven spatial heatmap that instantaneously reflects physical seat availability, complemented by a live metrics engine calculating instantaneous capacity utilization. Engineered to handle continuous, low-latency data streams, the platform integrates a high-throughput event logging system with tabular data export (CSV) capabilities, alongside state-triggered notification mechanisms that push automated alerts during critical capacity thresholds. This project showcases strong competencies in real-time data ingestion, responsive UI state synchronization, and practical IoT-to-web end-to-end engineering.</p>
            </div>
            <div className="project">
                <a href="https://github.com/chenbytes/Kalahi" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="KALAHI-CIDSS Region XI Subproject Integration Dashboard placeholder thumbnail" width="100%"/></a>
                <a href="https://github.com/chenbytes/Kalahi" target="_blank" rel="noreferrer"><h2>The KALAHI-CIDSS Region XI Subproject Integration Dashboard <span></span></h2></a>
                <p><strong>The KALAHI-CIDSS Region XI Subproject Integration Dashboard</strong> is a centralized enterprise monitoring platform engineered for the Department of Social Welfare and Development (DSWD) to optimize community-driven development initiatives. The web application features geospatial visualization via interactive GIS mapping, live analytics panels tracking multi-million budget distributions and beneficiary demographics, and a robust role-based access control (RBAC) system for municipal and regional oversight teams. By consolidating disjointed datasets into a unified web ecosystem, the platform eliminates manual tracking inefficiencies, enhances cross-agency transparency, and secures data-driven accountability across the region.</p>
            </div>
            <div className="project">
                <a href="https://github.com/chenbytes/mibs" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="Mass Intention Booking System placeholder thumbnail" width="100%"/></a>
                <a href="https://github.com/chenbytes/mibs" target="_blank" rel="noreferrer"><h2>The Mass Intention Booking System (MIBS) <span></span></h2></a>
                <p><strong>The Mass Intention Booking System (MIBS)</strong> is a specialized scheduling and digital payment platform engineered to modernize parish operations by streamlining online ritual offerings. The application features an administrative dashboard providing real-time scheduling statistics, an automated calendar management engine, and tabular tracking for upcoming community intentions. To safeguard transactional and operational data, the platform is anchored by a resilient disaster recovery architecture that implements automated cloud storage backups, daily incremental synchronization, and a stringent Recovery Time Objective (RTO) strategy to guarantee high availability and data integrity.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;