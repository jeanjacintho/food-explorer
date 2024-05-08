import styled from "styled-components";

export const ButtonContainer = styled.button`
    height: 4.8rem;
    border: none;
    border-radius: .5rem;
    display: flex;
    gap: .8rem;
    padding: 1.2rem 3.2rem;
    align-items: center;
    justify-content: center;
    color: ${({theme}) => theme.COLORS.light_100};
    background-color: ${({theme}) => theme.COLORS.tomato_300};

    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

    &:hover {
        background-color: ${({theme}) => theme.COLORS.tomato_200};
    }
`;