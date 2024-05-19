import { Routes, Route } from "react-router-dom";

import { Layout } from "../ui/layout";

import { Home } from "../ui/pages/Home";
import { NotFound } from "../ui/pages/NotFound";
import { Profile } from "../ui/pages/Profile";
import { DishPage } from "../ui/pages/DishPage";
import { Favorites } from "../ui/pages/Favorites";
import { CartOrder } from "../ui/pages/CartOrder";
import { CartProvider } from "../hooks/cart";
import { HistoryOrders } from "../ui/pages/HistoryOrders";

export function CustomerRoutes() {
    return (
        <CartProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={< Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/details/:id" exact={true} element={<DishPage />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/orders" element={<CartOrder />} />
                    <Route path="/history" element={<HistoryOrders />} />

                    <Route path="*" exact={true} element={<NotFound />} />
                </Routes>
            </Layout>
        </CartProvider>
    )
}