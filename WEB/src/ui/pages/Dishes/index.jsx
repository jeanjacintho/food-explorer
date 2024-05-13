import { DishesContainer, BlockComponent, FormDish, GroupColumnComponent, SelectContainer } from "./styles";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../services/api";
import moment from 'moment';

import { PiUploadSimple, PiTrash, PiFloppyDisk, PiCaretDown, PiCaretLeft } from "react-icons/pi";

import { TextArea } from "../../components/TextArea";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IngredientItem } from "../../components/IngredientItem";

export function Dishes() {

    const [dish, setDish] = useState(null);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    let [image, setImage] = useState(null);
    const [category, setCategory] = useState("default");
    const [updatedAt, setUpdatedAt] = useState("");
    const [filenames, setFilenames] = useState("");
    const [updatedImage, setUpdatedImage] = useState(null);

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    const [loading, setLoading] = useState(false);
    const [updatedDish, setUpdatedDish] = useState(false);

    const navigate = useNavigate();
    const params = useParams();

    function handleBack() {
        navigate(-1);
    }

    useEffect(() => {
        async function fetchDish() {
            try {
                const response = await api.get(`/dishes/${params.id}`);
                setDish(response.data)
                if(params.id !== undefined) {
                    setUpdatedDish(true);
                } else {
                    setUpdatedDish(false);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchDish();
    }, [params.id]);

    useEffect(() => {
        if(dish) {
            setName(dish.name);
            setDescription(dish.description);
            setPrice(dish.price);
            setImage(dish.image);
            setCategory(dish.category);
            setFilenames(dish.filenames);
            const dataString = dish.updated_at;
            var data = moment(dataString);
            var dataFormatada = data.format("DD[/]MM[/]YYYY [às] HH:mm:ss");

            setUpdatedAt(dataFormatada);
            
            const allIngredients = dish.ingredients.map((ingredient) => ingredient.name);
            setIngredients(allIngredients);
        }
    }, [dish]);

    function handleImageChange(e) {
        const file = e.target.files[0];
        setImage(file);
        setUpdatedImage(file);
        setFilenames(file.name);
    }

    function handleAddIngredient() {
        setIngredients((prevState) => [...prevState, newIngredient]);
        setNewIngredient("");
    }

    function handleRemoveIngredient(ingredient) {
        setIngredients((prevState) => prevState.filter((item) => item !== ingredient));
    }

    async function handleEditDish() {
        if(!image) {
            return alert("select an image for the dish")
        }

        if(!name) {
            return alert("fill in the name field")
        }

        if(!description) {
            return alert("fill in the description field")
        }

        if(!price) {
            return alert("fill in the price field")
        }

        if(!category) {
            return alert("select a category")
        }

        if(ingredients.length < 1) {
            return alert("add at least one ingredient")
        }

        if(newIngredient) {
            return alert("You left an ingredient in the field to add, but did not click add. Click to add or leave the field empty.")
        }

        setLoading(true);

        try {
            if(updatedDish) {
                const updateDish = {
                    name,
                    description,
                    price,
                    category,
                    ingredients,
                }

                if(typeof image === 'string') {
                    const routeImage = `${api.defaults.baseURL}/files/${image}`;

                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', routeImage, true);
                    xhr.responseType = 'blob';

                    xhr.onload = function() {
                        if (this.status === 200) {
                            var blob = this.response;
                            var novoArquivo = new File([blob], image);
                            image = novoArquivo;
                        }
                    };

                    xhr.send();
                }

                if(typeof image !== 'string' && typeof image === 'object') {
                    const formData = new FormData();
                    formData.append("image", image);

                    await api.patch(`/dishes/${params.id}`, formData, {
                        headers: { "Content-Type": "multipart/form-data" },
                    });
                }
                await api.patch(`/dishes/${params.id}`, updateDish);

                    alert("dish updated successfully");
                    navigate(-1);
            } else {
                const formData = new FormData();
                formData.append("image", image);
                formData.append("name", name);
                formData.append("category", category);
                formData.append("description", description);
                formData.append("price", price);
                formData.append("ingredients", JSON.stringify(ingredients));

                await api.post("/dishes", formData);
                alert("dish created successfully");
                navigate(-1);
            }
        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Could not create/update dish");
            }
        } finally {
            setLoading(false);
        }
    }

    async function handleRemoveDish() {
        const confirm = window.confirm("Do you really want to remove the dish?");

        if(confirm) {
            setLoading(true);

            try {
                await api.delete(`/dishes/$params.id`);
                navigate("/")
            } catch (error) {
                if(error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Could not remove dish");
                }
            } finally {
                setLoading(false);
            }
        }
    }

    return(
        <DishesContainer>
            <div><Button icon={PiCaretLeft} variant="outline" text="Voltar" onClick={handleBack}/></div>
           
            {updatedDish ? <h1>Atualizar prato</h1> : <h1>Adicionar prato</h1>}
            <FormDish>
                <GroupColumnComponent>
                    <BlockComponent width={26}>
                        <span>Imagem do prato</span>
                        <Input icon={PiUploadSimple} type="file" accept="image/*" width="23" onChange={(handleImageChange)} />
                    </BlockComponent>
                    <BlockComponent>
                        <span>Nome</span>
                        <Input type="text" placeholder="Ex: Salada Ceasar" value={name} onChange={(e) => setName(e.target.value)}/>
                    </BlockComponent>
                    <BlockComponent width={30}>
                        <span>Categoria</span>
                        <SelectContainer>
                            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="default" disabled>Selecione uma categoria</option>
                                <option value="dishes">Pratos</option>
                                <option value="drinks">Bebidas</option>
                                <option value="dessert">Sobremesas</option>
                            </select>
                            <PiCaretDown size={20} />
                        </SelectContainer>
                    </BlockComponent>
                </GroupColumnComponent>
                <GroupColumnComponent>
                    <BlockComponent>
                        <span>Ingredientes</span>
                        <div className="boxIngredients">
                            <IngredientItem isNew placeholder="Adicionar" value={newIngredient} onChange={(e) => setNewIngredient(e.target.value)} onClick={handleAddIngredient}/>
                            {
                                ingredients.map((ingredient, index) => (
                                    <IngredientItem key={String(index)} value={ingredient} onClick={() => handleRemoveIngredient(ingredient)}/>
                                ))
                            }
                        </div>
                    </BlockComponent>
                    <BlockComponent width={20}>
                        <span>Preço</span>
                        <Input type="number" value={price} placeholder="Ex: 10,00" onChange={(e) => setPrice(e.target.value)}/>
                    </BlockComponent>
                </GroupColumnComponent>
                <BlockComponent>
                    <span>Descrição</span>
                    <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" defaultValue={description} onChange={(e) => setDescription(e.target.value)}/>
                </BlockComponent>
                <GroupColumnComponent>
                    {updatedDish && <span>Última alteração em: {updatedAt}</span>}
                    {updatedDish && <Button icon={PiTrash} text="Excluir prato" className="delete" loading={loading} onClick={handleRemoveDish}/>}
                    <Button icon={PiFloppyDisk} text="Salvar alterações" className="save" loading={loading} onClick={handleEditDish}/>
                </GroupColumnComponent>
            </FormDish>
        </DishesContainer>
    )
}