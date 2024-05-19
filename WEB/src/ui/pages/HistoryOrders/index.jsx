import { HistoryOrdersContainer } from "./styles";

import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";

import { PiCaretLeft } from "react-icons/pi";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";

export function HistoryOrders() {
    const navigate = useNavigate();

    const [orders, setOrders] = useState([]);

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
    }) 

    return (
        <HistoryOrdersContainer>
            <div><Button icon={PiCaretLeft} variant="outline" text="Voltar" onClick={handleBack}/></div>
            <h1>Histórico de pedidos</h1>
            <div className="historyOrders">
                {orders ?
                <table>
                    <thead >
                        <tr>
                            <th>Status</th>
                            <th>Código</th>
                            <th>Total</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map(item => (
                            <tr key={String(item.id)}>
                                <td><div><span className={item.orderStatus}></span>{item.orderStatus}</div></td>
                                <td>{item.id}</td>
                                <td>R${item.totalPrice}</td>
                                <td>{item.created_at}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                :
                <p>Ainda não há histórico de pedidos</p>}
            </div>
        </HistoryOrdersContainer>
    )
}