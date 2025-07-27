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
            date="September 2024 - April 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Centennial College</h3>
            <h4 className="vertical-timeline-element-subtitle">Toronto, Canada</h4>
            <p>
              Post graduate certificate in <b>Cybersecurity</b>.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="April 2024 - June 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Steer Health</h3>
            <h4 className="vertical-timeline-element-subtitle">Toronto, Canada</h4>
            <p>
              <b>Data Engineer II</b>, focused on agentic AI and RAG systems. Designed and implemented scalable data pipelines, integrated advanced AI models, and optimized data retrieval for intelligent applications.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="November 2023 - April 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Kevares Autonomous Services</h3>
            <h4 className="vertical-timeline-element-subtitle">Toronto, Canada</h4>
            <p>
              <b>Research Engineer - Intern</b>, side walk deficiencies(crack, pothole, gap) segmenation and classification using computer vision and deep learning techniques. Developed and deployed models for real-time detection and analysis.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="September 2023 - April 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Humber College</h3>
            <h4 className="vertical-timeline-element-subtitle">Toronto, Canada</h4>
            <p>
              Post graduate certificate in <b>Artificial Intelligence with Machine Learning</b>.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" February 2022 – August 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Prevalent AI</h3>
            <h4 className="vertical-timeline-element-subtitle">Kochi, India</h4>
            <p>
              <b>Data Scientist</b>, Anomaly detection, NLP, and time series forecasting using machine learning and deep learning techniques. Developed and deployed models for real-time predictions and insights.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2021 – February 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Prevalent AI</h3>
            <h4 className="vertical-timeline-element-subtitle">Kochi, India</h4>
            <p>
              <b>Data Analyst</b>, Data wrangling, exploratory data analysis, and visualization. Developed dashboards and reports to communicate insights to stakeholders.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2017 - June 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">APJ Abdul Kalam Technological University</h3>
            <h4 className="vertical-timeline-element-subtitle">Kochi, India</h4>
            <p>
              Bachelor of <b>Computer Science and Engineering</b>.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;