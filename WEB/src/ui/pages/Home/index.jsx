import { HomeContainer, Banner, BlockComponent } from "./styles";

import bannerImg from "../../../assets/ingredients.png";
import { Card } from "../../blocks/Card";

import { api } from "../../../services/api";
import { SearchContext } from "../../../hooks/searchProvider";

import { useEffect, useState, useContext } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { register } from 'swiper/element/bundle';
register();

export function Home() {
    const [dishes, setDishes] = useState([]);
    const { searchTerm } = useContext(SearchContext);

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
                <swiper-container class="swipercontainer" navigation="true" loop="true" slides-per-view="4" grab-cursor="true" space-between="27">
                    { dishes.map(dish => {
                        if(dish.category === "dishes") {
                            return (
                                <swiper-slide key={String(dish.id)}>
                                    <Card data={dish} />
                                </swiper-slide>
                            )
                        }
                    })}
                </swiper-container>
            </BlockComponent>
            <BlockComponent>
                <span>Sobremesas</span>
                <swiper-container class="swipercontainer" navigation="true" loop="true" slides-per-view="4" grab-cursor="true" space-between="27">
                    { dishes.map(dish => {
                        if(dish.category === "dessert") {
                            return (
                                <swiper-slide key={String(dish.id)}>
                                    <Card data={dish} />
                                </swiper-slide>
                            )
                        }
                    })}
                </swiper-container>
            </BlockComponent>
            <BlockComponent>
                <span>Bebidas</span>
                <swiper-container class="swipercontainer" navigation="true" loop="true" slides-per-view="4" grab-cursor="true" space-between="27">
                    { dishes.map(dish => {
                        if(dish.category === "drinks") {
                            return (
                                <swiper-slide key={String(dish.id)}>
                                    <Card data={dish} />
                                </swiper-slide>
                            )
                        }
                    })}
                </swiper-container>
            </BlockComponent>
        </HomeContainer> 
    )
}