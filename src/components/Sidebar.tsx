import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/sidebar.css";

const secciones = [
  { nombre: "Portada", ruta: "/nombre" },
  { nombre: "Trabajo", ruta: "/trabajo" },
  { nombre: "Bitácora", ruta: "/bitacora" },
  { nombre: "Proyectos", ruta: "/proyectos" },
];

const perfiles = [
  { nombre: "Lautaro Colella", ruta: "/perfil/lautaro" },
  { nombre: "Cristian Páez", ruta: "/perfil/cristian" },
  { nombre: "Santiago Rojas", ruta: "/perfil/santiago" },
  { nombre: "Paola Álvarez", ruta: "/perfil/paola" },
  { nombre: "Silvana Fernández", ruta: "/perfil/silvana" },
];

export default function Sidebar() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const barra = document.querySelector(".barra-superior")?.getBoundingClientRect();
      const estaSobreBarra = barra && e.clientY <= barra.bottom;
      setVisible(e.clientY < 30 || !!estaSobreBarra);
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      if (touchY < 30) setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchStart);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return (
    <>
      {/* Línea azul con destello */}
      <div className="linea-destello" />

      {/* Barra superior */}
      <div className={`barra-superior ${visible ? "visible" : ""}`}>
        <nav>
          <ul className="barra-lista">
            {[...secciones, ...perfiles].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.ruta}
                  className={location.pathname === item.ruta ? "activo" : ""}
                >
                  {item.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
