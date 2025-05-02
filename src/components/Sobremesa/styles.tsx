import styled from "styled-components"

export const CardSobremesa = styled.li`
    width: 300px;
        
    @media(max-width: 1325px){
        width: 250px;
    }
`

export const DivSobremesa = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    
    > img:first-child{
        width: 100%;
        border-radius: 10px;
    }
`

export const DivAdd = styled.div`
    position: absolute;
    bottom: -25px;
    width: 180px;
    height: 50px;
`

export const BotaoAdd = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    padding: 0px 10px;
    width: 100%;
    height: 100%;
    gap: 5px;
    background-color: #fff;
    border-radius: 25px;
    border: 2px solid hsl(12, 20%, 44%);
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover{
        color: hsl(14, 86%, 42%);
        border-color: hsl(14, 86%, 42%);
    }
`

export const DivQuantidade = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    padding: 0px 10px;
    height: 100%;
    gap: 5px;
    color: #fff;
    background-color: hsl(14, 86%, 42%);
    border-radius: 25px;
`


export const BotoesQuantidade = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    font-size: 20px;
    border: 1px solid #fff;
    border-radius: 50%;
    background-color: hsl(14, 86%, 42%);
    color: #fff;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover{
        color: hsl(14, 86%, 42%);
        background-color: #fff;
    }
`

export const DivInfos = styled.div`
    margin-top: 35px;

    p:first-child{
        font-weight: 600;
        color: hsl(12, 20%, 44%);
    }

    h2{
        font-size: 20px;
        font-weight: 600;
        color: hsl(14, 65%, 9%);
    }

    p:last-child{
        font-size: 20px;
        font-weight: 600;
        color: hsl(14, 86%, 42%);
    }
`