export type PessoaProp = {
  id: number;
  image: string;
  name: string;
  cpf: string;
  birth: string;
  color: string;
  dad: string;
  mother: string;
  tel: string;
  email: string;
  address: {
    type: string;
    street: string;
    number: string;
    district: string;
    county: string;
    state: string;
    cep: string;
  };
};

export const pessoasCPF: PessoaProp[] = [
  {
    id: 1,
    image: "/1.png",
    name: "FREDERICO DOS SANTOS E SILVA",
    mother: "ZELIA FERREIRA DOS SANTOS CURADO SILVA",
    dad: "JACQUES ERCILIO CURADO SILVA",
    cpf: "00122544102",
    birth: "6/06/1983",
    color: "Não encontrado.",
    tel: "(62) 996618303 - CELULAR",
    email: "frederico.scs@gmail.com",
    address: {
      type: "RUA",
      street: "RUA ANGELICA S/N LT 7 QD E",
      county: "GOIÂNIA",
      number: "3",
      cep: "74863115",
      district: "JARDIM BELA VISTA",
      state: "GO",
    },
  },
  {
    id: 2,
    image: "/2.png",
    name: "VICENTE DE PAULA PIMENTA",
    mother: "RITA OTTONI PIMENTA",
    dad: "JOAO BATISTA PIMENTA",
    cpf: "00147591600",
    birth: "28/06/1933",
    color: "BRANCO",
    tel: "(31) 999543301 - CELULAR  | (31) 997580008 CELULAR",
    email: "Não encontrado.",
    address: {
      type: "AVENIDA",
      street: "RUA CAMIL CARAM 92 APARTAMENTO 201",
      county: "BELO HORIZONTE",
      number: "92B",
      cep: "30350335",
      district: "SAO BENTO",
      state: "MG",
    },
  },
  {
    id: 3,
    image: "/3.png",
    name: "ANA CAROLINA DE ALBUQUERQUE SILVA LAMIZ",
    mother: "MARIA SELMA LINS DE ALBUQUERQUE",
    dad: "JOSE AUGUSTO RANGEL SILVA",
    cpf: "11916932797",
    birth: "13/02/1987",
    color: "Não encontrado.",
    tel: "(21) 996657346 - CELULAR  | (21) 991714896 CELULAR",
    email: "anacarolina.lamiz@gmail.com",
    address: {
      type: "RUA",
      street: "RUA VEREADOR DUQUE ESTRADA APT 604 BLOCO 3",
      county: "NITEROI",
      number: "92B",
      cep: "30350335",
      district: "SANTA ROSA",
      state: "RJ",
    },
  },
];
