import { HomeContainer, Banner, BlockComponent } from "./styles";

import bannerImg from "../../../assets/ingredients.png";
import { Card } from "../../blocks/Card";

import { api } from "../../../services/api";
import { SearchContext } from "../../../hooks/searchProvider";

import { useEffect, useState, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/navigation";
import { register } from 'swiper/element/bundle';
register();

export function Home() {
    const [dishes, setDishes] = useState([]);
    const { searchTerm } = useContext(SearchContext);
    let widthScreen = window.innerWidth;
    widthScreen = widthScreen - 48;

    const isDesktop = useMediaQuery({ minWidth: 1024 });

    useEffect(() => {
        async function fetchDishes() {
            try {
                const response = await api.get(`/dishes?search=${searchTerm}`);
                setDishes(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchDishes();
    },[searchTerm]);

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await api.get("/favorites");
                const favorites = response.data.map((favorite) => favorite.dish_id);

                setFavorites(favorites);
            } catch (error) {
                console.log("Error when searching for favorites:", error);
            }
        };
        fetchFavorites();
    }, []);

    async function updateFavorite(isFavorite, dishId) {
        try {
            if(isFavorite) {
                await api.delete(`/favorites/${dishId}`);

                setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite !== dishId));
            } else {
                await api.post("/favorites", {dish_id: dishId});
                setFavorites((prevFavorites) => [...prevFavorites, dishId]);
            } 
        } catch (error) {
            console.log("Error updating favorites:", error);
        }
    }

    return (
        <HomeContainer>
            
            <Banner>
                <img src={bannerImg} alt="banner" />
                <div>
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </div>
            </Banner>
            <BlockComponent>
                <span>Pratos</span>
                <swiper-container class="swipercontainer" navigation="true" loop="true" slides-per-view={isDesktop ? "4" : "2"} grab-cursor="true" space-between={isDesktop ? "27" : "16"} style={{maxWidth: widthScreen}}>
                    { dishes.map(dish => {
                        if(dish.category === "dishes") {
                            return (
                                <swiper-slide key={String(dish.id)}>
                                    <Card data={dish} isFavorite={favorites.includes(dish.id)} updateFavorite={updateFavorite}/>
                                </swiper-slide>
                            )
                        }
                    })}
                </swiper-container>
            </BlockComponent>
            <BlockComponent>
                <span>Sobremesas</span>
                <swiper-container class="swipercontainer" navigation="true" loop="true" slides-per-view={isDesktop ? "4" : "2"} grab-cursor="true" space-between={isDesktop ? "27" : "16"} style={{maxWidth: widthScreen}}>
                    { dishes.map(dish => {
                        if(dish.category === "dessert") {
                            return (
                                <swiper-slide key={String(dish.id)}>
                                    <Card data={dish} isFavorite={favorites.includes(dish.id)} updateFavorite={updateFavorite}/>
                                </swiper-slide>
                            )
                        }
                    })}
                </swiper-container>
            </BlockComponent>
            <BlockComponent>
                <span>Bebidas</span>
                <swiper-container class="swipercontainer" navigation="true" loop="true" slides-per-view={isDesktop ? "4" : "2"} grab-cursor="true" space-between={isDesktop ? "27" : "16"} style={{maxWidth: widthScreen}}>
                    { dishes.map(dish => {
                        if(dish.category === "drinks") {
                            return (
                                <swiper-slide key={String(dish.id)}>
                                    <Card data={dish} isFavorite={favorites.includes(dish.id)} updateFavorite={updateFavorite}/>
                                </swiper-slide>
                            )
                        }
                    })}
                </swiper-container>
            </BlockComponent>
        </HomeContainer> 
    )
}