import { Itens, Sobremesas } from "../../types/GlobalTypes"

export interface Pedido {
    carrinho: Itens[]
    sobremesas: Sobremesas[]
    pedidoConfirmado: string
    quantidadeDeSobremesas: number[]
    IniciarNovoPedido: () => void
    valorTotal: number
}