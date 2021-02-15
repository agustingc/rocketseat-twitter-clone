import { createGlobalStyle } from 'styled-components';

/* Returns a StyledComponent that does not accept children. Place it at the top of your React tree and the global styles will be injected when the component is "rendered".*/
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: var(--white);
    }

    html, body, #root {
        max-height: 100vh; 
        max-width: 100vw;

        height: 100%;
        width: 100%;     
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: -apple-system, system-ui, sans-serif; 
    }

    html {
        background: var(--primary);
    }

    :root{
        /* Set variables */
        --primary: #000;
        --secondary: #15181C;
        --search: #202327;
        --white:#D9D9D9;
        --gray:#7A7A7A;
        --outline: #2F3336;
        --retweet: #00C06B;
        --like: #E8265E;
        --twitter: #33A1F2;
        --twitter-dark-hover: #011017;
        --teitter-light-hover: #2C8ED6;
    }
`;
