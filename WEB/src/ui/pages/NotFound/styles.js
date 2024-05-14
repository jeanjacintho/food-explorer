import styled from "styled-components";

export const Container = styled.div`
  min-height: 20rem;
  max-width: fit-content;
  min-width: 20rem;
  padding: 4rem 8rem;
  border: 1px solid ${({theme}) => theme.COLORS.border};
  border-radius: 1rem;
  background-color: ${({theme}) => theme.COLORS.dark_400};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  
  > a {
    color: ${({ theme }) => theme.COLORS.tomato_400};
    margin-top: 24px;
    display: flex;
    align-items: center;
    gap: 1rem;

    &:hover {
      color: ${({ theme }) => theme.COLORS.tomato_300};
    }
  }
`;