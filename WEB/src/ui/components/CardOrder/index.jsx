import { CardOrderContainer } from "./styles";

import { CartContext } from "../../../hooks/cart";
import { Button } from "../Button";
import { useContext } from "react";

import { PiTrash } from "react-icons/pi";

export function CardOrder({data, loading}) {
    const { handleRemoveDishFromCart } = useContext(CartContext);

    const onRemoveClick = () => {
        handleRemoveDishFromCart(data.id);
    };

    return (
        <CardOrderContainer>
            <div>
                <img src={data.image} alt={`imagem do prato ${data.name}`} />
                <p>{data.quantity} X {data.name}</p>
            </div>
            <div>
                <p><strong>R$ {data.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong></p>
                <Button text="" icon={PiTrash} variant="outline" onClick={onRemoveClick} loading={loading}/>
            </div>
        </CardOrderContainer>
    )
}