import { CarrinhoVazio } from '../CarrinhoVazio/CarrinhoVazio'
import { ContainerCarrinho, Item, RomoverItem, DivValorPedido, NotaEcologica, BotaoConfimar } from './styles'
import { Infos } from '../../styles/GlobalStyles'
import { TypesCarrinho } from './types'

export const Carrinho = ({ carrinho, sobremesas, removerItem, contadorDeItens, quantidadeDeSobremesas, confimarPedido, valorTotal }: TypesCarrinho) => {

    const rolarAteOInicio = (): void => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Faz a rolagem ser suave
        });
    }
    return (
        <>
            <ContainerCarrinho>
                <h2>Seu Carrinho({carrinho.length + contadorDeItens})</h2>
                {carrinho.length === 0 ? <CarrinhoVazio /> :
                    <ul>
                        {carrinho.map((item, index: number) => {
                            const indexSobremesa = sobremesas.findIndex(sobremesa => sobremesa.nome === item.nome)
                            const quantidade = quantidadeDeSobremesas[indexSobremesa] || 1
                            const precoTotal = item.valor * quantidade

                            return (
                                <Item key={index}>
                                    <div>
                                        <h2>{item.nome}</h2>
                                        
                                        <Infos>
                                            <p>{quantidade}x</p>
                                            <p>@ ${item.valor.toFixed(2)}</p>
                                            <p>${precoTotal.toFixed(2)}</p>
                                        </Infos>
                                    </div>
                                    <RomoverItem onClick={() => {
                                        removerItem(item.nome)
                                    }}>
                                        <img src={`/images/icon-remove-item.svg`} alt="x" />
                                    </RomoverItem>
                                </Item>
                            )
                        })}
                        <DivValorPedido>
                            <p>Valor total do pedido</p>
                            <p>${valorTotal.toFixed(2)}</p>
                        </DivValorPedido>
                        <NotaEcologica>
                            <img src={`/images/icon-carbon-neutral.svg`} alt="Icone carbono neutro" />
                            <p>Esta é uma entrega <strong>neutra em carbono</strong></p>
                        </NotaEcologica>
                        <BotaoConfimar onClick={() => {
                            confimarPedido()
                            rolarAteOInicio()
                            }}>
                            Confirmar pedido
                        </BotaoConfimar>
                    </ul>
                }
            </ContainerCarrinho>
        </>
    )
}