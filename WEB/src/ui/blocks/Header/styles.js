import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../../styles/layoutBreakpoints";

export const HeaderContainer = styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({theme}) => theme.COLORS.dark_400};
    border-bottom: 1px solid ${({theme}) => theme.COLORS.border};
    color: ${({theme}) => theme.COLORS.light_100};
    grid-area: header;
    z-index: 999;
`;

export const HeaderComponents = styled.div`
    max-width: 135rem;
    display: flex;
    gap: 3.2rem;
    white-space: nowrap;
    padding: 2.4rem 12.3rem;
    align-items: center;
    margin: 0 auto;

    > .menuSidebar {
        background: none;
        border: 1px solid ${({theme}) => theme.COLORS.light_400};
        color: ${({theme}) => theme.COLORS.light_400};
        padding: 1rem;
        border-radius: .8rem;
        height: 4.8rem;
        width: 4.8rem;
        display: flex;
        align-items: center;
    }
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
        max-width: ${LAYOUT_BREAKPOINTS.MD};
        margin: 0;
        padding: 2.4rem;
        justify-content: space-between;
    }
`;

export const Logo = styled.div`
    > a {
        text-decoration: none;
        display: flex;
        gap: 1rem;
        color: ${({theme}) => theme.COLORS.light_100};
        align-items: center;
        
        img {
            height: 3rem;
            width: 3rem;
        }

        span {
            font-weight: 700;
            font-size: 2.4rem;
        }
    }
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
        a > {
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

export const SettingsButton = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
`;

export const MenuSidebar = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: ${({theme}) => theme.COLORS.dark_500};
    top: 0;
    left: 0;
    z-index: 9999;
    padding: 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    > div {
        display: flex;
        flex-direction: column;

        > span {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 2.4rem 0rem;
            &:not(:last-child) {
                border-bottom: 1px solid ${({theme}) => theme.COLORS.border};
            }
        }

        > a {
            > span {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            padding: 2.4rem 0rem;
            text-decoration: none;
            color: ${({theme}) => theme.COLORS.light_100};
            &:not(:last-child) {
                border-bottom: 1px solid ${({theme}) => theme.COLORS.border};
            }
        }
    }
`;