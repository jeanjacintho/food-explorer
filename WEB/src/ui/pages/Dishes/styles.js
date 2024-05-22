import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../../styles/layoutBreakpoints";

export const DishesContainer = styled.div`
    margin: 0 auto;
    width: 112rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        padding: 2.4rem;
        max-width: ${LAYOUT_BREAKPOINTS.MD};
        width: 100%;
    }
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
`;

export const FormDish = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

`;

export const BlockComponent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 100%;
    max-width: ${(props) => props.width}rem;

    > span {
        color: ${({theme}) => theme.COLORS.light_400};
        text-align: start;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 100%;
    }

    .boxIngredients {
        min-height: 4.8rem;
        width: 100%;
        display: flex;
        align-items: center;
        border-radius: .5rem;
        gap: 1.4rem;
        padding: .7rem 1.4rem;
        background-color: ${({theme}) => theme.COLORS.dark_200};
        flex-wrap: wrap;
    }
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        max-width: ${LAYOUT_BREAKPOINTS.MD};
        width: 100%;
    }
`;

export const GroupColumnComponent = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    gap: 3.2rem;

    > span {
        align-self: center;
        color: ${({theme}) => theme.COLORS.light_500};
        font-size: 1.4rem;
    }
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
        max-width: ${LAYOUT_BREAKPOINTS.MD};
        width: 100%;
        flex-direction: column;
    }
`;

export const SelectContainer = styled.div`
    width: 100%;
    height: 4.8rem;
    background-color: ${({theme}) => theme.COLORS.dark_200};
    border: 1px solid transparent;
    border-radius: .5rem;
    display: flex;
    align-items: center;
    padding-right: 1.4rem;

    &:focus-within {
      border-color: ${({theme}) => theme.COLORS.light_100};
    }

    > select {
        height: 4.8rem;
        width: 100%;
        padding: 1.2rem 1.4rem;
        border: none;
        background-color: transparent;
        color: ${({theme}) => theme.COLORS.light_500};
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 100%;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;

        &:focus {
            outline: none;
        }
    }

    > svg {
        color: ${({theme}) => theme.COLORS.light_400};
    }
`;