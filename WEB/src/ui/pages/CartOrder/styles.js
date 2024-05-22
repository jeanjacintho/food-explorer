import styled from "styled-components"
import { LAYOUT_BREAKPOINTS } from "../../../styles/layoutBreakpoints";

export const CartContainer = styled.div`
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
`;

export const TableCart = styled.div`
    display: flex;
    gap: 2.4rem;
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
        flex-direction: column;
    }
`;

export const TableOrders = styled.div`
    border: 1px solid ${({theme}) => theme.COLORS.border};
    border-radius: .8rem;
    overflow: hidden;
    max-width: 60rem;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.dark_500};

    .footerOrders {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2.4rem;
        border-top: 1px solid ${({theme}) => theme.COLORS.border};

        > p {
            font-size: 2rem;
            font-weight: 700;
            line-height: 160%;
        }
    }
    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
        .footerOrders {
            flex-direction: column;
            gap: 1.4rem;
        }
    }
`;

export const CardOrderContainer = styled.div`
    
`;

export const TablePayments = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid ${({theme}) => theme.COLORS.border};
    border-radius: 0.8rem;
    overflow: hidden;
    background-color: ${({theme}) => theme.COLORS.dark_500};

    > .paymentsHeader {
        display: flex;
        border-bottom: 1px solid ${({theme}) => theme.COLORS.border};
        
        width: 100%;
        height: 5rem;
        justify-content: space-around;

          

        > button {
            background: none;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.2rem;
            height: 100%;
            padding: 2.4rem;
            width: 100%;
            color: ${({theme}) => theme.COLORS.light_100};

            &:not(:last-child) {
                border-right: 1px solid ${({theme}) => theme.COLORS.border};
            }

            &:hover {
                background-color: ${({theme}) => theme.COLORS.dark_200};;
            }
        }
    }

    > .paymentContent {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 7.2rem;
        gap: 3.7rem;
    }

    @media screen and (max-width: ${LAYOUT_BREAKPOINTS.MD}){
        > .paymentContent {
            padding: 3.8rem;

            > img {
                width: 20rem;
                height: 20rem;
            }
        }
    }
`;

export const GroupColumnComponent = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    gap: 3.2rem;

    > span {
        align-self: center;
        color: ${({theme}) => theme.COLORS.light_500};
        font-size: 1.4rem;
    }
`;

export const BlockComponent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 100%;
    max-width: ${(props) => props.width}rem;

    > span {
        color: ${({theme}) => theme.COLORS.light_400};
        text-align: start;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 100%;
    }
`;