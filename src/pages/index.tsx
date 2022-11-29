import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Consultas from "../components/Consultas";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex">
        <div className="absolute left-0 top-0 w-72 h-[700px] bg-[#101010]"></div>

        <NavBar />
        <Consultas />
      </div>
    </main>
  );
}
