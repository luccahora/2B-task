import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

export default createGlobalStyle`
    .App {
        padding: 0.5rem calc((100vw - 1000px) / 2);
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        
    }
    body {
        -webkit-font-smoothing: antialiased;
    }
    body, input, button {
        font: 16px Robot, sans-serif;
    }
    
    button {
        
        cursor: pointer;
    }

    
`;
