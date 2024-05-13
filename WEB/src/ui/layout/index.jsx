import { LayoutContainer } from "./styles";

import { Header } from "../blocks/Header";
import { Footer } from "../blocks/Footer";

export function Layout({ children }) {
    return (
        <LayoutContainer>
            <Header />
            <main>{children}</main>
            <Footer />
        </LayoutContainer>
    )
}