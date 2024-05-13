import { styled, css } from "styled-components";

export const ButtonContainer = styled.button`
    height: 4.8rem;
    border-radius: .5rem;
    display: flex;
    gap: .8rem;
    padding: 1.2rem 3.2rem;
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
                    background-color: none;
                    border: none;
                    color: ${({theme}) => theme.COLORS.light_400};

                    &:disabled {
                        color: ${({theme}) => theme.COLORS.light_600};
                        pointer-events: none;
                    }

                    &:not(:disabled):hover {
                        color: ${({theme}) => theme.COLORS.light_100};
                        border-color: ${({theme}) => theme.COLORS.light_100};
                    }
                `;
            default: 
                return css`
                    background-color: ${({theme}) => theme.COLORS.tomato_400};
                    border: none;
                    color: ${({theme}) => theme.COLORS.light_100};


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