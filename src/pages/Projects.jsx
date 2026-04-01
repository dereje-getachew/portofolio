import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import Spotify from "../assets/projects/Spotify.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Spotify}
              isBlog={false}
              title="spotify_clone"
              description="ERP Spare Parts is a specialized inventory system designed to manage spare parts stock, track usage, and streamline procurement processes. Built with Laravel, React, and MySQL, it ensures efficient operations with real-time data and reporting."
              ghLink="https://admin.komiparts.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="chat-appp"
              description="SpeedOps is a task management system designed to organize workflows, assign tasks, and track progress efficiently across teams. Built with Laravel, React, and MySQL, it enhances productivity through real-time updates and streamlined collaboration."
              ghLink="https://speedops.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="E‑Commerce Website"
              description="Fanaye ERP is a stock management system built to streamline inventory tracking, reporting, and overall warehouse operations. Developed using Laravel, React, and MySQL, it delivers real-time insights and efficient stock control for businesses."
              ghLink="erp.fanayetechnologies.com"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects
