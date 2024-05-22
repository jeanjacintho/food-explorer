import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
  
export const AuthContext = createContext({});
  
function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  
  async function signIn({ email, password }) {
    try {
      setLoading(true);
      const response = await api.post("sessions", { email, password }, { withCredentials: true });
      const { user } = response.data;

      localStorage.setItem("@food-explorer:user", JSON.stringify(user));
      setData({ user });

      setLoading(false);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Could not sign in.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@food-explorer:user");
    setData({});
  }

  async function updateProfile({user, userUpdated, avatarFile}) {
    try {
      if(avatarFile) {
        setLoading(true);

        const fileUpdateForm = new FormData();
        fileUpdateForm.append("avatar", avatarFile);
        
        const response = await api.patch("/users/avatar", fileUpdateForm);

        user.avatar = response.data.avatar;
      }

      user.name = userUpdated.name;
      user.email = userUpdated.email;
      user.password =  userUpdated.password;
      user.old_password =  userUpdated.old_password;

      await api.put("/users", user);

      delete user.password;
      delete user.old_password;

      localStorage.setItem("@food-explorer:user", JSON.stringify(user));
      setData({user});

      alert("updated profile");
      
      setLoading(false);
    } catch (error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Could not update profile");
      }
      setLoading(false);
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@food-explorer:user");

    if (user) {
      setData({
        user: JSON.parse(user)
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      loading,
      setLoading,
      updateProfile,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };