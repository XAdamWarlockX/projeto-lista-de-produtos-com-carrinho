import styled, { keyframes } from "styled-components"

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: flex-start; /* << isso impede que o menor item cresça com o maior */
    padding: 100px;
    gap: 50px;
    position: relative;

    @media(max-width: 1300px){
        flex-wrap: wrap;
    }

    @media(max-width: 900px){
        padding: 100px 50px;
    }

    @media(max-width: 500px){
        flex-wrap: wrap;
        padding: 80px;
    }
`

export const Animacao = keyframes`
    0%{
        transform: translateY(15px);
    } 100%{
        transform: translateY(5px);
    }
`

export const LocalCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    position: absolute;
    right: 30px;
    top: 30px;

    p{ 
        padding: 5px 10px;
        text-align: center;
        background-color: hsl(20, 50%, 98%);
        border-radius: 10px;
    }

    img{
        width: 20px;
        animation: ${Animacao} infinite alternate 1s ease-in-out;
    }

    @media(max-width: 500px){
        right: 10px;
        top: 10px;
    }
`

export const ContainerSobremeas = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    h1{
        font-size: 40px;
        color: hsl(14, 65%, 9%);
    }
        
    @media(max-width: 900px){
        justify-content: center;

        h1{
            display: flex;
            justify-content: center;
        }
    }
`

export const Lista = styled.ul`
    display: flex;
    
    flex-wrap: wrap;
    width: 940px;
    gap: 20px;

    @media(max-width: 1325px){
        width: 790px;
    }

    @media(max-width: 900px){
        justify-content: center;
        width: auto;
    }

    @media(max-width: 500px){
        justify-content: center;
        width: auto;
    }
`