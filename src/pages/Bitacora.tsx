import LogEntry from "../components/logentry";
import "../styles/bitacora.css";

const logData = [
  {
    date: "Bitácora 9 – 10/11/2025",
    content: [
      "Se llevó a cabo el merge del proyecto y se llevaron a cabo arreglos menores",
    ],
  },
  {
    date: "Bitácora 8 – 27/10/2025",
    content: [
      "Se llevó a cabo la planificación para abordar el nuevo objetivo del proyecto, resultando en una división y asignación de tareas entre el equipo. Durante esta sesión, se definió se determinaron las implementaciones específicas a realizar, se estableció que se ejecutarán los puntos 1, 2, 3, 6 y 7.",
    ],
  },
  {
    date: "Bitácora 7 – 15/10/2025",
    content: [
      "Se dio inicio a la segunda entrega del proyecto, planificando y distribuyendo las nuevas tareas entre los miembros del equipo.",
    ],
    tasks: [
      { title: "Repo, routing, json, api", assignee: "Lautaro" },
      { title: "Deploy a vercel", assignee: "Cristian" },
      { title: "Componente sidebar", assignee: "Silvana" },
      { title: "Diagramas de arquitectura", assignee: "Paola" },
      { title: "Actualización bitácora y README", assignee: "Santiago" },
      { title: "Perfil", assignee: "Cada integrante" },
    ],
  },
 
  {
    date: "Bitácora 6 – 09/10/2025",
    content: [
      "Se llevó a cabo el margeo de las paginas individuales a la rama principal (DEVELOPMENT), se ajustaron pequeños errores y ",
    ],
  },
  {
    date: "Bitácora 5 – 27/09/2025",
    content: [
      "Se llevó a cabo la planificación para abordar el nuevo objetivo del proyecto, resultando en una división y asignación de tareas entre el equipo. Durante esta sesión, se definió se determinaron las implementaciones específicas a realizar, se estableció que se ejecutarán los puntos 1, 2, 3, 6 y 7.",
    ],
  },
  {
    date: "Bitácora 4 – 19/09/2025",
    content: [
      "Se concretó el merge de las páginas individuales en la rama principal (DEVELOPMENT). Durante esta etapa se reorganizaron las carpetas del proyecto para mejorar la estructura general, separando componentes, estilos, imágenes y scripts de manera lógica y ordenada.",
    ],
  },
  {
    date: "Bitácora 3 – 17/09/2025",
    content: [
      "Se analizaron los detalles finales de cada sección. Se verificó el cumplimiento de estándares y se asignó el despliegue a Vercel.",
    ],
  },
  {
    date: "Bitácora 2 – 12/09/2025",
    content: [
      "Se revisaron los avances individuales, se ajustaron tiempos y se brindó retroalimentación para mejorar la coherencia del proyecto.",
    ],
  },
  {
    date: "Bitácora 1 – 05/09/2025",
    content: [
      "Primera reunión del equipo. Se definieron roles, se creó el repositorio en Git y se discutieron ideas preliminares de diseño.",
    ],
  },
];

export default function Bitacora() {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <section
        className="bg-lightblue bg-opacity-75 rounded-4 shadow p-4 p-md-5"
        id="bitacora"
      >
        <h2 className="mb-4 text-center">Bitácora del Proyecto Web 🚀</h2>

        {logData.map((entry) => (
          <LogEntry
            key={entry.date}
            date={entry.date}
            content={entry.content}
            tasks={entry.tasks}
          />
        ))}
      </section>
    </div>
  );
}
