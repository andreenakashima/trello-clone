import axios from "axios";
import { useQuery } from "react-query";
import { List } from "./components/List";
import { ListProps } from "./components/List";

export function App() {
  const { data, isLoading } = useQuery("lists", () => {
    return axios
      .get("http://localhost:3000/lists")
      .then((response) => response.data);
  });

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  console.log(data);

  return (
    <>
      <header className="flex justify-between px-8 py-4">
        <h1>Trelo</h1>
        <button className="rounded-md bg-slate-400 px-2 py-1 text-white">
          Adicionar Lista
        </button>
      </header>

      <div className="min-h-screen w-full gap-4 bg-slate-400 p-8">
        <div className="flex gap-4">
          {data.map((list: ListProps) => (
            <List key={list.id} {...list} />
          ))}
        </div>
      </div>
    </>
  );
}
