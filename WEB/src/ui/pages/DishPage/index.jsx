import { DishPageContainer, FormDish } from "./styles";

import { api } from "../../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/auth";
import { USER_ROLE } from '../../../utils/roles'

import { PiCaretLeft, PiPencilSimple } from "react-icons/pi";
import { Button } from "../../components/Button";
import { IngredientItem } from "../../components/IngredientItem";
import { NumberPicker } from "../../components/NumberPicker";

export function DishPage() {
    const { user } = useAuth();

    const [data, setData] = useState(null);
    const [number, setNumber] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const params = useParams();

    function handleBack() {
        navigate(-1);
    }

    function handleEdit() {
        navigate(`/editdish/${params.id}`);
    }

    function handleInclude() {
        setLoading(true);
        setLoading(false);
    }

    useEffect(() => {
        async function fetchDishDetail() {
            setLoading(true)
            const response = await api.get(`/dishes/${params.id}`);
            setData(response.data);
            setLoading(false);
        }
    
        fetchDishDetail();
    }, []);

    return (
        <DishPageContainer>
            <div><Button icon={PiCaretLeft} variant="outline" text="Voltar" onClick={handleBack}/></div>
            { data &&
            <FormDish>
                {params.id && <img src={`${api.defaults.baseURL}/files/${data.image}`} alt={data.name} />}
                <main>
                    {params.id && <h1>{data.name}</h1>}
                    {params.id && <p>{data.description}</p>}
                    {
                        data.ingredients && 
                        <section>
                            {
                            data.ingredients.map(ingredient => (
                                <IngredientItem 
                                key={String(ingredient.id)} 
                                value={ingredient.name} 
                                />
                            ))
                            }
                        </section>
                    }
                    <div>
                    {user.role === USER_ROLE.CUSTOMER && <NumberPicker number={number} setNumber={setNumber} />}
                    {user.role === USER_ROLE.CUSTOMER && <Button text={`Incluir ∙ R$ ${(data.price * number).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`} onClick={handleInclude} loading={loading}/>}
                    {user.role === USER_ROLE.ADMIN && <Button text="Editar prato" icon={PiPencilSimple} onClick={handleEdit} loading={loading}/>}
                    </div>
                </main>
            </FormDish>
            }
        </DishPageContainer>
    )
}