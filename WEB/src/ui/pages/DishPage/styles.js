import styled from "styled-components";

export const DishPageContainer = styled.div`
    margin: 0 auto;
    width: 112rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`;

export const FormDish = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 3.2rem;

    > img {
        width: 100%;
        max-width: 26.4rem;
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
`;