import { IngredientItem } from "../IngredientItem";
import { IngredientBoxContainer, ListIngredients } from "./styles";

export function IngredientBox() {
    return (
        <IngredientBoxContainer>
            <ListIngredients>
                <IngredientItem isNew={true} placeholder="Adicionar"/>
                <IngredientItem isNew={false} value="Calabresa"/>
            </ListIngredients>
        </IngredientBoxContainer>
    )
}