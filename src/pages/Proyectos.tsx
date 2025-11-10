import React from "react";
import data from "../assets/teamProjects.json";
import type { Project } from "../components/Project";
import ProjectCard from "../components/Project";
import "../styles/proyecto.css";

const Projects: React.FC = () => {
  const projects: Project[] = data;

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <section
        className="bg-light bg-opacity-75 rounded-4 shadow p-4 p-md-5"
        id="projects-container"
      >
        <h2 className="text-center mb-4">Proyectos de los equipos</h2>

        <div className="row g-5 justify-content-center">
          {projects.map((project) => (
            <div
              className="col"
              key={project.id}
              style={{ minWidth: "340px", maxWidth: "400px" }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
