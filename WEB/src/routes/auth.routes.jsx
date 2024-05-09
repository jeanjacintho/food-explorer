import { Routes, Route } from "react-router-dom";

import { SignIn } from "../ui/pages/SignIn";
import { SignUp } from "../ui/pages/SignUp";
import { NotFound } from "../ui/pages/NotFound";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}