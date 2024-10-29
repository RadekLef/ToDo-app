import { useTodosContext } from "../lib/hooks";

interface DeleteBUttonProps {
    id: number;
}

export default function DeleteButton({id}: DeleteBUttonProps) {
    const { deleteTodo } = useTodosContext();
  return (
    <button
        onClick={(e) => {
        e.stopPropagation(); 
        deleteTodo(id); 
        }}
    >
    ❌
    </button>
  )
}