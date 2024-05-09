import { ButtonContainer } from "./styles";

export function Button({text, icon: Icon, ...rest}) {
    return (
        <ButtonContainer {...rest}>
            {Icon && <Icon size={20} />}
            {text}
        </ButtonContainer>
    )
}