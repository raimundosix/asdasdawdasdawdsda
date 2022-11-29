import Image from "next/image";
import React from "react";
import { PessoaProp } from "../../utils/resultadosCPF";

type ResultadoProp = {
  pessoa: PessoaProp | null;
};

function Resultado({ pessoa }: ResultadoProp) {
  return (
    <div>
      {pessoa ? (
        <section>
          <div className="flex gap-4  rounded-md">
            <Image
              src={pessoa.image}
              width={150}
              height={200}
              className="object-cover"
              alt=""
            />
            <div className="flex flex-col gap-1">
              <span>
                <b>NOME: </b>
                {pessoa.name}
              </span>
              <span>
                <b>CPF: </b>
                {pessoa.cpf}
              </span>
              <span>
                <b>NASCIMENTO: </b>
                {pessoa.birth}
              </span>
              <span>
                <b>COR: </b>
                {pessoa.color}
              </span>
              <span>
                <b>NOME MÃE: </b>
                {pessoa.mother}
              </span>
              <span>
                <b>NOME PAI: </b>
                {pessoa.dad}
              </span>
              <span>
                <b>TELEFONES: </b>
                {pessoa.tel}
              </span>
              <span>
                <b>EMAIL: </b>
                {pessoa.email}
              </span>
            </div>
          </div>
          <hr className="my-8 bg-black border border-[#9B9B9B]"></hr>
          <div>
            <h2 className="font-bold text-xl mb-4">ENDEREÇO</h2>
            <div className="flex flex-col gap-1">
              <span>
                <b>TIPO DE LOGRADOURO: </b>
                {pessoa.address.type}
              </span>
              <span>
                <b>LOGRADOURO: </b>
                {pessoa.address.street}
              </span>
              <span>
                <b>NÚMERO: </b> {pessoa.address.number}
              </span>
              <span>
                <b>BAIRRO: </b>
                {pessoa.address.district}
              </span>
              <span>
                <b>MUNICIPIO: </b>
                {pessoa.address.county}
              </span>
              <span>
                <b>ESTADO: </b>
                {pessoa.address.state}
              </span>
              <span>
                <b>CEP: </b>
                {pessoa.address.cep}
              </span>
            </div>
          </div>
        </section>
      ) : (
        <h3 className="font-bold text-center">NÃO ENCONTRADO</h3>
      )}
    </div>
  );
}

export default Resultado;
