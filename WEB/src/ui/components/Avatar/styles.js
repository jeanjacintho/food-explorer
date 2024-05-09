import styled from "styled-components";

export const AvatarWrapper = styled.div`
    height: ${(props) => props.size}rem;
    width: ${(props) => props.size}rem;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    color: ${({theme}) => theme.COLORS.light_100};
    background-color: ${({theme}) => theme.COLORS.light_500};

    > span {
        font-size: calc(${(props) => props.size / 2}rem);
    }

    > img {
        height: ${(props) => props.size}rem;
        width: ${(props) => props.size}rem;
    }   
`;