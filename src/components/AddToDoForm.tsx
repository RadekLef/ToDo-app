import { useState } from "react";
import Button from "./Button";
import { useTodosContext } from "../lib/hooks";

export default function AddToDoForm() {
    const [todoContent, setTodoContent] = useState("");
    const { addTodo } = useTodosContext();
  return (
    <form 
        onSubmit={(e) => {
        e.preventDefault();
        addTodo(todoContent);
        setTodoContent("");
    }}>
        <h2 className="font-medium text-slate-900">Přidej todo</h2>
        <input type="text" 
        className="px-[16px] h-[45px] border border-slate-950/[12%] rounded-[5px] my-[9px] text-[14px] block w-full ml-[10px]"
        value={todoContent}
        onChange={(e) => {
            setTodoContent(e.target.value)
        }}
        />
        <Button>Přidat do seznamu</Button>
    </form>
  )
}
