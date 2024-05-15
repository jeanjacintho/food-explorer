import { CardContainer, GroupColumnComponent } from "./styles";

import { useAuth } from "../../../hooks/auth";
import { api } from "../../../services/api";
import { USER_ROLE } from "../../../utils/roles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PiPencilSimple, PiHeart } from "react-icons/pi";

import { Button } from "../../components/Button";
import { NumberPicker } from "../../components/NumberPicker";

export function Card({ data, ...rest}) {
    const { user } = useAuth();
    const imageURL = `${api.defaults.baseURL}/files/${data.image}`;
    const [number, setNumber] = useState(1);
    const navigate = useNavigate();

    function handleEditDish() {
        navigate(`/editdish/${data.id}`);
    }
    return (
        <CardContainer>
            {user.role === USER_ROLE.ADMIN ? <button onClick={handleEditDish}><PiPencilSimple /></button> : <button><PiHeart /></button>}
            <img src={imageURL} alt={`iamgem do ${data.name}`}/>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <span>R$ {data.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            {user.role === USER_ROLE.CUSTOMER && <GroupColumnComponent>
                <NumberPicker number={number} setNumber={setNumber}/>
                <Button text="Incluir"/>
            </GroupColumnComponent>}
        </CardContainer>
    )
}