import styled from "styled-components";

export const IngredientBoxContainer = styled.div`
    width: 100%;
    height: 4.8rem;
    display: flex;
    align-items: center;
    border-radius: .5rem;
    gap: 1.4rem;
    padding: 1.2rem 1.4rem;
    background-color: ${({theme}) => theme.COLORS.dark_200};
`;

export const ListIngredients = styled.div`
    max-width: 60rem;
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    white-space: nowrap;
`;