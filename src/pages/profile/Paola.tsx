import { useRef, useState } from "react";
import { ActionsBar, List, ProfileCard, Section, } from "../../components/CardPaola";
import MovieModal from "../../components/MovieModal";
import PageTitle from "../../components/PageTitle";
import Sidebar from "../../components/Sidebar";
import "../../styles/profiles/alvarez.css";
import Redes from "../../components/Redes";
import BotonModo from "../../components/BotonModo";

//FONDOS
import fondo1 from "../../assets/img/fondoTarjetaAlvarez1.jpg";
import fondo2 from "../../assets/img/fondoTarjetaAlvarez2.jpg";
import fondo3 from "../../assets/img/fondoTarjetaAlvarez3.jpg";
import fondo4 from "../../assets/img/fondoTarjetaAlvarez4.jpg";
import fondo5 from "../../assets/img/fondoTarjetaAlvarez5.jpg";
import fondo6 from "../../assets/img/fondoTarjetaAlvarez6.jpg";

//AVATARES
import avatar1 from "../../assets/img/imgAlvarezPerfil.png";
import avatar2 from "../../assets/img/imgAlvarezPerfil1.png";
import avatar3 from "../../assets/img/imgAlvarezPerfil2.jpeg";

//ARTISTAS
import coldplayBg from "../../assets/img/fondoColdplay.jpg";
import duaBg from "../../assets/img/fondoDua.jpg";
import katyBg from "../../assets/img/fondoKaty.jpg";
import mirandaBg from "../../assets/img/fondoMiranda.jpg";

//PELIS
import avengersBg from "../../assets/img/fondoAvengers.jpg";
import conjuroBg from "../../assets/img/fondoConjuro.jpg";
import pradaBg from "../../assets/img/fondoPrada.jpg";
import prideBg from "../../assets/img/fondoPride.jpg";

export default function Paola() {
  const fondosCard = [fondo1, fondo2, fondo3, fondo4, fondo5, fondo6];
  const avatares = [avatar1, avatar2, avatar3];

  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [showMovieModal, setShowMovieModal] = useState(false);

  const HAS_TMDB = !!import.meta.env.VITE_TMDB_API_KEY;

  const openMovieModal = (id?: number) => {
    if (!id) return;
    if (!HAS_TMDB) {
      alert("Falta configurar VITE_TMDB_API_KEY en tu .env");
      return;
    }
    setSelectedMovieId(id);
    setShowMovieModal(true);
  };

  const closeMovieModal = () => {
    setShowMovieModal(false);
    setSelectedMovieId(null);
  };

  const artistas = [
    { name: "Miranda", bg: mirandaBg },
    { name: "Katy Perry", bg: katyBg },
    { name: "Dua Lipa", bg: duaBg },
    { name: "Coldplay", bg: coldplayBg },
  ];

  const movies = [
    { name: "El diablo viste a la moda", bg: pradaBg, id: 350 },
    { name: "Orgullo y prejuicio", bg: prideBg, id: 4348 },
    { name: "El conjuro", bg: conjuroBg, id: 138843 },
    { name: "The Avengers", bg: avengersBg, id: 24428 },
  ];

  const [artistIndex, setArtistIndex] = useState(0);
  const [movieIndex, setMovieIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [seleccion, setSeleccion] = useState<string>("Ninguno");
  const cardRef = useRef<HTMLDivElement | null>(null);

  const bgActual = fondosCard[bgIndex] ?? fondosCard[0];
  const avatarActual = avatares[avatarIndex] ?? avatares[0];

  const setCardBg = (url: string) => {
    if (cardRef.current) {
      cardRef.current.style.background = `url("${url}") center / cover no-repeat`;
    }
  };

  //acciones
  const cambiarFondo = () => {
    const next = (bgIndex + 1) % fondosCard.length;
    setBgIndex(next);
    setCardBg(fondosCard[next]);
  };

  const cambiarAvatar = () => {
    const el = document.getElementById("avatar");
    el?.classList.add("fade-out");
    setTimeout(() => {
      setAvatarIndex((i) => (i + 1) % avatares.length);
      el?.classList.remove("fade-out");
    }, 400);
  };

  const cicloArtista = () => {
    if (!artistas.length) return;
    const next = (artistIndex + 1) % artistas.length;
    setArtistIndex(next);
    setSeleccion(`Artista: ${artistas[next].name}`);
    setCardBg(artistas[next].bg);
  };

  const cicloPelicula = () => {
    if (!movies.length) return;
    const next = (movieIndex + 1) % movies.length;
    setMovieIndex(next);
    setSeleccion(`Película: ${movies[next].name}`);
    setCardBg(movies[next].bg);
  };

  return (
    <div className="paola-scope">
      <PageTitle title="Paola | DIVCENTRADO" />
      <Sidebar />

      {/*Card*/}
      <ProfileCard ref={cardRef} backgroundUrl={bgActual}>
        {/*Avatar*/}
        <figure className="card__avatar-wrap">
          <img
            id="avatar"
            className="avatar"
            src={avatarActual}
            alt="Foto de perfil de Paola"
          />
        </figure>

        {/*Contenido*/}
        <div className="card__content">
          <Section title="Apariencia">
            <BotonModo />
          </Section>

          <h1 className="card__title">Alvarez Paola</h1>

          <p className="card__meta">
            <strong>Ubicación:</strong> Tucumán, Argentina
          </p>
          <p className="card__meta">
            <strong>Edad:</strong> 36 años
          </p>

          <Section title="Presentación">
            <p className="presentacion">
              Soy estudiante de dos carreras vinculadas a la tecnología. Me
              apasionan la programación, el diseño de interfaces y el trabajo en
              equipo. Participé en proyectos académicos y busco seguir creciendo
              en el área de desarrollo web y de software. En mi tiempo libre
              disfruto de jugar videojuegos, escuchar música y compartir
              momentos con mi familia y mis mascotas.
            </p>
          </Section>

          <Section title="Habilidades">
            <List
              items={[
                "Desarrollo Web (HTML, CSS, JS)",
                "Programación en C, C#, Java, React",
                "Gestión de Proyectos",
                "Trabajo en Equipo",
              ]}
            />
          </Section>

          <Section title="Música Favorita">
            <List items={["Miranda", "Katy Perry", "Dua Lipa", "Coldplay"]} />
          </Section>

          <Section title="Películas Favoritas">
            <ul className="list">
              {movies.map((m) => (
                <li
                  key={m.name}
                  style={{ display: "flex", gap: 8, alignItems: "center" }}
                >
                  <button
                    className="btn"
                    onClick={() => openMovieModal(m.id)}
                    disabled={!m.id || !HAS_TMDB}
                    title={
                      !HAS_TMDB
                        ? "Configura la API key en .env"
                        : "Ver info de TMDB"
                    }
                  >
                    Ver info
                  </button>
                  <span>{m.name}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Selección Actual">
            <p id="seleccion-actual" className="card__meta">
              {seleccion}
            </p>
          </Section>

          <ActionsBar
            onChangeBg={cambiarFondo}
            onChangeAvatar={cambiarAvatar}
            onArtistBg={cicloArtista}
            onMovieBg={cicloPelicula}
          />
        </div>
      </ProfileCard>

      <footer className="footer">
        <div className="footer-inner">
          <section className="footer-left">
            <h3>Contactame</h3>
            <Redes
              github="https://github.com"
              linkedin="https://www.linkedin.com"
              discord="https://discord.com"
            />
          </section>

          <small className="footer-right">© 2025 Tarjeta Personal - Paola Alvarez</small>
        </div>
      </footer>

      <MovieModal
        movieId={selectedMovieId}
        show={showMovieModal}
        onClose={closeMovieModal}
      />
    </div>
  );
}
