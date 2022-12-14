import { Dialog } from "@headlessui/react";
import { Pencil } from "phosphor-react";
import { useState } from "react";

export interface TaskProps {
  id: number | string;
  list_id: number | string;
  description: string;
}

export function Task(task: TaskProps) {
  const [isOpen, setIsOpen] = useState(false);

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
              <Dialog.Title>Crie sua tarefa</Dialog.Title>

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
                  value={task.description}
                  className="w-full rounded-md border border-slate-400 p-2"
                  placeholder="Digite a tarefa"
                />
                <button className="rounded-md bg-slate-400 p-2">
                  Adicionar
                </button>
              </form>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      <li className="mb-2 w-full rounded-md bg-slate-300 p-2 shadow-md">
        <div className="mb-2 flex items-start justify-between">
          <div className="flex flex-wrap gap-1">
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
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-md bg-slate-200 p-1 hover:bg-slate-600 hover:text-white"
          >
            <Pencil size={16} />
          </button>
        </div>
        <h3>{task.description}</h3>
      </li>
    </>
  );
}
