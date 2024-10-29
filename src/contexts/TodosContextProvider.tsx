import { createContext, useEffect, useState, ReactNode } from "react";
import { Todo } from "../lib/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

interface TodosContextType {
  todos: Todo[];
  totalCount: number;
  completedCount: number;
  addTodo: (content: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  isLoading: boolean;
}

interface TodosContextProviderProps {
  children: ReactNode;
}

export const TodosContext = createContext<TodosContextType | undefined>(undefined);

const getInitialTodos = (): Todo[] => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    return [];
  }
};

export default function TodosContextProvider({ children }: TodosContextProviderProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
      setTodos(getInitialTodos());
      setIsLoading(false);
    }, []);
  
    const { isAuthenticated } = useKindeAuth();
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);

  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  const addTodo = (content: string) => {
    if (todos.length >= 5 && !isAuthenticated) {
      alert("Pro přídání více položek, se prosím přihlašte.");
      return;
    }

    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        content,
        completed: false,
      },
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        totalCount,
        completedCount,
        addTodo,
        toggleTodo,
        deleteTodo,
        isLoading,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
