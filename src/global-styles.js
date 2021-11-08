import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,*::befor,::after{
        box-sizing: border-box;
    }
    html, body {
        background-color: black;
        margin: 0;
        color: white; 
    }
`;