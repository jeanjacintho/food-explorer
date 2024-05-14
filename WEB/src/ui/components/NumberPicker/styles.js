import styled from "styled-components";

export const NumberPickerContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.4rem;
    color: ${({theme}) => theme.COLORS.light_300};

    > button {
        border: none;
        background: none;
        color: ${({theme}) => theme.COLORS.light_300};

        &:hover{
            color: ${({theme}) => theme.COLORS.light_100};
        }

        svg {
            font-weight: 700;
            font-size: 2rem;
            line-height: 160%;
        }
    }
`;