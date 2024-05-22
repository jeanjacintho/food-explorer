import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../../styles/layoutBreakpoints";

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 4.8rem;
    border: 1px solid transparent;
    border-radius: .5rem;
    gap: 1.4rem;
    padding: 1.2rem 1.4rem;
    background-color: ${({theme}) => theme.COLORS.dark_200};
    width: 100%;

    &:focus-within {
      border-color: ${({theme}) => theme.COLORS.light_100};
    }
    
    > input {
        width: 100%;
        height: 4.8rem;
        background: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.light_500};
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 100%;

        &::file-selector-button {
            height: 4.8rem;
            border: none;
            background-color: transparent;
            opacity: 0;
            width: 1px;
            margin-left: -1.6rem;
        }

        &:focus {
            outline: none;
        }
        @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
            font-size: 1.5rem;
        }
    }

    > svg {
        color: ${({theme}) => theme.COLORS.light_400};
    }
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
        max-width: ${LAYOUT_BREAKPOINTS.MD};
        width: 100%;
    }
`;