import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { TaskProps } from "./Task";

interface ListIdProps {
  listId: string | number;
}

export default function NewTaskForm({ listId }: ListIdProps) {
  const [inputTask, setInputTask] = useState("");

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInputTask(e.target.value);
  }

  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (newTask: TaskProps) => {
      return axios.post("http://localhost:3000/tasks", newTask);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("tasks");
      },
    }
  );

  function createNewTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newTask: TaskProps = {
      id: String(new Date().getTime()),
      list_id: listId,
      description: inputTask,
    };

    mutate(newTask);
    setInputTask("");
  }

  return (
    <form className="my-4 flex gap-2" onSubmit={createNewTask}>
      <input
        type="text"
        value={inputTask}
        onChange={handleInputChange}
        className="w-full rounded-md border border-slate-400 p-2"
        placeholder="Nova tarefa"
      />
      <button className="rounded-md bg-slate-400 p-2">Adicionar</button>
    </form>
  );
}
