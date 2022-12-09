import axios from "axios";
import { useQuery } from "react-query";
import { List } from "./components/List";
import { ListProps } from "./components/List";

import { Header } from "./components/Header";

export function App() {
  const { data, isLoading } = useQuery("lists", () => {
    return axios
      .get("http://localhost:3000/lists")
      .then((response) => response.data);
  });

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Header />

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
