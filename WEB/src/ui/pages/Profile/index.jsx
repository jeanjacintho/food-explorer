import { ProfileContainer, FormProfile, InputContainer, FormAvatar, FormContainer } from "./styles";
import { api } from "../../../services/api";
import { useState } from "react";
import { useAuth } from "../../../hooks/auth";

import { PiEnvelope, PiPassword, PiUser, PiCamera } from "react-icons/pi";

import { Header } from "../../blocks/Header"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Avatar } from "../../components/Avatar";
import { Footer } from "../../blocks/Footer";

export function Profile() {
    const { user, updateProfile, loading } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();
    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : '';
    const [avatar, setAvatar] = useState(avatarURL);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdateProfile() {
        const userUpdated = {
            name, email, password: passwordNew, old_password: passwordOld,
        }

        await updateProfile({user, userUpdated, avatarFile});
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);
        setAvatar(URL.createObjectURL(file));
    }

    return (
        <ProfileContainer>
            <Header />
            <FormContainer>
                <FormAvatar>
                    <Avatar avatarPicture={avatar} name={user.name} size="20"/>
                    <label htmlFor="avatar">
                        <PiCamera />
                        <input id="avatar" type="file" accept="image/*" onChange={handleChangeAvatar} />
                    </label>
                    
                    <div className="userData">
                        <h1>{user.name}</h1>
                        <span>{user.email}</span>
                    </div>
                </FormAvatar>
                <FormProfile>
                    <InputContainer>
                        <span>Nome</span>
                        <Input placeholder="Nome" type="text" value={name} icon={PiUser} onChange={e => setName(e.target.value)} />
                    </InputContainer>
                    <InputContainer>
                        <span>Email</span>
                        <Input placeholder="Email" type="email" value={email} icon={PiEnvelope} onChange={e => setEmail(e.target.value)}/>
                    </InputContainer>
                    <InputContainer>
                        <span>Senha atual</span>
                        <Input placeholder="A senha deve conter no mínimo 6 caracteres" type="password" icon={PiPassword} onChange={e => setPasswordOld(e.target.value)}/>
                    </InputContainer>
                    <InputContainer>
                        <span>Nova senha</span>
                        <Input placeholder="A senha deve conter no mínimo 6 caracteres" type="password" icon={PiPassword} onChange={e => setPasswordNew(e.target.value)}/>
                    </InputContainer>
                    <Button text={loading ? "Salvando" : "Salvar"} onClick={handleUpdateProfile} disabled={loading} />
                </FormProfile>
            </FormContainer>
            <Footer />
        </ProfileContainer>
    )
}