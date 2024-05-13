import styled from "styled-components";

export const TextAreaComponent = styled.div`
    width: 100%;
    height: 17.2rem;
    padding: 1.4rem;
    display: flex;
    border: 1px solid transparent;
    gap: 1.4rem;
    background-color: ${({theme}) => theme.COLORS.dark_200};
    border-radius: .8rem;

    &:focus-within {
      border-color: ${({theme}) => theme.COLORS.light_100};
    }

    > textarea {
        width: 100%;
        height: 100%;
        background-color: transparent;
        color: ${({theme}) => theme.COLORS.light_500};
        border: none;
        font-size: 1.6rem;
        line-height: 160%;
        resize: none;

        &:focus {
            outline: none;
        }
    }
`;