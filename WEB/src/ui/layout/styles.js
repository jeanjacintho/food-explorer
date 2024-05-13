import styled from "styled-components";

export const LayoutContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 9.6rem auto 7.7rem;
    grid-template-areas: "header" "content" "footer";
    overflow: auto;

    > main {
        grid-area: content;
        display: flex;
        align-self: start;

        margin-top: 2rem;
        margin-bottom: 2rem;
    }
`;