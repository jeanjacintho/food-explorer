import { Routes, Route } from "react-router-dom";

import { Layout } from "../ui/layout";

import { Home } from "../ui/pages/Home";
import { NotFound } from "../ui/pages/NotFound";
import { Profile } from "../ui/pages/Profile";
import { Dishes } from "../ui/pages/Dishes";
import { DishPage } from "../ui/pages/DishPage";
import { Dashboard } from "../ui/pages/Dashboard";

export function AdminRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createdish" element={<Dishes />} />
        <Route path="/editdish/:id" element={<Dishes />} />
        <Route path="/details/:id" exact={true} element={<DishPage />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" exact={true} element={<NotFound />} />
      </Routes>
    </Layout>
  );
}