import { Routes, Route } from "react-router-dom";

import { Layout } from "../ui/layout";

import { Home } from "../ui/pages/Home";
import { NotFound } from "../ui/pages/NotFound";
import { Profile } from "../ui/pages/Profile";
import { Dishes } from "../ui/pages/Dishes";

export function AdminRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/dishes/:id" element={<Dishes />} />

        <Route path="*" exact={true} element={<NotFound />} />
      </Routes>
    </Layout>
  );
}