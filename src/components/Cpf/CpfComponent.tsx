import React, { useState } from "react";
import Resultado from "./Resultado";
import Loading from "react-loading";
import { PessoaProp, pessoasCPF } from "../../utils/resultadosCPF";

function CpfComponent() {
  const [isResultInScreen, setIsResultInScreen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pessoa, setPessoa] = useState<PessoaProp | null>(null);
  const [cpf, setCpf] = useState<string>("");

  const handleGetCPF = () => {
    setIsLoading(true);
    setTimeout(() => {
      const result = pessoasCPF.filter(item => item.cpf === cpf)
      setPessoa(result[0])
      setIsResultInScreen(true);
      setIsLoading(false);
    }, 1500);
  };

  //pessoasCPF
  return (
    <section className="flex flex-1 justify-center px-8 py-10 flex-col gap-16 transition-all">
      <div className="flex flex-col gap-4 w-[450px] mx-auto transition-all">
        <h2 className="font-bold text-lg text-gray-600">
          Só aqui na MAX PRO você tem consultas ilimitadas
        </h2>
        <input
          className="flex-1 shadow-lg py-3 px-4 border border-red-400 rounded-md outline-none"
          placeholder="Digite o cpf sem pontuação..."
          value={cpf}
          maxLength={11}
          onChange={(e: any) => setCpf(e.target.value)}
        />
        <button
          onClick={handleGetCPF}
          className="bg-zinc-800 text-center flex items-center justify-center text-white py-4 rounded-md shadow-md font-bold"
        >
          {isLoading ? (
            <Loading width={24} height={24} type="spinningBubbles" />
          ) : (
            "PESQUISAR"
          )}
        </button>
      </div>

      {isResultInScreen && <Resultado pessoa={pessoa} />}
    </section>
  );
}

export default CpfComponent;
