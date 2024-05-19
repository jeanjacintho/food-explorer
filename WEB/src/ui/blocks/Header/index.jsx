import { HeaderContainer, Logo, HeaderComponents } from "./styles";
import { PiMagnifyingGlass, PiReceipt, PiSignOut, PiChefHat, PiUserCircle, PiHeart, PiChartDonut } from "react-icons/pi";
import { useAuth } from "../../../hooks/auth";
import { api } from "../../../services/api";
import { Link } from "react-router-dom";
import { USER_ROLE } from '../../../utils/roles'
import { SearchContext } from "../../../hooks/searchProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../hooks/cart";

import logo from "../../../assets/logo.svg";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Avatar } from "../../components/Avatar"
import { DropdownMenu } from "../../components/DropdownMenu";
import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "../../components/DropdownMenu/styles";

export function Header({setSearch}) {
    const { signOut, user } = useAuth();
    const { searchTerm, setSearchTerm } = useContext(SearchContext);
    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : '';
    const navigate = useNavigate();
    const { cart } = useCart(); 
    console.log(cart)

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleOrders = () => {
        navigate("/orders");
    }

    const handleFavorites = () => {
        navigate("/favorites");
    }
    
    return (
        <HeaderContainer>
            <HeaderComponents>
                <Logo>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                        <span>Food Explorer</span>
                    </Link>
                </Logo>
                <Input placeholder="Busque por pratos ou ingredientes" icon={PiMagnifyingGlass} onChange={handleSearch} value={searchTerm || ''}/>
                {user.role === USER_ROLE.ADMIN ? 
                    <Link to="/createdish"><Button className="order" text="Novo prato" icon={PiChefHat} /></Link>
                : 
                    <Button className="order" text={`Pedidos (${cart.length})`} icon={PiReceipt} onClick={handleOrders} />
                }
                {user.role === USER_ROLE.ADMIN ? <Button className="dashboard" text="Dashboard" icon={PiChartDonut} /> : <Button className="favorites" onClick={handleFavorites} text="Favoritos" icon={PiHeart} />}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar avatarPicture={avatarURL} name={user.name} size="4"/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>
                            <span>Olá, <strong>{user.name}</strong></span>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link to="/profile">
                            <DropdownMenuItem>
                                <PiUserCircle size={16}/><span>Perfil</span>
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuSeparator />
                        <Link to="/" onClick={signOut}>
                            <DropdownMenuItem>
                                <PiSignOut size={16} /><span>Deslogar</span>
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            </HeaderComponents>
        </HeaderContainer>
    )
}