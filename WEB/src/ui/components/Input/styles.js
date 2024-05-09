import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 4.8rem;
    border: 1px solid transparent;
    border-radius: .5rem;
    gap: 1.4rem;
    padding: 1.2rem 1.4rem;
    background-color: ${({theme}) => theme.COLORS.dark_200};
    width: 100%;

    &:focus-within {
      border-color: ${({theme}) => theme.COLORS.light_100};
    }
    
    > input {
        width: 100%;
        height: 4.8rem;
        background: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.light_500};
        font-size: 1.6rem;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 100%;

        &:focus {
            outline: none;
        }
    }

    > svg {
        color: ${({theme}) => theme.COLORS.light_400};
    }
`;