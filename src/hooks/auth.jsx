import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@movienotes:user", JSON.stringify(user));
      localStorage.setItem("@movienotes:token", token);

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
    localStorage.removeItem("@movienotes:user");
    localStorage.removeItem("@movienotes:token");

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);
        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@movienotes:user", JSON.stringify(user));

      setData({ user, token: data.token });
      alert("Profile updated successfully");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert(" It was not possible update profile");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@movienotes:token");
    const user = localStorage.getItem("@movienotes:user");

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
        updateProfile,
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
