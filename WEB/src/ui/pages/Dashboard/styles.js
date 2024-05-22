import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../../styles/layoutBreakpoints";

export const DashboardContainer = styled.div`
    margin: 0 auto;
    width: 112rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    > div {
        display: flex;
        gap: 1.4rem;
    }

    .tableDetails {
            border-collapse: collapse;
            max-height: fit-content;
            width: 100%;
            
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

                &:hover {
                    background-color: ${({theme}) => theme.COLORS.dark_200};;
                }
                
                td {
                    padding: 1.4rem;
                    &:not(:last-child) {
                        border-right: 1px solid ${({theme}) => theme.COLORS.border};
                    }

                    &.cliente {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                    }

                    .detalhamento {
                        display: flex;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
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
        @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
            max-width: ${LAYOUT_BREAKPOINTS.MD};
            width: 100%;
            padding: 2.4rem;
        }
`;

export const HistoryOrders = styled.div`
    border: 1px solid ${({theme}) => theme.COLORS.border};
    background-color: ${({theme}) => theme.COLORS.dark_500};
    overflow: hidden;
    border-radius: 0.8rem;
    width: 100%;
`;

export const Order = styled.div`
    border: 1px solid ${({theme}) => theme.COLORS.border};
    background-color: ${({theme}) => theme.COLORS.dark_500};
    padding: 2.4rem;
    border-radius: 0.8rem 0rem 0rem 0.8rem;
    width: 100%;
    height: 100%;
    max-width: 30%;
    position: absolute;
    right: 0;
    top: 9.5rem;
    z-index: 99;
    flex-direction: column;
    gap: 2.4rem;
    
    > div {
        &:not(:first-child){
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
        }
    }
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
        max-width: ${LAYOUT_BREAKPOINTS.MD};
        width: 100%;
    }
`;

export const GroupColumnComponent = styled.div`
    width: 100%;
    display: flex;
    gap: 3.2rem;
    align-items: center;

    &:first-child {
        padding-bottom: 1.2rem;
        border-bottom: 1px solid ${({theme}) => theme.COLORS.border};
    }

    > span {
        align-self: center;
        color: ${({theme}) => theme.COLORS.light_500};
        font-size: 1.4rem;
    }
`;