export interface TaskProps {
  id: number | string;
  description: string;
}

export function Task(task: TaskProps) {
  return (
    <li className="mb-2 w-full rounded-md bg-slate-300 p-2 shadow-md">
      <div className="mb-2 flex flex-wrap gap-1">
        <span className="rounded-full bg-red-300 py-1 px-2 text-xs font-bold text-red-500">
          Urgente
        </span>
        <span className="rounded-full bg-red-300 py-1 px-2 text-xs font-bold text-red-500">
          Atenção
        </span>
        <span className="rounded-full bg-red-300 py-1 px-2 text-xs font-bold text-red-500">
          Em Andamento
        </span>
      </div>
      <h3>{task.description}</h3>
    </li>
  );
}
