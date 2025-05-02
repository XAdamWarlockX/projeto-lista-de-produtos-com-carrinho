import styled from 'styled-components'

export const ContainerCarrinho = styled.section`
    background-color: hsl(20, 50%, 98%);
    min-width: 350px;
    min-height: 240px;
    padding: 20px;
    border-radius: 10px;

    // div > h2:first-child
    > h2:first-child{
        font-size: 30px;
        color: hsl(14, 86%, 42%);
    }

    ul{
        display: flex;
        flex-direction: column;
    }

    @media(max-width: 900px){
        min-width: 300px;
    }
`

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
    border-bottom: 1px solid hsl(14, 25%, 72%);

    h2{
        font-size: 18px;
        font-weight: 600;
    }
`

export const RomoverItem = styled.button`
    min-width: 20px;
    height: 20px;
    border-radius: 50%;
    border-color: hsl(12, 20%, 44%);
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover{
        background-color: hsl(14, 86%, 32%);
    }
`

export const DivValorPedido = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
    font-size: 18px;

    p:last-child{
        font-size: 25px;
        font-weight: 700;
    }
`

export const NotaEcologica = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 50px;
    background-color: hsl(13, 31%, 94%);
    margin-bottom: 20px;
`

export const BotaoConfimar = styled.button`
    height: 55px;
    border-radius: 30px;
    border: none;
    background-color: hsl(14, 86%, 42%);
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover{
        background-color: hsl(14, 86%, 32%);
    }
`