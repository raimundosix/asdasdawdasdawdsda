import Link from "next/link";
import React from "react";

import {
  BiEditAlt,
  BiDetail,
  BiUser,
  BiCommentError,
  BiCalendar,
} from "react-icons/bi";

function NavBar() {
  return (
    <nav className="flex w-72 h-[88vh] bg-[#101010] flex-col z-10">
      <Link href="/">
        <section className="text-zinc-800 flex bg-white items-center font-bold gap-3 py-4 px-4 hover:brightness-95 transition-colors">
          <BiDetail size={24} />
          <span>Consultas</span>
        </section>
      </Link>
      <Link href="/">
        <section className="text-white bg-[#101010] hover:bg-[#1a1a1a] flex items-center font-bold gap-3 py-4 px-4 transition-colors">
          <BiUser size={22} />
          <span>Meu perfil</span>
        </section>
      </Link>
      <Link href="/">
        <section className="text-white bg-[#101010] hover:bg-[#1a1a1a] flex items-center font-bold gap-3 py-4 px-4 transition-colors">
          <BiEditAlt size={22} />
          <span>Cadastrar usuários</span>
        </section>
      </Link>
      <Link href="/">
        <section className="text-white bg-[#101010] hover:bg-[#1a1a1a] flex items-center font-bold gap-3 py-4 px-4 transition-colors">
          <BiCommentError size={22} />
          <span>Avisos</span>
        </section>
      </Link>
      <hr className="w-full h-[2px] bg-[#545454] border-none"></hr>
        <span className="inline-block px-4 pt-2 text-[#B0B0B0] text-sm">Vencimento</span>
        <section className="text-white bg-[#101010]  flex items-center font-bold gap-3 py-2 px-4 transition-colors">
          <BiCalendar size={22} />
          <span>27/11/2023</span>
        </section>
    </nav>
  );
}

export default NavBar;
