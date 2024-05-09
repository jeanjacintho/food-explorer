import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import { useAuth } from "../hooks/auth";

import { AdminRoutes } from "./admin.routes";
import { AuthRoutes } from "./auth.routes";
import { CustomerRoutes } from "./customer.routes";
import { USER_ROLE } from "../utils/roles";
import { api } from "../services/api";

export function Routes() {
  const { user, signOut } = useAuth();
  
  useEffect(() => {
    if(user) {
      api.get('/users/validated').catch(() => signOut())
    }
  },[signOut, user]);

  function AcessRoute() {
    switch(user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />;
      default:
        return <CustomerRoutes />;
    }
  }

  return (
    <BrowserRouter>

      {user ? <AcessRoute /> : <AuthRoutes />}
    </BrowserRouter>
  );
}