import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";

interface MovieModalProps {
  movieId: number | null;
  show: boolean;
  onClose: () => void;
}

interface MovieDetails {
  title: string;
  overview: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
  genres: { id: number; name: string }[];
}

interface RelatedMovie {
  id: number;
  title: string;
  poster_path: string | null;
}

const API_KEY: string | undefined = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const MovieModal: React.FC<MovieModalProps> = ({ movieId, show, onClose }) => {
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [related, setRelated] = useState<RelatedMovie[]>([]);

  useEffect(() => {
    if (!movieId) return;
    if (!API_KEY) {
      console.warn(
        "TMDB API key no encontrada. Define VITE_TMDB_API_KEY en .env"
      );
      return;
    }

    const fetchMovie = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=es-MX`
        );
        const data = await response.json();
        setMovie(data);

        const relatedRes = await fetch(
          `${BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}&language=es-MX`
        );
        const relatedData = await relatedRes.json();
        setRelated((relatedData.results || []).slice(0, 6));
      } catch (error) {
        console.error("Error obteniendo la pelicula:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (!show) return null;
  if (!API_KEY) return null;

  return (
    <div
      className={`modal fade ${show ? "show d-block" : ""}`}
      tabIndex={-1}
      role="dialog"
      onClick={onClose}
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
        role="document"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{movie?.title || "Cargando..."}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            {loading && <p>Cargando detalles de la película...</p>}
            {movie && (
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-md-8 d-flex flex-column justify-content-center">
                  <p>
                    <strong>Sinopsis:</strong> {movie.overview}
                  </p>
                  <p>
                    <strong>Rating:</strong> {Math.floor(movie.vote_average)}/10
                  </p>
                  <p>
                    <strong>Fecha de salida:</strong> {movie.release_date}
                  </p>
                  <p>
                    <strong>Generos:</strong>{" "}
                    {movie.genres.map((g) => g.name).join(", ")}
                  </p>
                </div>
              </div>
            )}
            {related.length > 0 && (
              <div className="related-movies mt-4">
                <h5 className="text-center">Peliculas relacionadas</h5>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {related.map((rel) => (
                    <div
                      key={rel.id}
                      style={{ width: "100px" }}
                      className="text-center"
                    >
                      {rel.poster_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w200${rel.poster_path}`}
                          alt={rel.title}
                          className="img-fluid rounded mb-1"
                        />
                      ) : (
                        <div
                          className="bg-secondary rounded mb-1"
                          style={{ height: "150px" }}
                        ></div>
                      )}
                      <small>{rel.title}</small>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
