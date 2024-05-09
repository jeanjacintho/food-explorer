
import { AvatarWrapper } from "./styles";

const getInitials = (name) => {
    return name ? name[0].toUpperCase() : '';
  };

export function Avatar({ name, size, avatarPicture }) {
    return (
        <AvatarWrapper size={size}>
            {avatarPicture ? <img src={avatarPicture} alt="profile avatar"/> : <span>{getInitials(name)}</span>}
        </AvatarWrapper>
    )
}