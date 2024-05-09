import { Routes, Route } from "react-router-dom";

import { Home } from "../ui/pages/Home";
import { NotFound } from "../ui/pages/NotFound";
import { Profile } from "../ui/pages/Profile";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}