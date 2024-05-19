import styled from "styled-components";

export const FavoritesConteiner = styled.div`
    margin: 0 auto;
    width: 112rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`;

export const FavoritesCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.4rem;
    width: 100%;
`;