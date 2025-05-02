import { Sobreposição, ContainerPedido, DivPedidoConfirmado, Item, BotaoNovoPedido, ValorPedido } from './styles'
import { Infos } from '../../styles/GlobalStyles'
import { Pedido } from './types'

export const PedidoConfirmado = ({ carrinho, sobremesas, pedidoConfirmado, quantidadeDeSobremesas, IniciarNovoPedido, valorTotal }: Pedido) => {

    return (
        <Sobreposição pedidoConfirmado={pedidoConfirmado}>
            <ContainerPedido>
                <DivPedidoConfirmado>
                    <h1>Pedido Confirmado</h1>
                    <img src={`src/assets/images/icon-order-confirmed.svg`} alt="Icone Confirmado" />
                </DivPedidoConfirmado>

                <p>Esperamos que você goste da sua comida!</p>

                <div>
                    <ul>
                        {carrinho.map((item, index: number) => {
                            const indexSobremesa = sobremesas.findIndex(sobremesa => sobremesa.nome === item.nome)
                            const quantidade = quantidadeDeSobremesas[indexSobremesa] || 1
                            const precoTotal = item.valor * quantidade

                            return (
                                <Item key={index}>
                                    <div>
                                        <img src={`src/assets/images/${item.imagem}`} alt="Sobremesa" />
                                        <div>
                                            <h2>{item.nome}</h2>
                                            <Infos>
                                                <p>{quantidade}x</p>
                                                <p>@ ${item.valor.toFixed(2)}</p>
                                            </Infos>
                                        </div>
                                    </div>
                                    <p>${precoTotal.toFixed(2)}</p>
                                </Item>
                            )
                        })}
                    </ul>

                    <ValorPedido>
                        <p>Valor total do pedido</p>
                        <p>${valorTotal.toFixed(2)}</p>
                    </ValorPedido>
                </div>

                <BotaoNovoPedido onClick={IniciarNovoPedido}>
                    Iniciar novo pedido
                </BotaoNovoPedido>
            </ContainerPedido>
        </Sobreposição>
    )
}
