import { Routes, Route } from "react-router-dom";

import { Home } from "../ui/pages/Home";
import { NotFound } from "../ui/pages/NotFound";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}