import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../../styles/layoutBreakpoints";

export const HomeContainer = styled.div`
    margin: 0 auto;
    width: 112rem;
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        max-width: ${LAYOUT_BREAKPOINTS.MD};
        width: 100%;
        padding: 2.4rem;
        margin: 0;
        gap: 3.6rem;
    }
`;

export const Banner = styled.div`
    width: 100%;
    background: ${({theme}) => theme.GRADIENTS.gradient_100};
    display: flex;
    align-items: center;
    height: 20rem;
    margin-top: 6rem;
    border-radius: .8rem;
    border: 1px solid ${({theme}) => theme.COLORS.border};

    > h1 {
        font-size: 4rem;
        font-weight: 500;
        line-height: 140%;
    }

    > p {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 100%;
    }

    > img {
        width: 43.2rem;
        margin-left: -5.4rem;
        margin-top: -12.4rem;
        margin-bottom: -6.8rem;
    }
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
        height: 6rem;
        margin-top: 1rem;
        > div {
            > h1 {
                font-size: 2rem;
            }
            > p {
                font-size: 1.2rem;
            }
        }
        > img {
            width: 15rem;
            margin-bottom: -9.4rem;
            margin-left: -1.8rem;
        }
    }
`;

export const BlockComponent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 100%;
    max-width: ${(props) => props.width}rem;

    > span {
        color: ${({theme}) => theme.COLORS.light_100};
        text-align: start;
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 140%;
    }
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        max-width: ${LAYOUT_BREAKPOINTS.MD};
        
        > span {
            font-size: 1.8rem;
        }
    }
`;