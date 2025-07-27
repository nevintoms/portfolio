import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "SQL",
    "PostgreSQL",
    "TensorFlow",
    "PyTorch",
    "Keras",
    "XGBoost",
    "FastAPI",
    "Postman",
    "NLP",
    "Hugging Face",
    "OpenCV"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Linux",
    "MLFlow",
    "Kubernetes",
    "Kubeflow",
    "LangChain",
    "OpenAI",
    "Vector Databases"
];

const labelsThird = [
    "PySpark",
    "ElasrticSearch",
    "BigQuery",
    "Redshift",
    "MongoDB",
    "Airbyte",
    "AWS Glue",
    "Kafka",
    "Airflow",
    "dbt"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>Machine Learning</h3>
                    <p>I develop and fine-tune machine learning models for prediction, anomaly detection, and NLP use cases. I apply statistical techniques and deep learning frameworks to extract insights and drive decisions across multiple domains.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>GenAI, LLMs & MLOps</h3>
                    <p>I build and deploy intelligent systems using large language models, RAG, and agentic workflows. I orchestrate tools like LangChain and LlamaIndex, containerize apps using Docker, and ensure reliability through CI/CD and model monitoring.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Engineering & Pipelines</h3>
                    <p>I design and manage scalable data pipelines for ingestion, transformation, and storage of structured and unstructured data. I work with distributed systems and cloud-native tools to support analytics and machine learning workflows.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
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