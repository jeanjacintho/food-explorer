import { ButtonContainer } from "./styles";

export function Button({text, loading, icon: Icon, variant, ...rest}) {
    return (
        <ButtonContainer variant={variant} disabled={loading} {...rest}>
            {Icon && <Icon size={20} />}
            <span>{loading ? "..." : `${text}`}</span>
        </ButtonContainer>
    )
}