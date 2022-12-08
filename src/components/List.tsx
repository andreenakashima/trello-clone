import { Task } from "./Task";

import { TaskProps } from "./Task";

interface ListProps {
  id: number | string;
  title: string;
  tasks: TaskProps[];
}

export function List(list: ListProps) {
  return (
    <div className="h-min w-80 rounded-md bg-white p-2 shadow-md">
      <h2 className="mb-4 border-b border-slate-400 py-2 text-lg font-bold">
        {list.title}
      </h2>

      <ul className="mb-4">
        {list.tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </ul>

      <div className="my-4 flex gap-2">
        <input
          type="text"
          className="w-full rounded-md border border-slate-400 p-2"
          placeholder="Nova tarefa"
        />
        <button className="rounded-md bg-slate-400 p-2">Adicionar</button>
      </div>
    </div>
  );
}
