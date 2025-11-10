// src/components/LogEntry.tsx

// Definimos los "tipos" de las props que recibirá el componente
interface Task {
  title: string;
  assignee: string;
}

interface LogEntryProps {
  date: string;
  content: string[];
  tasks?: Task[]; // El '?' significa que esta prop es opcional
}

export default function LogEntry({ date, content, tasks }: LogEntryProps) {
  return (
    <article className="mb-4 text-start text-md-center">
      <h3>{date}</h3>
      
      {content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      {/* Si existen tareas, crea la lista */}
      {tasks && (
        <ul className="task-list text-start ps-3">
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>{task.title}:</strong> {task.assignee}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}