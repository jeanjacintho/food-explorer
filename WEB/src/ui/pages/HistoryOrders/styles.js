import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../../styles/layoutBreakpoints";

export const HistoryOrdersContainer = styled.div`
    margin: 0 auto;
    width: 112rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
        max-width: ${LAYOUT_BREAKPOINTS.MD};
        width: 100%;
        padding: 2.4rem;
    }

    .historyOrders {
        display: flex;
        height: 100%;
        flex-direction: column;
        gap: 2.4rem;
        background-color: ${({theme}) => theme.COLORS.dark_500};
        border: 1px solid ${({theme}) => theme.COLORS.border};
        border-radius: .8rem;
        
        > table {
            border-collapse: collapse;

            thead th{
                padding: 1.4rem;
                border-bottom: 1px solid ${({theme}) => theme.COLORS.border};
                &:not(:last-child) {
                    border-right: 1px solid ${({theme}) => theme.COLORS.border};
                }
            }

            tbody tr {
                color: ${({theme}) => theme.COLORS.light_500};
                &:not(:last-child) {
                    border-bottom: 1px solid ${({theme}) => theme.COLORS.border};
                }
                td {
                    padding: 1.4rem;
                    &:not(:last-child) {
                        border-right: 1px solid ${({theme}) => theme.COLORS.border};
                    }

                    > div {
                        display: flex;
                        gap: 1rem;
                        align-items: center;

                        span {
                            
                            height: 1rem;
                            width: 1rem;
                            border-radius: 50%;

                            &.Cancelado {
                                background-color: ${({theme}) => theme.COLORS.tomato_300};
                            }
                            &.Pendente {
                                background-color: ${({theme}) => theme.COLORS.carrot_100};
                            }
                            &.Entregue {
                                background-color: ${({theme}) => theme.COLORS.mint_100};
                            }
                        }
                    }
                    
                }
            }
        }
    }

    
`;