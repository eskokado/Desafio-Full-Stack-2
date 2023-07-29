/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    autoLogin();
  }, []);

  const autoLogin = async () => {
    setLoading(true);
    const token = localStorage.getItem("@NEX_TOKEN");
    if (!token) {
      setLoading(false);
      return;
    }
    try {
      const { data } = await api.get("users/me", {
        headers: {
          user_access_token: `${token}`,
        },
      });
      setUser(data.user);
      navigate("/home");
    } catch (error) {
      localStorage.removeItem("@NEX_TOKEN");
      localStorage.removeItem("@NEX_USERID");
    } finally {
      setLoading(false);
    }
  };

  const onLogout = () => {
    localStorage.removeItem("@NEX_TOKEN");
    localStorage.removeItem("@NEX_USERID");
    setUser(null);
    navigate("/login");
  };

  const onLogin = async (data) => {
    try {
      setLoading(true);
      const response = await toast.promise(api.post("auth/login", data), {
        pending: "Efetuando login pendente...",
        success: "Login efetuado com sucesso",
      });
      localStorage.setItem("@NEX_TOKEN", response.data.token);
      localStorage.setItem("@NEX_USERID", response.data.user.id);
      setUser(response.data.user);
      const loggedSuccess = () => navigate("/home");
      loggedSuccess();
    } catch (error) {
      const notify = () => toast.error("Falha ao logar!!!");
      notify();
    } finally {
      setLoading(false);
    }
  };

  const onRegister = async (data) => {
    try {
      setLoading(true);
      await toast.promise(api.post("users/create", data), {
        pending: "Cadastrando novo usuário...",
        success: "Novo usuário cadastrado com sucesso",
      });
      const registeredSuccess = () => navigate("/login");
      registeredSuccess();
    } catch (error) {
      const notify = () => toast.error("Não foi possível cadastrar o usuário");
      notify();
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider    
      value={{
        loading,
        user,
        autoLogin,
        onLogout,
        onLogin,
        onRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};