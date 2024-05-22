import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../../styles/layoutBreakpoints";

export const ProfileContainer = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 80rem;
    align-self: start;
    margin-top: 2rem;
    border-radius: 1rem;
    border: 1px solid ${({theme}) => theme.COLORS.border};
    justify-content: space-evenly;
    padding: 3.2rem;
    background-color: ${({theme}) => theme.COLORS.dark_400};
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
        max-width: ${LAYOUT_BREAKPOINTS.MD};
        width: 100%;
        padding: 2.4rem;
        flex-direction: column;
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

export const FormProfile = styled.div`
    width: 60rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
        max-width: ${LAYOUT_BREAKPOINTS.MD};
        width: 100%;
    }
`;

export const FormAvatar = styled.div`
    width: 40rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    object-fit: cover;

    > label {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 15rem;
        left: 20rem;
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 50%;
        cursor: pointer;
        background-color: ${({theme}) => theme.COLORS.light_700};
        border: 1px solid;
        border-color: ${({theme}) => theme.COLORS.light_400};
    }

    input {
        display: none;
    }

    svg {
        width: 2rem;
        height: 2rem;
        color: ${({theme}) => theme.COLORS.light_100};
    }

    .userData {
        margin-top: 4rem;
        border: 1px solid ${({theme}) => theme.COLORS.light_400};
        width: 80%;
        padding: 2rem;
        border-radius: 1rem;
    }
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
        max-width: ${LAYOUT_BREAKPOINTS.MD};
        width: 100%;
        margin-bottom: 5rem;
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