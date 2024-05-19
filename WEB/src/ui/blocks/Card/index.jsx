import { CardContainer, GroupColumnComponent } from "./styles";

import { useAuth } from "../../../hooks/auth";
import { api } from "../../../services/api";
import { USER_ROLE } from "../../../utils/roles";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import theme from "../../../styles/theme";
import { useCart } from "../../../hooks/cart";

import { PiPencilSimple, PiHeart, PiTrash } from "react-icons/pi";

import { Button } from "../../components/Button";
import { NumberPicker } from "../../components/NumberPicker";

export function Card({ data, isFavorite, updateFavorite, isfavoritecard = "false", removeFavorite, ...rest}) {
    const { user } = useAuth();
    const imageURL = `${api.defaults.baseURL}/files/${data.image}`;
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);
    const { handleAddDishToCart, paymentAccept } = useCart();

    const navigate = useNavigate();
    const params = useParams();

    function handleEditDish() {
        navigate(`/editdish/${data.id}`);
    }

    const handleFavorite = async () => {
        try {
            if(isFavorite) {
                updateFavorite(true, data.id);
            } else {
                updateFavorite(false, data.id);
            }
        } catch (error) {
            console.log("Error updating favorites:", error);
        }
    };

    return (
        <CardContainer>
            {user.role === USER_ROLE.ADMIN & isfavoritecard === "false" ? <button onClick={handleEditDish}><PiPencilSimple /></button> : ""}
            {user.role === USER_ROLE.CUSTOMER & isfavoritecard === "false" ? <button onClick={handleFavorite}><PiHeart /></button> : ""}
            <img src={imageURL} alt={`iamgem do ${data.name}`}/>
            <Link to={`/details/${data.id}`}><h1>{data.name}</h1></Link>
            <p>{data.description}</p>
            {isfavoritecard === "false" && <span>R$ {data.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>}
            <GroupColumnComponent>
                {user.role === USER_ROLE.CUSTOMER & isfavoritecard === "false" ?  <NumberPicker number={quantity} setNumber={setQuantity}/> : ""}
                {user.role === USER_ROLE.CUSTOMER & isfavoritecard === "false" ?  <Button text="Incluir" onClick={() => handleAddDishToCart(data, quantity, imageURL)} loading={loading}/> : ""}
                {isfavoritecard === "true" && <Button icon={PiTrash} text="Remover" onClick={() => removeFavorite(data.id)} loading={loading}/>}
            </GroupColumnComponent>
        </CardContainer> 
    )
}