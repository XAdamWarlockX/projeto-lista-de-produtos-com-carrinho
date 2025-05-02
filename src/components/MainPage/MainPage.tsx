import { useState } from 'react';
import sobremesasJson from '../../data/sobremesas.json'
import { Sobremesa } from '../Sobremesa/Sobremesa';
import { Carrinho } from '../Carrinho/Carrinho';
import { PedidoConfirmado } from '../PedidoConfirmado/PedidoConfirmado';
import { useMediaQuery } from 'react-responsive';
import { Main, LocalCarrinho, ContainerSobremeas, Lista } from './styles'
import { Itens, Sobremesas } from "../../types/GlobalTypes"

export const MainPage = () => {

    const [carrinho, setCarrinho] = useState<Itens[]>([])

    const [contadorDeItens, setContadorDeItens] = useState<number>(0)

    const sobremesas: Sobremesas[] = sobremesasJson

    const [quantidadeDeSobremesas, setQuantidadeDeSobremesas] = useState<number[]>(
        sobremesas.map(() => 1)
        // Array(9) [1,1,3,1,1,1,1,1,1]
    )


    // Biblioteca React Reponsive
    // Variavel que armazena um largura e com ela você pode renderizar um elemento quando essa largura for atingida
    const notaParaMobile: boolean = useMediaQuery({ query: '(max-width: 1300px)' })

    // Definindo estado de todos os botões que estarão presentes em cada componente sobremesa
    const [btns, setBtns] = useState<boolean[]>(
        sobremesas.map(() => false)
    )

    const alterarQuantidade = (index: number, novaQuantidade: number) => {
        setQuantidadeDeSobremesas(prev =>
            prev.map((qtd, i) => (i === index ? novaQuantidade : qtd))
        )
    }

    const [pedidoConfirmado, setPedidoConfirmado] = useState<string>("none")

    const confimarPedido = (): void => {
        setPedidoConfirmado("flex")
    }

    const IniciarNovoPedido = (): void => {
        setPedidoConfirmado("none")
        setCarrinho([])
        setBtns(sobremesas.map(() => false))
        setQuantidadeDeSobremesas(sobremesas.map(() => 1))
        setContadorDeItens(0)
    }

    const adicionarAoCarrinho = (sobremesa: Itens): void => {
        setCarrinho([...carrinho, sobremesa])
    }

    const alterarBtn = (index: number): void => {
        const novoEstado: boolean[] = [...btns] // criando um novo array sem alterar o original
        novoEstado[index] = !novoEstado[index]
        setBtns(novoEstado)
    }

    const removerItem = (nomeDoItem: string): void => {
        const novoEstadoCarrinho: Itens[] = carrinho.filter((item) => item.nome !== nomeDoItem)
        setCarrinho(novoEstadoCarrinho)

        // Encontre o index original do item
        const indexOriginal: number = sobremesas.findIndex((item) => item.nome === nomeDoItem)
        if (indexOriginal !== -1) {
            alterarBtn(indexOriginal)

            setQuantidadeDeSobremesas((prev: number[]) =>
                prev.map((qtd: number, i: number) => (i === indexOriginal ? 1 : qtd))
            )
        }

        setContadorDeItens(0)
    }

    const valorTotal: number = carrinho.reduce((total: number, item: Itens) => {
        const indexSobremesa: number = sobremesas.findIndex(sobremesa => sobremesa.nome === item.nome);
        const quantidade: number = quantidadeDeSobremesas[indexSobremesa] || 1;
        return total + (item.valor * quantidade);
    }, 0)

    return (
        <Main>
            {
                notaParaMobile && <LocalCarrinho>
                    <p>Carrinho no final da Lista</p>
                    <img src={`src/assets/images/seta_para_baixo.png`} alt="Seta" />
                </LocalCarrinho>
            }

            <ContainerSobremeas>
                <h1>Sobremesas</h1>

                <Lista>
                    {sobremesas.map((sobremesa, index) => {
                        return (
                            <Sobremesa
                                key={index}
                                imagem={sobremesa.imagem}
                                nome={sobremesa.nome}
                                tipo={sobremesa.tipo}
                                valor={sobremesa.valor}
                                id={sobremesa.id}
                                adicionarAoCarrinho={adicionarAoCarrinho}
                                quantidadeDeSobremesas={quantidadeDeSobremesas[index]}
                                setQuantidadeDeItens={(novaQtd) => alterarQuantidade(index, novaQtd)}
                                contadorDeItens={contadorDeItens}
                                setContadorDeItens={setContadorDeItens}
                                btns={btns[index]}
                                alterarBtn={() => alterarBtn(index)}
                            />
                        )
                    })}
                </Lista>
            </ContainerSobremeas>

            <Carrinho
                carrinho={carrinho}
                sobremesas={sobremesas}
                removerItem={removerItem}
                contadorDeItens={contadorDeItens}
                quantidadeDeSobremesas={quantidadeDeSobremesas}
                confimarPedido={confimarPedido}
                valorTotal={valorTotal}
            />

            <PedidoConfirmado
                carrinho={carrinho}
                sobremesas={sobremesas}
                pedidoConfirmado={pedidoConfirmado}
                quantidadeDeSobremesas={quantidadeDeSobremesas}
                IniciarNovoPedido={IniciarNovoPedido}
                valorTotal={valorTotal}
            />
        </Main>
    )
}
