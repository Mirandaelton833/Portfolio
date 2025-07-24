import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Aspen Plus",
    "Aspen HYSYS",
    "Autodesk AutoCAD",
    "Simulink",
    "Procore",
    "MATLAB"
];

const labelsSecond = [
    "JIRA",
    "Confluence",
    "Shortcut",
    "AWS",
    "Microsoft 365",
    "Agile",
    "Waterfall",
    "Hybrid"
];

const labelsThird = [
    "Excel (advanced)",
    "Microsoft SQL Server",
    "PowerBI",
    "Draw.io",
    "Hubspot",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Process Modelling and Chemical Engineering Simulations</h3>
                    <p>I have developed several process simulation solutions from scratch utilising industry leading software such as Aspen Plus and Simulink. I have developed a strong proficiency in process optimisation, safety and control simulations and energy modelling.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Technical Proficiencies:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Agile Project Management</h3>
                    <p>I've applied Agile and Waterfall methodologies across engineering and ICT, agile ceremonies, creating technical documentation, conducting user acceptance testing (UAT), and facilitated cross-functional collaboration several successful go lives.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Technical Proficiencies:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data and Business Analysis</h3>
                    <p>I've supported ICT and financial business analysis across SaaS, CRM and enterprise environments. Skilled in requirements gathering, process mapping, translating business needs into technical workflows, developing SOPs, curating data-driven insights, and stakeholder management.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Technical Proficiencies:</span>
                        {labelsThird.map((label, index) => (
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