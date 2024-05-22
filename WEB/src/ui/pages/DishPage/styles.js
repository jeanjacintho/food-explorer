import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../../styles/layoutBreakpoints";

export const DishPageContainer = styled.div`
    margin: 0 auto;
    width: 112rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
        max-width: ${LAYOUT_BREAKPOINTS.MD};
        width: 100%;
        padding: 2.4rem;
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

export const FormDish = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 3.2rem;

    > img {
        width: 100%;
        max-width: 26.4rem;
        max-height: 26.4rem;
        @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
            align-self: center;
        }
    }

    > main {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        > h1 {
            font-size: 4rem;
            line-height: 140%;
            font-weight: 500;
        }

        > p {
            font-size: 2.4rem;
            line-height: 140%;
            font-weight: 400;
        }

        > div {
            display: flex;
            gap: 3.3rem;

            @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
                > button {
                    width: 100%;
                }
            }
        }

        > section {
            display: flex;
            gap: 1.2rem;

            > div {
                background-color: ${({theme}) => theme.COLORS.dark_100};
                padding: 0;

                > input {
                    height: 2.4rem;
                    font-size: 1.4rem;
                }
                > button {
                    display: none;
                }
            }
        }
    }
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
        flex-direction: column;
    }
`;