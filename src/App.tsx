import axios from "axios";
import { useQuery } from "react-query";
import { List } from "./components/List";
import { ListProps } from "./components/List";

import { useState } from "react";
import { Dialog } from "@headlessui/react";

export function App() {
  const [isOpen, setIsOpen] = useState(true);

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
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-4">
            <div className="flex justify-between">
              <Dialog.Title>Crie sua nova lista</Dialog.Title>

              <button
                onClick={() => setIsOpen(false)}
                className="rounded-md border px-2 hover:bg-slate-500 hover:text-white"
              >
                X
              </button>
            </div>

            <div className="mt-4">
              <form className="flex gap-2">
                <input
                  type="text"
                  className="w-full rounded-md border border-slate-400 p-2"
                  placeholder="Digite o título"
                />
                <button className="rounded-md bg-slate-400 p-2">
                  Adicionar
                </button>
              </form>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      <header className="flex justify-between px-8 py-4">
        <h1>Trelo</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-md bg-slate-400 px-2 py-1 text-white"
        >
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
