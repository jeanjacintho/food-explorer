import { CardOrderContainer } from "./styles";

import { CartContext } from "../../../hooks/cart";
import { Button } from "../Button";
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";

import { PiTrash } from "react-icons/pi";

export function CardOrder({data, loading}) {
    const { handleRemoveDishFromCart } = useContext(CartContext);
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    const onRemoveClick = () => {
        handleRemoveDishFromCart(data.id);
    };

    return (
        <CardOrderContainer>
            {isDesktop &&
                <>
                <div>
                    <img src={data.image} alt={`imagem do prato ${data.name}`} />
                    <p>{data.quantity} X {data.name}</p>
                </div>
                <div>
                    <p><strong>R$ {data.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong></p>
                    <Button text="" icon={PiTrash} variant="outline" onClick={onRemoveClick} loading={loading}/>
                </div>
                </>
            }
            {isDesktop == false &&
                <>
                    <div>
                        <img src={data.image} alt={`imagem do prato ${data.name}`} />
                    </div>
                    <div>
                        <p>{data.quantity} X {data.name}</p>
                        <p><strong>R$ {data.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong></p>
                    </div>
                    <Button text="" icon={PiTrash} variant="outline" onClick={onRemoveClick} style={{width: "4.8rem", padding: "1rem"}} loading={loading}/>
                </>
            }
        </CardOrderContainer>
    )
}