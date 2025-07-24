import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2025 - Jul 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Project Manager / ICT Business Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Formation Technology - Melbourne, VIC</h4>
            <p>
              Led end-to-end SaaS development, implementation, and data migration while hosting agile ceremonies, creating user stories, conducting UAT and managing stakeholders
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2022 - Jan 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Client Solutions Specialist</h3>
            <h4 className="vertical-timeline-element-subtitle">Insignia Financial - Melbourne, VIC</h4>
            <p>
              Facilitated 5000+ asset transfers, generated reports, conducted financial auditing and balancing, developed SOPs, general consulting and advice, ensured regulatory compliance
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2022 - Nov 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Field Servicing Technician</h3>
            <h4 className="vertical-timeline-element-subtitle">Accidental Health and Safety - Perth, WA</h4>
            <p>
              Site inspecitions, OH&S compliance, industrial and hospitality auditing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2020 - Nov 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Customer Service Supervisor</h3>
            <h4 className="vertical-timeline-element-subtitle">Woolworths Group Supermarkets - Perth, WA </h4>
            <p>
              Team leadership, payroll preparation, cash handling, timesheeting, optimising customer experience, talent recruitment
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;