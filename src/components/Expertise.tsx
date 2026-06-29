import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { faBug, faHeadset, faDatabase, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Flask",
    "Python",
    "SQL",
    "MySQL",
    "Postman"
];

const labelsSecond = [
    "Data Entry",
    "Data Validation",
    "Record Keeping",
    "Spreadsheet Management",
    "Database Updates",
    "Accuracy",
    "Organization",
    "Efficiency",
];

const labelsThird = [
    "Documentation",
    "Research",
    "Record Management",
    "Scheduling",
    "Administrative Tasks",
    "Attention to Detail",
    "Professional Communication",
];

const labelsFourth = [
    "Python",
    "Machine Learning",
    "Data Processing",
    "Automation",
    "Data Analysis",
    "Predictive Models",
    "AI Tools",
];

const labelsFifth = [
    "System Testing",
    "Bug Identification",
    "Data Validation",
    "Quality Assurance",
    "Test Cases",
    "Reliability",
    "Performance Testing",
];

const labelsSixth = [
    "Troubleshooting",
    "User Support",
    "System Issues",
    "Problem Solving",
    "Technology Operations",
    "Issue Resolution",
    "Technical Assistance",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I develop responsive and scalable web applications using modern technologies such as React, Laravel, PHP, JavaScript, HTML, and CSS. I have experience building both frontend and backend features, integrating databases, and improving application performance and usability through real-world projects and internship experience.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Data Entry & Data Management</h3>
                    <p>I maintain accurate records through data entry, validation, and organization. I am experienced in handling data carefully to ensure consistency, accuracy, and efficiency in administrative and technical environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faClipboardList} size="3x"/>
                    <h3>Administrative Support</h3>
                    <p>I assist with documentation, research, record management, and organizational tasks while maintaining attention to detail and professionalism in fast-paced environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Machine Learning & Python Development</h3>
                    <p>I have experience using Python for data processing, machine learning model training, and automation tasks. I have experience exploring predictive models, data analysis, and AI-related technologies as part of my continuous learning in software development and information technology.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBug} size="3x"/>
                    <h3>Quality Assurance & Software Testing</h3>
                    <p>I perform system testing, bug identification, data validation, and quality assurance processes to ensure software reliability, accuracy, and smooth performance before deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFifth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faHeadset} size="3x"/>
                    <h3>Technical Support</h3>
                    <p>I provide technical assistance by troubleshooting software and system-related issues, helping users resolve problems efficiently, and ensuring smooth day-to-day technology operations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSixth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;