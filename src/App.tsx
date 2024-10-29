import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ToDoList from "./components/ToDoList";

export default function App() {
  return (
    <div className="font-sans bg-slate-600 min-h-screen flex justify-center items-center flex-col">
      <BackgroundHeading />
      <main className="relative w-[972px] h-[636px] bg-slate-50 rounded-[7px] shadow-[0_4px_4px_rgba(0, 0, 0, 0.8)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header />
        <ToDoList />
        <Sidebar />
      </main>
      <Footer />
    </div>
  )
}


