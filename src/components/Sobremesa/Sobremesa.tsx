import { CardSobremesa, DivSobremesa, DivAdd, BotaoAdd, DivQuantidade, BotoesQuantidade, DivInfos } from './styles'
import { InfosSobremesa } from './types'

export const Sobremesa = (({ imagem, nome, tipo, valor, adicionarAoCarrinho, quantidadeDeSobremesas, setQuantidadeDeItens, contadorDeItens, setContadorDeItens, btns, alterarBtn }: InfosSobremesa) => {
    // const [quantidadeDeItens, setQuantidadeDeItens] = useState<number>(1)

    const maisUm = (): void => {
        setContadorDeItens(contadorDeItens + 1)
        setQuantidadeDeItens(quantidadeDeSobremesas + 1)
    }

    const menosUm = (): number | void=> {
        if (quantidadeDeSobremesas <= 1) {
            return 1
        }
        setContadorDeItens(contadorDeItens - 1)
        setQuantidadeDeItens(quantidadeDeSobremesas - 1)
    }

    const pegarInfosSobremesa = (): void => {
        adicionarAoCarrinho({ imagem, nome, valor })
    }

    return (
        <CardSobremesa>
            <DivSobremesa >
                <img src={`src/assets/images/${imagem}`} alt={nome} />
                <DivAdd>
                    {btns === false ?
                        <BotaoAdd onClick={() => {
                            pegarInfosSobremesa()
                            alterarBtn()
                        }}>
                            <img src={`src/assets/images/icon-add-to-cart.svg`} alt="+" />
                            <p>Add ao Carrinho</p>
                        </BotaoAdd>
                        :
                        <DivQuantidade>
                            <BotoesQuantidade onClick={menosUm}>
                                <p style={{ paddingBottom: "2px" }}>-</p>
                            </BotoesQuantidade>
                            <span>{quantidadeDeSobremesas < 1 ? 1 : quantidadeDeSobremesas}</span>
                            <BotoesQuantidade onClick={maisUm}>
                                <p>+</p>
                            </BotoesQuantidade>
                        </DivQuantidade>
                    }
                </DivAdd>
            </DivSobremesa>

            <DivInfos>
                <p>{tipo}</p>
                <h2>{nome}</h2>
                <p>$ {valor.toFixed(2)}</p>
            </DivInfos>
        </CardSobremesa>
    )
})
