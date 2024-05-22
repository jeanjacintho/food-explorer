import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../../styles/layoutBreakpoints";

export const Container = styled.div`
  min-height: 20rem;
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
  opacity: 0;
    animation: fadeIn .5s ease-in-out forwards;
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
  
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
  @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
    padding: 2rem 4rem;
    width: 95%;
    > h1 {
      font-size: 2rem;
    }
  }
`;