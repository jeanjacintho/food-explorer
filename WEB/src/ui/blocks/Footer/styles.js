import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.dark_400};
    color: ${({theme}) => theme.COLORS.light_100};
    grid-area: footer;
`;

export const FooterComponents = styled.div`
    max-width: 135rem;
    display: flex;
    justify-content: space-between;
    gap: .8rem;
    padding: 2.4rem 12.3rem;

    > span {
        color: ${({theme}) => theme.COLORS.light_700};
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 160%;
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
    }
`;