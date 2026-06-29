import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  const animationObserverProps = { triggerOnce: false };

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 – 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            intersectionObserverProps={animationObserverProps}
          >
            <h3 className="vertical-timeline-element-title">Freelancer / Independent Contractor</h3>
            <h4 className="vertical-timeline-element-subtitle">Self-Employed</h4>
            <p>
              Delivered projects for clients while ensuring requirements and expectations were met.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2024 – Mar 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            intersectionObserverProps={animationObserverProps}
          >
            <h3 className="vertical-timeline-element-title">Social Media Chat Support</h3>
            <h4 className="vertical-timeline-element-subtitle">Kirinz</h4>
            <p>
              Handled customer inquiries, order updates, and support through Instagram direct messages.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2025 – Dec 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            intersectionObserverProps={animationObserverProps}
          >
            <h3 className="vertical-timeline-element-title">Web Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">DSWD Region XI</h4>
            <p>
              Worked on full-stack web development, QA testing, and system enhancement for the Kalahi Region XI Geotagging System.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;