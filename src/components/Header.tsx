import { Dialog } from "@headlessui/react";
import axios from "axios";

import { FormEvent, useRef, useState } from "react";
import { useMutation, useQueryClient } from "react-query";

import { ListProps } from "./List";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const inputTitleRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (newList: ListProps) => {
      return axios.post("http://localhost:3000/lists", newList);
    },
    {
      onSuccess: () => {
        setIsOpen(false);

        queryClient.invalidateQueries("lists");
      },
    }
  );

  function createNewList(e: FormEvent) {
    e.preventDefault();

    const newList = {
      id: String(new Date().getTime()),
      title: String(inputTitleRef.current?.value),
    };

    mutate(newList);
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
              <form className="flex gap-2" onSubmit={createNewList}>
                <input
                  ref={inputTitleRef}
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
    </>
  );
}
