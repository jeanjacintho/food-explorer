import { Routes, Route } from "react-router-dom";

import { Layout } from "../ui/layout";

import { Home } from "../ui/pages/Home";
import { NotFound } from "../ui/pages/NotFound";
import { Profile } from "../ui/pages/Profile";

export function CustomerRoutes() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/profile" element={<Profile />} />

                <Route path="*" exact={true} element={<NotFound />} />
            </Routes>
        </Layout>
    )
}