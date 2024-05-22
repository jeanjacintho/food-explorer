import { HeaderContainer, Logo, HeaderComponents, MenuSidebar } from "./styles";
import { PiMagnifyingGlass, PiReceipt, PiSignOut, PiChefHat, PiUserCircle, PiHeart, PiChartDonut, PiListBullets, PiList, PiX } from "react-icons/pi";
import { useAuth } from "../../../hooks/auth";
import { api } from "../../../services/api";
import { Link } from "react-router-dom";
import { USER_ROLE } from '../../../utils/roles'
import { SearchContext } from "../../../hooks/searchProvider";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../hooks/cart";
import { useMediaQuery } from "react-responsive";

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
    
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleOrders = () => {
        navigate("/orders");
    }

    const handleFavorites = () => {
        navigate("/favorites");
    }

    const handleDashboard = () => {
        navigate("/dashboard");
    }

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }
    
    return (
        <HeaderContainer>
            <HeaderComponents>
                {
                    isDesktop === false &&
                    <button className="menuSidebar"><PiList size={30} onClick={handleMenuOpen}/></button>
                }
                <MenuSidebar style={{display: `${menuOpen ? 'flex' : 'none'}`}}>
                    <PiX size={30} onClick={handleMenuOpen}/>
                    <div>
                        <Input placeholder="Busque por pratos ou ingredientes" icon={PiMagnifyingGlass} onChange={handleSearch} value={searchTerm || ''}/>
                        <span>Olá, <strong>{user.name}</strong></span>
                        <Link to="/profile" onClick={handleMenuOpen}><span><PiUserCircle size={16}/><span>Perfil</span></span></Link>
                        {
                            user.role === USER_ROLE.CUSTOMER &&
                            <>
                                <Link to="/history" onClick={handleMenuOpen}><span><PiListBullets size={16}/>Histórico de pedidos</span></Link>
                                <Link to="/favorites" onClick={handleMenuOpen}><span><PiHeart size={16}/>Favoritos</span></Link>
                            </>
                        }
                        {
                            user.role === USER_ROLE.ADMIN &&
                            <>
                                <Link to="/dashboard" onClick={handleMenuOpen}><span><PiChartDonut size={16}/>Dashboard</span></Link>
                            </>
                        }
                        <Link to="/" onClick={signOut}><span><PiSignOut size={16}/>Deslogar</span></Link>
                    </div>
                </MenuSidebar>
                <Logo>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                        <span>Food Explorer</span>
                    </Link>
                </Logo>
                {isDesktop && <Input placeholder="Busque por pratos ou ingredientes" icon={PiMagnifyingGlass} onChange={handleSearch} value={searchTerm || ''}/>}
                {user.role === USER_ROLE.ADMIN ? 
                    <Link to="/createdish"><Button className="order" text="Novo prato" variant="icon" icon={PiChefHat}/></Link>
                : 
                    <Button className="order" text={`Pedidos (${cart.length})`} icon={PiReceipt} variant="icon" onClick={handleOrders}/>
                }
                {user.role === USER_ROLE.ADMIN & isDesktop ? <Button className="dashboard" text="Dashboard" icon={PiChartDonut} onClick={handleDashboard}/> : ""}
                {user.role === USER_ROLE.CUSTOMER & isDesktop ? <Button className="favorites" onClick={handleFavorites} text="Favoritos" icon={PiHeart}/> : ""}
                {isDesktop && <DropdownMenu>
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
                        {
                            user.role === USER_ROLE.CUSTOMER &&
                            <>
                            <DropdownMenuSeparator />
                            <Link to="/history">
                                <DropdownMenuItem>
                                    <PiListBullets size={16}/><span>Histórico de pedidos</span>
                                </DropdownMenuItem>
                             </Link>
                             </>
                        }
                        <DropdownMenuSeparator />
                        <Link to="/" onClick={signOut}>
                            <DropdownMenuItem>
                                <PiSignOut size={16} /><span>Deslogar</span>
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
                }
            </HeaderComponents>
        </HeaderContainer>
    )
}