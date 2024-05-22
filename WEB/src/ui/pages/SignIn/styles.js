import styled  from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../../styles/layoutBreakpoints";

export const SignInContainer = styled.div`
    height: 100vh;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 3.2rem;
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

export const FormLogin = styled.div`
    width: 47.6rem;
    padding: 6.4rem;
    display: flex;
    flex-direction: column;
    border: 1px solid ${({theme}) => theme.COLORS.border};
    border-radius: 1.6rem;
    gap: 3.2rem;
    text-align: center;
    background-color: ${({theme}) => theme.COLORS.dark_400};

    > h1 {
        color: ${({theme}) => theme.COLORS.light_100};
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;   
    }

    > a {
        color: ${({theme}) => theme.COLORS.light_100};
        font-weight: 400;
        display: flex;
        gap: .5rem;
        align-items: center;
        justify-content: center;

        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;

        &:hover {
            color: ${({theme}) => theme.COLORS.light_400};
        }
    }
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        width: 95%;
        padding: 2.4rem;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;

    > span {
        color: ${({theme}) => theme.COLORS.light_400};
        text-align: start;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 100%;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 1.9rem;

    > img {
        width: 4.94rem;
    }

    > span {
        font-size: 4.2rem;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.light_100};
    }

    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        > img {
            width: 3.4rem;
        }

        > span {
            font-size: 3.4rem;
        }
    }
`;