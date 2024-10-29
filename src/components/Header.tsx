import Counter from "./Counter"
import Logo from "./Logo"

export default function Header() {
  return (
    <header className="col-[1/3] row-[1/2] bg-slate-500 bordeer border-black/[0.08] flex justify-between items-center px-[28px]">
    <Logo />
    <Counter />
    </header>
  )
}
