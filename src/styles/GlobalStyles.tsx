import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
    }

    body{
        font-family: "Red Hat Text", sans-serif;
        background-color: hsl(13, 31%, 94%);
    }

    li{
        list-style: none;
    }

    button{
        border-style: solid;
    }
`

export const Infos = styled.div`
    display: flex;
    gap: 10px; 
    font-size: 18px;
    padding-top: 10px;

    p:first-child{
        font-weight: 600;
        color: hsl(14, 86%, 42%);
    }

    p:nth-child(2){
        color: hsl(12, 20%, 44%);
    }

    p:last-child{
        font-weight: 600;
        color: hsl(12, 20%, 44%);
    }
`