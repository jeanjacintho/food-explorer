import { ButtonContainer } from "./styles";

export function Button({text, ...rest}) {
    return (
        <ButtonContainer {...rest}>
            {text}
        </ButtonContainer>
    )
}