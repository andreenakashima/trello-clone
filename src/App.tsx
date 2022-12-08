import { List } from "./components/List";

export function App() {
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
          {/* {lists.map((list) => (
            <List key={list.id} {...list} />
          ))} */}
        </div>
      </div>
    </>
  );
}
