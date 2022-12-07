import { List } from "./components/List";
import lists from "./data/Lists.json";

export function App() {
  return (
    <>
      <header className="px-8 py-4">
        <h1>Trelo</h1>
      </header>

      <div className="min-h-screen w-full gap-4 bg-slate-400 p-8">
        <div className="flex gap-4">
          {lists.map((list) => (
            <List key={list.id} {...list} />
          ))}
        </div>
      </div>
    </>
  );
}
