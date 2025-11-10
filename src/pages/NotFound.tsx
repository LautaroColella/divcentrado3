import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="d-flex justify-content-center align-items-center vh-100 bg-light text-center">
      <div className="card shadow-lg border-0 p-5">
        <div className="card-body">
          <h1 className="display-3 text-danger fw-bold">404</h1>
          <h2 className="mb-3">Página no encontrada</h2>
          <p className="text-muted mb-4">
            Lo sentimos, la página que buscas no existe o fue movida.
          </p>
          <Link to="/" className="btn btn-primary">
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
