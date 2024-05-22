import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../../styles/layoutBreakpoints";

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

        @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
            flex-direction: column;
            align-items: start;
            gap: .5rem;
            justify-content: center;

            > img {
                width: 3.4rem;
                height: 3.4rem;
            }
        }
    }
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
        padding: 1.4rem;
    }
`;