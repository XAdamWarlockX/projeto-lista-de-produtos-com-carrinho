import styled from "styled-components"

// Para usar a prop pedidoConfirmado você precisa passa a prop para o elemento Sobreposição
export const Sobreposição = styled.div<{ pedidoConfirmado: string }>`
    display: ${(prop) => prop.pedidoConfirmado};
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    top: 0;
    padding-top: 120px;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3); 
`

export const ContainerPedido = styled.section`
    width: 500px;
    padding: 30px;
    border-radius: 10px;
    background-color: hsl(20, 50%, 98%);

    > p:nth-child(2){
        color: hsl(12, 20%, 44%);
        margin-bottom: 20px;
    }

    > div:nth-child(3){
        padding: 0px 20px;
        background-color: hsl(13, 31%, 94%);
        border-radius: 10px;
        margin-bottom: 20px;
    }
`

export const DivPedidoConfirmado = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    h1{
        font-size: 35px;
    }
`

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
    border-bottom: 1px solid hsl(14, 25%, 72%);

    img{
        width: 60px;
        border-radius: 5px;
    }

    h2{
        font-size: 18px;
        font-weight: 600;
    }

    > div:first-child{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }

    p:last-child{
        font-weight: 600;
    }
`

export const BotaoNovoPedido = styled.button`
    background-color: hsl(14, 86%, 42%);
    width: 100%;
    height: 55px;
    border-radius: 30px;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover{
        background-color: hsl(14, 86%, 32%);
    }
`

export const ValorPedido = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
    font-size: 18px;

    p:last-child{
        font-size: 25px;
        font-weight: 700;
    }
`