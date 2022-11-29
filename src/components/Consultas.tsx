import Image from "next/image";
import Link from "next/link";
import React from "react";
import { consultas } from "../utils/consultas";

function Consultas() {
  return (
    <article className="flex-1 p-4 flex-col">
      <div className="bg-[#272727] text-white flex py-4 px-4 rounded-md justify-between items-center">
        <span>
          <b>Abaixo as consultas</b> contratadas em seu plano
        </span>
        <input
          type="text"
          placeholder="Pesquisar consultas"
          className="pl-4 pr-8 py-2 text-zinc-600 rounded-md outline-none"
        />
      </div>
      <div className="flex flex-row flex-wrap gap-3 py-8">
        {consultas.map((item) => (
          <Link href={item.link} key={item.id}>
            <Image
              className="hover:brightness-75 transition-all"
              width={196}
              height={100}
              src={item.imageUrl}
              alt={item.name}
            />
          </Link>
        ))}
      </div>
    </article>
  );
}

export default Consultas;
