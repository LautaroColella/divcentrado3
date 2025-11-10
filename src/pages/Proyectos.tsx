import * as bootstrap from "bootstrap";
import React, { useEffect, useRef } from "react";
import data from "../assets/teamProjects.json";
import type { Project } from "../components/Project";
import ProjectCard from "../components/Project";
import "../styles/proyecto.css";

const Projects: React.FC = () => {
  const projects: Project[] = data;

  const orderDropdownRef = useRef<HTMLButtonElement>(null);
  const dropdownInstanceRef = useRef<bootstrap.Dropdown | null>(null);
  const [sortedProjects, setSortedProjects] = React.useState<Project[]>([
    ...projects,
  ]);

  useEffect(() => {
    if (orderDropdownRef.current) {
      dropdownInstanceRef.current = new bootstrap.Dropdown(
        orderDropdownRef.current,
        {
          autoClose: true,
          popperConfig: { strategy: "fixed" },
        }
      );
    }
  }, []);

  const handleDropdownClick = () => {
    dropdownInstanceRef.current?.toggle();
  };

  function handleSort(sortBy: string) {
    const projectsCopy = [...sortedProjects];

    switch (sortBy) {
      case "NumAsc":
        projectsCopy.sort((a, b) => a.id - b.id);
        break;
      case "NumDesc":
        projectsCopy.sort((a, b) => b.id - a.id);
        break;
      case "A-Z":
        projectsCopy.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        projectsCopy.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "DateAsc":
        projectsCopy.sort(
          (a, b) =>
            new Date(a.finish_date).getTime() -
            new Date(b.finish_date).getTime()
        );
        break;
      case "DateDesc":
        projectsCopy.sort(
          (a, b) =>
            new Date(b.finish_date).getTime() -
            new Date(a.finish_date).getTime()
        );
        break;
      default:
        break;
    }

    setSortedProjects(projectsCopy);
  }

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <section
        className="bg-light bg-opacity-75 rounded-4 shadow ps-4 pe-4 pb-4 ps-md-5 pe-md-5 pb-md-5"
        id="projects-container"
      >
        <div className="header-fixed d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center px-3 gap-2 gap-md-0">
          <div>
            <h3>Proyectos de los equipos</h3>
          </div>

          <div className="d-flex flex-column flex-md-row gap-2 w-70 w-md-auto justify-content-end">
            <div className="dropdown">
              <button
                ref={orderDropdownRef}
                className="btn btn-outline-primary dropdown-toggle"
                type="button"
                id="orderByDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleDropdownClick}
              >
                Ordenar por
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="orderByDropdown"
                style={{ minWidth: "7rem" }}
              >
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleSort("NumAsc")}
                  >
                    Equipo ⮟
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleSort("DateAsc")}
                  >
                    Fecha ⮟
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleSort("A-Z")}
                  >
                    A-Z
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleSort("NumDesc")}
                  >
                    Equipo ⮝
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleSort("DateDesc")}
                  >
                    Fecha ⮝
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleSort("Z-A")}
                  >
                    Z-A
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row g-5 justify-content-center p-1">
          {sortedProjects.map((project) => (
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
