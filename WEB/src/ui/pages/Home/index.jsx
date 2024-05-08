import { HomeContainer, Username, SignOutButton } from "./styles";
import { useAuth } from "../../../hooks/auth";

export function Home () {
    const { signOut, user } = useAuth();
    return (
        <HomeContainer>
            <Username>Welcome, {user.name}</Username>
            <SignOutButton onClick={signOut}>Sign Out</SignOutButton>
        </HomeContainer> 
    )
}