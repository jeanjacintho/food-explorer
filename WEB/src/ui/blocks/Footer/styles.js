import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../../styles/layoutBreakpoints";

export const FooterContainer = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.dark_400};
    color: ${({theme}) => theme.COLORS.light_100};
    border-top: 1px solid ${({theme}) => theme.COLORS.border};
    grid-area: footer;
`;

export const FooterComponents = styled.div`
    width: 135rem;
    display: flex;
    margin: 0 auto;
    height: 100%;
    justify-content: space-between;
    gap: .8rem;
    padding: 2.4rem 12.3rem;

    > span {
        color: ${({theme}) => theme.COLORS.light_700};
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 160%;
    }
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
        max-width: ${LAYOUT_BREAKPOINTS.MD};
        width: 100%;
        margin: 0;
        padding: 2.4rem;
        align-items: center;
        flex-direction: column;
    }
`;

export const Logo = styled.div`
    > a {
        text-decoration: none;
        display: flex;
        gap: 1rem;
        color: ${({theme}) => theme.COLORS.light_700};
        align-items: center;
        white-space: nowrap;
        
        img {
            height: 3rem;
            width: 3rem;
        }

        span {
            font-weight: 700;
            font-size: 2.4rem;
        }
        @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
            img {
                height: 2rem;
                width: 2rem;
            }
            span {
                font-size: 2rem;
            }
        }
    }
`;