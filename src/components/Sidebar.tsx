import AddToDoForm from "./AddToDoForm";
import Button from "./Button";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function Sidebar() {
    const { isAuthenticated, isLoading, user, login, register, logout } =
    useKindeAuth();
  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-slate-400 border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
       <AddToDoForm />
        <div className="mt-auto space-y-2">
            {isLoading ? null : isAuthenticated ? (
            <>
             <p className="text-sm">Přihlášen jako {user?.email}</p>
                <Button buttonType="secondary" onClick={() => logout()}>
                     Odhlásit se
                </Button>
            </>
        ) : (
            <>
            <Button buttonType="secondary" onClick={() => login()}>
                Přihlásit se
            </Button>
            <Button buttonType="secondary" onClick={() => register()}>
                Registrovat se
            </Button>
            </>
        )}
        </div>  
    </section>
  )
}
