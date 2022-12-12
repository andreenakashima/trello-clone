import axios from "axios";
import { useQuery } from "react-query";
import { Task } from "./Task";
import { TaskProps } from "./Task";

export interface ListProps {
  id: number | string;
  title: string;
}

export function List(list: ListProps) {
  const { data, isLoading } = useQuery(["tasks", list.id], () => {
    return axios
      .get(`http://localhost:3000/tasks?list_id=${list.id}`)
      .then((response) => response.data);
  });

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="h-min w-80 rounded-md bg-white p-2 shadow-md">
      <h2 className="mb-4 border-b border-slate-400 py-2 text-lg font-bold">
        {list.title}
      </h2>

      <ul className="mb-4">
        {data.map((task: TaskProps) => (
          <Task key={task.id} {...task} />
        ))}
      </ul>

      <form className="my-4 flex gap-2">
        <input
          type="text"
          className="w-full rounded-md border border-slate-400 p-2"
          placeholder="Nova tarefa"
        />
        <button className="rounded-md bg-slate-400 p-2">Adicionar</button>
      </form>
    </div>
  );
}
