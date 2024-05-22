import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../../styles/layoutBreakpoints";

export const FavoritesConteiner = styled.div`
    margin: 0 auto;
    width: 112rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    opacity: 0;
    animation: fadeIn .5s ease-in-out forwards;
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
        padding: 2.4rem;
        max-width: calc(${LAYOUT_BREAKPOINTS.MD} - 74px);
        width: 100%;
    }
`;

export const FavoritesCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.4rem;
    width: 100%;
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
        grid-template-columns: repeat(1, 1fr);
    }
`;