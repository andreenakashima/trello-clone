export function App() {
  return (
    <>
      <header className="px-8 py-4">
        <h1>Trelo</h1>
      </header>

      <div className="min-h-screen w-full gap-4 bg-slate-400 p-8">
        <div className="flex">
          <div className="h-min w-80 rounded-md bg-white p-2 shadow-md">
            <h2 className="mb-4 border-b border-slate-400 py-2 text-lg font-bold">
              A fazer
            </h2>
            <ul className="mb-4">
              <li className="mb-2 w-full rounded-md bg-slate-300 p-2 shadow-md">
                <h3>tarefa 01</h3>
              </li>
              <li className="mb-2 w-full rounded-md bg-slate-300 p-2 shadow-md">
                <h3>tarefa 01</h3>
              </li>
              <li className="mb-2 w-full rounded-md bg-slate-300 p-2 shadow-md">
                <h3>tarefa 01</h3>
              </li>
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
        </div>
      </div>
    </>
  );
}
