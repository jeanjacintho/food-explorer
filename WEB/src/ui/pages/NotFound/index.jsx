import { Link } from "react-router-dom";
import { Container } from "./styles";

import  {PiCaretLeft} from "react-icons/pi";
import logo from "../../../assets/404.svg"

export function NotFound() {
  return (
    <Container>
      <img src={logo} alt="404 image"/>
      <h1>Página indisponível</h1>
      <Link to="/"><PiCaretLeft />voltar para o início</Link>
    </Container>
  )
}