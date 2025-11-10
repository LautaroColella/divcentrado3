import * as bootstrap from "bootstrap";
import { useEffect, useRef, useState } from "react";
import Circle from "../components/Circle";
import "../styles/trabajo.css";

export default function Trabajo() {
  const propositoRef = useRef<HTMLDivElement>(null);
  const valoresRef = useRef<HTMLDivElement>(null);
  const metodoRef = useRef<HTMLDivElement>(null);

  const propositoFrontRef = useRef<HTMLDivElement>(null);
  const propositoBackRef = useRef<HTMLDivElement>(null);

  const metodoFrontRef = useRef<HTMLDivElement>(null);
  const metodoBackRef = useRef<HTMLDivElement>(null);

  const [propositoFlipped, setPropositoFlipped] = useState(false);
  const [propositoAnimating, setPropositoAnimating] = useState(false);
  const [metodoFlipped, setMetodoFlipped] = useState(false);
  const [metodoAnimating, setMetodoAnimating] = useState(false);

  const PROPOSITO_CIRCLE_DURATION = 600;

  const iconTooltips = useRef<bootstrap.Tooltip[]>([]);
  const tooltipTimeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  const handlePropositoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      propositoAnimating ||
      !propositoRef.current ||
      !propositoFrontRef.current ||
      !propositoBackRef.current
    )
      return;

    setPropositoAnimating(true);
    const circle = propositoRef.current;
    const front = propositoFrontRef.current;
    const back = propositoBackRef.current;

    const rect = circle.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = x - cx;
    const dy = y - cy;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;

    const axisX = -dy / len;
    const axisY = dx / len;
    const axisZ = 0;

    front.style.transition = "none";
    back.style.transition = "none";

    if (!propositoFlipped) {
      front.style.transform = `rotate3d(${axisX}, ${axisY}, ${axisZ}, 0deg)`;
      back.style.transform = `rotate3d(${axisX}, ${axisY}, ${axisZ}, 180deg)`;
    } else {
      front.style.transform = `rotate3d(${axisX}, ${axisY}, ${axisZ}, 180deg)`;
      back.style.transform = `rotate3d(${axisX}, ${axisY}, ${axisZ}, 0deg)`;
    }

    void front.offsetHeight;

    front.style.transition = `transform ${PROPOSITO_CIRCLE_DURATION}ms ease`;
    back.style.transition = `transform ${PROPOSITO_CIRCLE_DURATION}ms ease`;

    if (!propositoFlipped) {
      front.style.transform = `rotate3d(${axisX}, ${axisY}, ${axisZ}, 180deg)`;
      back.style.transform = `rotate3d(${axisX}, ${axisY}, ${axisZ}, 0deg)`;
    } else {
      front.style.transform = `rotate3d(${axisX}, ${axisY}, ${axisZ}, 0deg)`;
      back.style.transform = `rotate3d(${axisX}, ${axisY}, ${axisZ}, -180deg)`;
    }

    setTimeout(() => {
      setPropositoFlipped(!propositoFlipped);
      setPropositoAnimating(false);
    }, PROPOSITO_CIRCLE_DURATION);
  };

  const handleValoresClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!valoresRef.current) return;
    const circle = valoresRef.current;
    if ((e.target as HTMLElement).closest(".circle-back i")) return;

    const rect = circle.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    circle.style.setProperty("--ripple-x", `${x}px`);
    circle.style.setProperty("--ripple-y", `${y}px`);

    circle.classList.add("ripple-out");

    setTimeout(() => {
      circle.classList.remove("ripple-out");

      const front = circle.querySelector<HTMLDivElement>(".circle-front");
      if (!front) return;

      if (!circle.classList.contains("active")) {
        circle.classList.add("active", "show-icons");
        front.style.display = "none";

        const icons = circle.querySelectorAll<HTMLElement>(".circle-back i");
        icons.forEach((icon, i) => {
          if (iconTooltips.current[i]) iconTooltips.current[i].dispose();
          iconTooltips.current[i] = new bootstrap.Tooltip(icon, {
            trigger: "hover",
          });
        });
      } else {
        tooltipTimeouts.current.forEach(clearTimeout);
        tooltipTimeouts.current = [];

        iconTooltips.current.forEach((tooltip) => {
          tooltip.hide();
          tooltip.dispose();
        });
        iconTooltips.current = [];

        circle.classList.remove("active", "show-icons");
        front.style.display = "flex";
      }

      circle.classList.add("ripple-in");
      setTimeout(() => circle.classList.remove("ripple-in"), 300);
    }, 300);
  };

  const handleMetodoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      metodoAnimating ||
      !metodoRef.current ||
      !metodoFrontRef.current ||
      !metodoBackRef.current
    )
      return;

    setMetodoAnimating(true);
    const circle = metodoRef.current;
    const front = metodoFrontRef.current;
    const back = metodoBackRef.current;

    const rect = circle.getBoundingClientRect();
    const clickX = e.clientX - rect.left - rect.width / 2;
    const clickY = e.clientY - rect.top - rect.height / 2;

    circle.style.transition = "transform 0.4s ease";
    circle.style.transformOrigin = `${50 + (clickX / rect.width) * 100}% ${
      50 + (clickY / rect.height) * 100
    }%`;
    circle.style.transform = "scale(0.05)";

    setTimeout(() => {
      if (!metodoFlipped) {
        front.style.opacity = "0";
        back.style.opacity = "1";
      } else {
        front.style.opacity = "1";
        back.style.opacity = "0";
      }
      setMetodoFlipped(!metodoFlipped);

      circle.style.transition = "transform 0.4s ease";
      circle.style.transform = "scale(1)";

      setTimeout(() => setMetodoAnimating(false), 400);
    }, 400);
  };

  const attachCursorDot = (circle: HTMLDivElement | null) => {
    if (!circle) return;
    const cursorDot = document.createElement("div");
    cursorDot.classList.add("cursor-dot");
    circle.appendChild(cursorDot);

    const mouseMoveHandler = (e: MouseEvent) => {
      if (
        circle.id === "circle-valores" &&
        (e.target as HTMLElement).closest(".circle-back i")
      ) {
        cursorDot.style.opacity = "0";
        return;
      }
      const rect = circle.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cursorDot.style.left = `${x - 5}px`;
      cursorDot.style.top = `${y - 5}px`;
      cursorDot.style.opacity = "1";
    };

    circle.addEventListener("mousemove", mouseMoveHandler);
    circle.addEventListener(
      "mouseleave",
      () => (cursorDot.style.opacity = "0")
    );
  };

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) {
      attachCursorDot(valoresRef.current);
      attachCursorDot(propositoRef.current);
      attachCursorDot(metodoRef.current);
    }
  }, []);

  useEffect(() => {
    if (!valoresRef.current) return;
    const icons =
      valoresRef.current.querySelectorAll<HTMLElement>(".circle-back i");
    icons.forEach((icon, index) => {
      icon.addEventListener("click", (e) => {
        e.stopPropagation();

        tooltipTimeouts.current.forEach(clearTimeout);
        tooltipTimeouts.current = [];

        if (iconTooltips.current[index]) {
          iconTooltips.current[index].show();
          const t = setTimeout(() => {
            if (iconTooltips.current[index]) iconTooltips.current[index].hide();
          }, 3000);
          tooltipTimeouts.current.push(t);
        }
      });
    });
  }, []);
  /*
    Actualmente los tooltips en mobile estan bugueados.
    Probe varias cosas diferentes para fixearlos, pero es un problema de bootstrap:
    "Triggering tooltips on hidden elements will not work."
    "Tooltips must be hidden before their corresponding elements have been removed from the DOM."
    https://getbootstrap.com/docs/5.0/components/tooltips/

    Logré fixearlo en la página estática pero acá es más dificil por un tema de componentes.
    Capaz con este useEffect se puede pasar una dependencia al array de forma tal que solo se inicie
    el tooltip si los iconos existen (display != none), solo si se muestra el contenido del back.
    Y teniendo en cuenta el estado con useState se podria hacer dispose de los que sigan activos.
  */

  return (
    <div className="d-flex flex-column align-items-center h-100">
      <div id="second-slide-title">
        <h2>Forma de Trabajo</h2>
      </div>
      <div className="circle-container mt-auto mb-auto">
        <Circle
          id="circle-proposito"
          frontContent="Propósito"
          backContent="Buscamos crear una página que muestre lo que aprendimos y cómo trabajamos juntos"
          onClick={handlePropositoClick}
          ref={propositoRef}
          frontRef={propositoFrontRef}
          backRef={propositoBackRef}
        />

        <Circle
          id="circle-valores"
          frontContent="Valores"
          backContent={
            <>
              <i
                className="fa-solid fa-graduation-cap"
                data-bs-toggle="tooltip"
                title="Aprendemos mientras diseñamos y programamos, mejorando nuestras habilidades"
              ></i>
              <i
                className="fa-solid fa-calendar-check"
                data-bs-toggle="tooltip"
                title="Nos aseguramos de cumplir con los plazos y mantener la calidad del trabajo"
              ></i>
              <i
                className="fa-solid fa-handshake"
                data-bs-toggle="tooltip"
                title="Colaboramos para que cada parte del proyecto funcione a la perfección"
              ></i>
              <i
                className="fa-solid fa-lightbulb"
                data-bs-toggle="tooltip"
                title="Buscamos ideas originales para que la página sea visual y atractiva"
              ></i>
            </>
          }
          onClick={handleValoresClick}
          ref={valoresRef}
          frontRef={undefined}
          backRef={undefined}
        />

        <Circle
          id="circle-metodo"
          frontContent="Método"
          backContent="Trabajamos juntos dividiendo tareas, revisando cada sección y asegurando que la página sea funcional y atractiva"
          onClick={handleMetodoClick}
          ref={metodoRef}
          frontRef={metodoFrontRef}
          backRef={metodoBackRef}
        />
      </div>
    </div>
  );
}