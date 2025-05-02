import styled from "styled-components"

export const ContainerCarrinhoVazio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 150px;

        @media(max-width: 1325px){
            width: 120px;
        }
    }

    p{
        font-size: 16px;
        font-weight: 600;
        color: hsl(12, 20%, 44%);
    }
`