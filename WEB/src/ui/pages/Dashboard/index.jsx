import { DashboardContainer, HistoryOrders, Order, GroupColumnComponent } from "./styles";

import { Button } from "../../components/Button";
import { PiCaretLeft, PiX, PiReceiptX, PiForkKnife } from "react-icons/pi";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

export function Dashboard() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState(null);
    const [isOrderOpen, setIsOrderOpen] = useState(false);

    function handleBack() {
        navigate(-1);
    }

    useEffect(() => {
        async function fetchHistory() {
            try {
                const response = await api.get(`/orders`);
                setOrders(response.data);
            } catch (error) {
                console.error(error);
            }
            
        }
        fetchHistory();
    });

    function handleOrderDetails(orderSelected) {
        setOrder(orderSelected);
        handleOrderDetailsOpen();
    }

    function handleOrderDetailsOpen() {
        setIsOrderOpen(!isOrderOpen);
    }

    async function handleStatusOrderCancelado() {
        const updateOrder = {
            id: order.id,
            orderStatus: "Cancelado"
        }
        await api.patch("/orders", updateOrder).then(() => {
            handleOrderDetailsOpen();
            alert("Order updated successfully");
        }).catch(() => {
            alert("Unable to update order");
        });
    }

    async function handleStatusOrderEntregue() {
        const updateOrder = {
            id: order.id,
            orderStatus: "Entregue"
        }
        await api.patch("/orders", updateOrder).then(() => {
            handleOrderDetailsOpen();
            alert("Order updated successfully");
        }).catch(() => {
            alert("Unable to update order");
        });
    }

    return (
        <DashboardContainer>
            <div><Button icon={PiCaretLeft} variant="outline" text="Voltar" onClick={handleBack}/></div>
            <h1>Dashboard</h1>
            <div>
            <HistoryOrders>
                <table className="tableDetails">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Cliente</th>
                            <th>Código</th>
                            <th>Detalhamento</th>
                            <th>Pagamento</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.slice().reverse().map(order => (
                            <tr key={String(order.id)} onClick={() => handleOrderDetails(order)}>
                                <td><div><span className={order.orderStatus}></span>{order.orderStatus}</div></td>
                                <td className="cliente">{order.userName}</td>
                                <td>{order.id}</td>
                                <td>
                                    <div className="detalhamento">
                                        {
                                            order.items.map((item, index, array) => (
                                                <p key={index}>
                                                    {item.quantity}X {item.title}{index !== array.length - 1 && ','}
                                                </p>
                                            ))
                                        }
                                    </div>
                                </td>
                                <td>{order.paymentMethod}</td>
                                <td>{order.created_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </HistoryOrders>
            <Order style={{display: `${isOrderOpen ? 'flex' : 'none'}`}}>
                <GroupColumnComponent>
                    <PiX size={30} onClick={handleOrderDetailsOpen} style={{cursor: "pointer"}}/>
                    <h3>Detalhes do pedido</h3>
                </GroupColumnComponent>
                
                {order ?
                    <>
                    <table className="tableDetails">
                        <tbody>
                            <tr><td><div><span className={order.orderStatus}></span>{order.orderStatus}</div></td></tr>
                            <tr><td>CÓDIGO: {order.id}</td></tr>
                            <tr><td>CLIENTE: {order.userName}</td></tr>
                            <tr><td>DATA: {order.created_at}</td></tr>
                            <tr><td>TOTAL: R$ {order.totalPrice}</td></tr>
                            <tr><td>PAGAMENTO: {order.paymentMethod}</td></tr>
                            <tr>
                                <td>
                                {
                                    order.items.map((item, index, array) => (
                                        <p key={index}>{item.quantity}X {item.title}{index !== array.length - 1 && ','}</p>
                                    ))
                                }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {order.orderStatus === "Pendente" &&
                        <GroupColumnComponent>
                            <Button text="Cancelar pedido" icon={PiReceiptX} onClick={handleStatusOrderCancelado} style={{width: "100%"}}/>
                            <Button text="Marcar como entregue" icon={PiForkKnife} onClick={handleStatusOrderEntregue} style={{width: "100%"}}/>
                        </GroupColumnComponent>
                    } 
                    </>
                :
                    <span>
                        Selecione um pedido para visualizar os detalhes
                    </span>
                }
            </Order>
            </div>
        </DashboardContainer>
    )
}