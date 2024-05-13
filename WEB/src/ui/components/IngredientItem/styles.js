import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.light_500};
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.light_500}` : "none"};
  border-radius: 0.5rem;
  padding: 0 1rem;
  width: 14rem;
  
  > button {
    border: none;
    background: none;
    display: flex;
    align-items: center;
    color: ${({ theme, isNew }) => isNew ? theme.COLORS.light_500 : theme.COLORS.light_100};
  }
  
  > input {
    height: 3.2rem;
    width: 100%;
    border: none;
    outline: none;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
    
    color: ${({ theme, isNew }) => isNew ? theme.COLORS.light_500 : theme.COLORS.light_100};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.light_500};
    }
  }
`;