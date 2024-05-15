import { LayoutContainer } from "./styles";

import { Header } from "../blocks/Header";
import { Footer } from "../blocks/Footer";

import { SearchProvider } from "../../hooks/searchProvider";

export function Layout({ children }) {
    return (
        <SearchProvider>
            <LayoutContainer>
                <Header />
                <main>{children}</main>
                <Footer />
            </LayoutContainer>
        </SearchProvider>
    )
}