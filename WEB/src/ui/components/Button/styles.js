import { styled, css } from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../../styles/layoutBreakpoints";

export const ButtonContainer = styled.button`
    height: 4.8rem;
    border-radius: .5rem;
    display: flex;
    gap: .8rem;
    align-items: center;
    justify-content: center;
    
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

    ${({variant}) => {
        switch(variant) {
            case "outline":
                return css`
                    border: 1px solid ${({theme}) => theme.COLORS.light_400};
                    color: ${({theme}) => theme.COLORS.light_400};
                    background: none;
                    padding: 1.2rem 3.2rem;

                    &:disabled {
                        background-color: ${({theme}) => theme.COLORS.light_600};
                        pointer-events: none;
                    }

                    &:not(:disabled):hover {
                        color: ${({theme}) => theme.COLORS.light_100};
                        border-color: ${({theme}) => theme.COLORS.light_100};
                    }
                `;
            case "icon":
                return css`
                    background-color: ${({theme}) => theme.COLORS.tomato_400};
                    color: ${({theme}) => theme.COLORS.light_100};
                    padding: 2rem;
                    border: none;

                    &:disabled {
                        background-color: ${({theme}) => theme.COLORS.tomato_100};
                        pointer-events: none;
                    }

                    &:not(:disabled):hover {
                        background-color: ${({theme}) => theme.COLORS.tomato_300};
                    }
                    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
                        width: 4.8rem;
                        padding: 0rem;

                        > span {
                            display: none;
                        }
                    }
                `;
            default: 
                return css`
                    background-color: ${({theme}) => theme.COLORS.tomato_400};
                    border: none;
                    color: ${({theme}) => theme.COLORS.light_100};
                    padding: 1.2rem 3.2rem;

                    &:disabled {
                        background-color: ${({theme}) => theme.COLORS.tomato_100};
                        pointer-events: none;
                    }

                    &:not(:disabled):hover {
                        background-color: ${({theme}) => theme.COLORS.tomato_300};
                    }
                `;
        }
    }}
`;