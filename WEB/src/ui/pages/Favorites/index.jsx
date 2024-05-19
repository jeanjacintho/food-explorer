import { FavoritesConteiner, FavoritesCardContainer } from "./styles";
import { useState, useEffect } from "react";
import { api } from "../../../services/api";

import { PiCaretLeft } from "react-icons/pi"
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Card } from "../../blocks/Card";

export function Favorites() {
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([]);

    function handleBack() {
        navigate(-1);
    }

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await api.get("/favorites");
                setFavorites(response.data);
            } catch (error) {
                console.log("Error when searching for favorites:", error);
            }
        };
        fetchFavorites();
    }, []);

    const removeFavorite = async (dishId) => {
        try {
            await api.delete(`/favorites/${dishId}`);
            setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite.id !== dishId));
        } catch (error) {
            console.log("Error when removing favorites:", error);
        }
    };

    return(
        <FavoritesConteiner>
            <div><Button icon={PiCaretLeft} variant="outline" text="Voltar" onClick={handleBack}/></div>
            <h1>Meus favoritos</h1>
            <FavoritesCardContainer>
                {
                    favorites.map(favorite => (
                            <Card key={String(favorite.id)} data={favorite} removeFavorite={removeFavorite} isfavoritecard="true" />
                    ))
                }
            </FavoritesCardContainer>
        </FavoritesConteiner>
    )
}