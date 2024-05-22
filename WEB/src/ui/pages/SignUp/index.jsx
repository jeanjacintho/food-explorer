import { SignUpContainer, FormLogin, InputContainer, Logo } from "./styles";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import { PiEnvelope, PiPassword, PiUser, PiArrowLeft } from "react-icons/pi";

import { api } from "../../../services/api";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import imgLogo from "../../../assets/logo.svg";
export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Fill in all fields")
        }

        setLoading(true);

        api.post("/users", {name, email, password}).then(() => {
            alert("User created successfully");
            setName("");
            setEmail("");
            setPassword("");
            setLoading(false);
            navigate("/");
        }).catch(error => {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Unable to register");
            }
            
        }).finally(() => {
            setLoading(false);
        })
    }
    return (
        <SignUpContainer>
            <Logo>
                <img src={imgLogo} alt="Logo" />
                <span>Food Explorer</span>
            </Logo>
            <FormLogin>
                <h1>Crie sua conta</h1>
                <InputContainer>
                    <span>Nome</span>
                    <Input placeholder="Exemplo: Maria da Silva" icon={PiUser} type="text" onChange={e => setName(e.target.value)} />
                </InputContainer>
                <InputContainer>
                    <span>Email</span>
                    <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="email" icon={PiEnvelope} onChange={e => setEmail(e.target.value)} />
                </InputContainer>
                <InputContainer>
                    <span>Senha</span>
                    <Input placeholder="Máximo 6 caracteres" type="password" icon={PiPassword} onChange={e => setPassword(e.target.value)} />
                </InputContainer>
                <Button text="Criar conta" onClick={handleSignUp} loading={loading} />
                <Link to="/"><PiArrowLeft />Já tenho uma conta</Link>
            </FormLogin>
        </SignUpContainer>
    );
}