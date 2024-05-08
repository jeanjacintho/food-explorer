import { Routes, Route } from "react-router-dom";

import { SignIn } from "../ui/pages/SignIn";
import { SignUp } from "../ui/pages/SignUp";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}