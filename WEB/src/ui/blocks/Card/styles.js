import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../../styles/layoutBreakpoints";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    border: 1px solid ${({theme}) => theme.COLORS.border};
    border-radius: .8rem;
    padding: 2.4rem;
    background-color: ${({theme}) => theme.COLORS.dark_500};
    align-items: center;

    > button {
        position: absolute;
        right: 1.6rem;
        top: 1.6rem;
        border: none;
        background: none;
        color: ${({theme}) => theme.COLORS.light_100};

        > svg {
            width: 2.4rem;
            height: 2.4rem;
        }
    }

    > img {
        width: 17.6rem;
        height: 17.6rem;
    }

    > a > h1 {
        font-weight: bold;
        font-size: 2.4rem;
        line-height: 140%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.light_100};
    }

    > p {
        font-size: 1.4rem;
        line-height: 160%;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical; 
    }

    > span {
        font-size: 3.2rem;
        line-height: 160%;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.cake_100};
    }
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
        padding: 1.6rem;
        > img {
            width: 12rem;
            height: 12rem;
        }

        > a > h1 {
            font-size: 1.8rem;
        }

        > p {
            font-size: 1.2rem;
        }

        > span {
            font-size: 2.2rem;
        }
    }
`;

export const GroupColumnComponent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 3.2rem;
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
        flex-direction: column;
        align-items: center;
    }
`;