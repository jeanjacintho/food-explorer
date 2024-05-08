import { useState } from "react";
import { SignInContainer, FormLogin, InputContainer, Logo } from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from '../../../hooks/auth';

import { PiEnvelope, PiPassword, PiUserPlus } from "react-icons/pi";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
    signIn({ email, password });
  }
    return (
        <SignInContainer>
            <Logo>
                <img src="./src/assets/logo.svg" alt="Logo" />
                <span>Food Explorer</span>
            </Logo>
            <FormLogin>
                <h1>Faça login</h1>
                <InputContainer>
                    <span>Email</span>
                    <Input placeholder="Exemplo: exemplo@exemplo.com.br" icon={PiEnvelope} type="text" onChange={e => setEmail(e.target.value)}/ >
                </InputContainer>
                <InputContainer>
                    <span>Senha</span>
                    <Input placeholder="Máximo 6 caracteres" icon={PiPassword} type="password" onChange={e => setPassword(e.target.value)} />
                </InputContainer>
                <Button text="Entrar" onClick={handleSignIn} />
                <Link to="/register"><PiUserPlus />Criar uma conta</Link>
            </FormLogin>
        </SignInContainer>
    );
}