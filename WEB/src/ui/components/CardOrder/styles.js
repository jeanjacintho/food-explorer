import styled from "styled-components";

export const CardOrderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2.4rem;
    width: 100%;

    &:not(:last-child) {
        border-bottom: 1px solid ${({theme}) => theme.COLORS.border};
    }

    > div {
        display: flex;
        align-items: center;
        gap: 1.6rem;

        > img {
            width: 4.8rem;
            height: 4.8rem;
        }
    }
`;