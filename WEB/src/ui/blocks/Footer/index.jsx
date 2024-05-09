import { FooterContainer, FooterComponents, Logo } from "./styles";
import { Link } from "react-router-dom";
import logoInverter from "../../../assets/logo-inverter.svg";
import moment from "moment";

export function Footer() {
    let date = moment().utcOffset('-03:00').format('YYYY');
    return (
        <FooterContainer>
            <FooterComponents>
                <Logo>
                    <Link to="/">
                        <img src={logoInverter} alt="logo" />
                        <span>Food Explorer</span>
                    </Link>
                </Logo>
                <span>© {date} - Todos os direitos reservados.</span>
            </FooterComponents>
        </FooterContainer>
    )
}