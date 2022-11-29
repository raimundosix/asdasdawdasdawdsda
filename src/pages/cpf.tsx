import React from "react";
import CpfComponent from "../components/Cpf/CpfComponent";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

function cpf() {
  return (
    <>
      <main className="overflow-hidden">
        <div className="absolute left-0 top-0 w-72 h-[1000px] bg-[#101010]"></div>
        <Header />
        <div className="flex">
          <NavBar />
          <CpfComponent />
        </div>
      </main>
    </>
  );
}

export default cpf;
