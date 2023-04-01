import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

 
:root {
       --amarelo: #ffc72c;
       --laranja_claro:#fec208;
       --vermelho:#da291c;
       --vermelho_claro:#ff2d08;
       --bege:#f8ecdc;
    }
   

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Bree Serif', serif;
     
    }

    input {
        border-radius: 6px;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }
`;