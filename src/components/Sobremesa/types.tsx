import { Itens } from "../../types/GlobalTypes"

export interface InfosSobremesa {
    imagem: string
    nome: string
    tipo: string
    valor: number
    id: number
    adicionarAoCarrinho: (sobremesa: Itens) => void
    quantidadeDeSobremesas: number
    contadorDeItens: number
    setQuantidadeDeItens: (novaValor: number) => void
    setContadorDeItens: (novoValor: number) => void
    btns: boolean
    alterarBtn: () => void
}
