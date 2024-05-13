import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({theme}) => theme.COLORS.dark_1000};
        color:  ${({theme}) => theme.COLORS.light_100};
        font-family: 'Roboto', sans-serif;

        --webkit-font-smoothing: antialised;
    }

    body, input, button, textarea, select {
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover a:hover {
        filter: brightness(0.9);
    }
`;
