import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@moviememos:user", JSON.stringify(user));
      localStorage.setItem("@moviememos:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert(" It was not possible to sign in");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@moviememos:user");
    localStorage.removeItem("@moviememos:token");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@moviememos:token");
    const user = localStorage.getItem("@moviememos:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}
export { AuthProvider, useAuth };
