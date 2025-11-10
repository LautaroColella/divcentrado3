/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import PageTitle from "../../components/PageTitle";
import Sidebar from "../../components/Sidebar";
import "../../styles/profiles/santi.css";
import Redes from "../../components/Redes";


export default function Santiago() {
  useEffect(() => {
    // Configuración de particles.js (una sola vez)
    const particlesConfig = {
      particles: {
        number: {
          value: 90,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#fcf0f0",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.13,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 70,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.25,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 0.2,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    };

    let script: HTMLScriptElement | null = null;

    // Función para inicializar particles.js
    const initParticles = () => {
      const container = document.getElementById("particles-js");
      if (!container) return;

      // Limpia cualquier canvas previo dentro del contenedor
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      if (window.particlesJS) {
        window.particlesJS("particles-js", particlesConfig);
        return;
      }

      // Evita inyectar el script más de una vez
      const existing = Array.from(document.getElementsByTagName("script")).find(
        (s) => s.src.includes("particles.min.js")
      );
      if (existing) {
        existing.addEventListener(
          "load",
          () => {
            window.particlesJS("particles-js", particlesConfig);
          },
          { once: true }
        );
        return;
      }

      script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      script.onload = () => {
        window.particlesJS("particles-js", particlesConfig);
      };
      document.head.appendChild(script);
    };

    initParticles();

    // Limpia el contenedor al desmontar para evitar duplicaciones al re-montar
    return () => {
      const container = document.getElementById("particles-js");
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
    };
  }, []);

  return (
    <div className="santiago-page">
      <PageTitle title="Santiago | DIVCENTRADO" />
      <Sidebar />
      <header>
        <h1 className="jersey-15-regular">Santiago Agustín Rojas</h1>
        <h2>
          Hola!! ¿Cómo están?
          <img
            id="hi"
            src="/src/assets/img/hi.gif"
            alt="Saludo animado"
            className="img"
          />
          Me llamo Santiago, tengo 25 años y soy de Buenos Aires, Argentina.
        </h2>
        <img
          id="icon"
          src="/src/assets/img/icon.jpeg"
          alt="Icono personal"
          className="img"
        />
      </header>

      <main id="principal">
        <section>
          <h3>Sobre mí</h3>
          <ul>
            <li>
              Me gusta la programación, el diseño web y el análisis de datos.
            </li>
            <li>Me apasiona el automovilismo y la música.</li>
            <li>Disfruto de la lectura y el anime.</li>
            <li>
              Tengo una gatita llamada Yuumi (sí, como el personaje de League of
              Legends).
            </li>
          </ul>
          <img
            src="/src/assets/img/yuumi1.jpeg"
            alt="Mi gata Yuumi"
            className="img"
          />
        </section>

        <section>
          <h2>Habilidades</h2>
          <p>
            Me considero bueno en el diseño web. Sé utilizar Python para
            análisis de datos (Pandas, Numpy, etc.), SQL para bases de datos, y
            tengo algo de experiencia en C#. También manejo Excel y Figma para
            gráficos de datos.
          </p>
        </section>

        <section>
          <h2>Mis gustos</h2>

          <article>
            <h3>Películas</h3>
            <p>
              No suelo mirar muchas películas, pero me gustan las de animación:
            </p>
            <ul id="pelis">
              <li>Ratatouille</li>
              <li>Moana</li>
              <li>Harry Potter y la piedra filosofal</li>
            </ul>
          </article>

          <article>
            <h3>Animes</h3>
            <ul>
              <li>One Piece</li>
              <li>Naruto</li>
              <li>Hunter x Hunter</li>
              <li>Shigatsu wa Kimi no Uso</li>
            </ul>
          </article>

          <article>
            <h3>Música</h3>
            <p>
              Me gusta el rap y el rock tanto nacional como internacional . Mis
              discos favoritos son:
            </p>
            <ul id="musica">
              <li>
                {" "}
                <a href="https://www.youtube.com/watch?v=s7ZsYe5Uwg0&list=PLkROH3Eqs0T-21TF61hNOY00vR7bfn833&ab_channel=SystemOfADown-Topic">
                  <em>Toxicity</em>
                </a>{" "}
                – System of a Down
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=OksyOpzjCgk&list=RDOksyOpzjCgk&start_radio=1">
                  <em>Epifanias</em>
                </a>{" "}
                – Saje{" "}
              </li>
              <li>
                {" "}
                <a href="https://www.youtube.com/watch?v=gqf5R3wZgdM&list=RDgqf5R3wZgdM&start_radio=1&ab_channel=PatricioReyysusRedonditosdeRicota">
                  <em>Oktubre</em>
                </a>{" "}
                – Patricio Rey y sus Redonditos de Ricota
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=wDXazS-MXkE&list=PL-xi6ZKgqt_ds-Ak17lozgNBW9NZ2i2Hu&ab_channel=PeloMusicGroup">
                  <em>Rocanroles sin Destino</em>
                </a>{" "}
                - Callejeros
              </li>
            </ul>
          </article>
        </section>

        <section>
          <h3>Contactame</h3>
          <Redes
            github="https://github.com/saos1739"
            linkedin="https://www.linkedin.com/in/rojasantiagoa/"
            discord="https://discord.com/users/353622961338712064"
          />
        </section>

        
      </main>


      <div id="particles-js"></div>
    </div>
  );
}
