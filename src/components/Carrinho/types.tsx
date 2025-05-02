import { Itens, Sobremesas } from "../../types/GlobalTypes"

export interface TypesCarrinho {
    carrinho: Itens[]
    sobremesas: Sobremesas[]
    removerItem: (nomeDoItem: string) => void
    contadorDeItens: number
    quantidadeDeSobremesas: number[]
    confimarPedido: () => void
    valorTotal: number
}