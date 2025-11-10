import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

import "../styles/carousel.css";

import Bitacora from "../pages/Bitacora";
import Nombre from "../pages/Nombre";
import Proyectos from "../pages/Proyectos";
import Trabajo from "../pages/Trabajo";

const slides = [
  { component: <Nombre />, path: "/nombre", title: "Portada | DIVCENTRADO" },
  { component: <Trabajo />, path: "/trabajo", title: "Trabajo | DIVCENTRADO" },
  {
    component: <Bitacora />,
    path: "/bitacora",
    title: "Bitácora | DIVCENTRADO",
  },
  {
    component: <Proyectos />,
    path: "/proyectos",
    title: "Proyectos | DIVCENTRADO",
  },
];

export default function CarouselWrapper() {
  const navigate = useNavigate();
  const location = useLocation();

  const initialIndex =
    slides.findIndex((slide) => slide.path === location.pathname) || 0;
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    const i = slides.findIndex((slide) => slide.path === location.pathname);
    if (i >= 0) {
      setIndex((prevIndex) => (prevIndex !== i ? i : prevIndex));
    }
  }, [location.pathname]);

  useEffect(() => {
    document.title = slides[index].title;
  }, [index]);

  const next = () => {
    const newIndex = (index + 1) % slides.length;
    setIndex(newIndex);
    navigate(slides[newIndex].path);
  };

  const prev = () => {
    const newIndex = (index - 1 + slides.length) % slides.length;
    setIndex(newIndex);
    navigate(slides[newIndex].path);
  };

  return (
    <div
      className="main-carousel d-flex align-items-center justify-content-center position-relative"
      style={{ height: "100vh" }}
    >
      <Sidebar />

      <div className="carousel-inner h-100 w-100">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`carousel-item h-100 ${i === index ? "active" : ""}`}
          >
            {slide.component}
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" onClick={prev}>
        <i className="fa-solid fa-chevron-left fa-2x"></i>
      </button>
      <button className="carousel-control-next" onClick={next}>
        <i className="fa-solid fa-chevron-right fa-2x"></i>
      </button>

      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={i === index ? "active" : ""}
            onClick={() => {
              setIndex(i);
              navigate(slides[i].path);
            }}
          />
        ))}
      </div>
    </div>
  );
}
