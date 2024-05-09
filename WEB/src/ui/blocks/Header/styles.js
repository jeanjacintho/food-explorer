import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({theme}) => theme.COLORS.dark_400};
    color: ${({theme}) => theme.COLORS.light_100};
    grid-area: header;
`;

export const HeaderComponents = styled.div`
    max-width: 135rem;
    display: flex;
    gap: 3.2rem;
    white-space: nowrap;
    padding: 2.4rem 12.3rem;
    align-items: center;
    margin: 0 auto;
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
`;

export const SettingsButton = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
`;