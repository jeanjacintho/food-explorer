import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownMenuTrigger = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

DropdownMenuTrigger.displayName = 'DropdownMenuTrigger';

export const DropdownMenuContent = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: ${({theme}) => theme.COLORS.dark_400};
  border: 1px solid;
  border-color: ${({theme}) => theme.COLORS.light_400};
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

DropdownMenuContent.displayName = 'DropdownMenuContent';

export const DropdownMenuItem = styled.button`
  display: block;
  width: 100%;
  padding: 1rem 3rem;
  text-align: left;
  align-items: center;
  cursor: pointer;
  display: flex;
  background-color: transparent;
  border: none;
  gap: 1rem;

  > svg {
    color: ${({theme}) => theme.COLORS.light_100}
  }

  > span {
    color: ${({theme}) => theme.COLORS.light_100}
  }

  &:hover {
    background-color:${({theme}) => theme.COLORS.dark_1000};
    filter: none;
  }
`;

export const DropdownMenuLabel = styled.div`
  padding: 1rem 3rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const DropdownMenuSeparator = styled.div`
  margin: 0.5rem 0;
  height: 1px;
  background-color: ${({theme}) => theme.COLORS.light_400};
`;