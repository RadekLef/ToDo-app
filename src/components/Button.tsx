import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  buttonType?: "" | "secondary"; 
  onClick?: () => void;
}

export default function Button({ children, buttonType, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`m-2 h-[45px] bg-slate-800 hover:bg-slate-900 w-full text-slate-50 rounded-[5px] cursor-pointer ${
        buttonType === "secondary" ? "opacity-[85%]" : ""
      }`}
    >
      {children}
    </button>
  );
}
