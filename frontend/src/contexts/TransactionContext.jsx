/* eslint-disable no-use-before-define */
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TransactionContext = createContext()

export const TransactionProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [transaction, setTransaction] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [showFilterTransactionModal, setShowFilterTransactionModal] = useState(false);
  const { user } = useContext(UserContext);


  useEffect(() => {
    setTransactions(user?.transactions ? user.transactions : []);
  }, [user]);


  const onListTransaction = async (data) => {
    const token = localStorage.getItem("@NEX_TOKEN");
    api.defaults.headers.user_access_token = `${token}`;
    setLoading(true);
    try {
      const response = await api.get("/transactions", { params: data });
      setTransactions(response.data.transactions);
    } catch (error) {
      const notify = () => toast.error("Ocorreu um erro ao consultar transações");
      notify();
    } finally {
      setLoading(false);
    }
  };

  const onCreateTransaction = async (data) => {
    const token = localStorage.getItem("@NEX_TOKEN");
    api.defaults.headers.user_access_token = `${token}`;
    setLoading(true);
    try {
      await toast.promise(api.post("/transactions", data), {
        pending: "Salvando a transação",
        success: "Transação salvo com sucesso!",
      });
      await onListTransaction()
    } catch (error) {
      const notify = () => toast.error("Ocorreu um erro ao cadastrar");
      notify();
    } finally {
      setLoading(false);
    }
  };

  const onUpdateTransaction = async (data) => {
    const token = localStorage.getItem("@NEX_TOKEN");
    api.defaults.headers.user_access_token = `${token}`;
    setLoading(true);
    try {
      const token = localStorage.getItem("@NEX_TOKEN");
      api.defaults.headers.user_access_token = `${token}`;
      await toast.promise(api.put(`/transactions/${transaction.id}`, data), {
        pending: "Atualizando a transação",
        success: "Transação alterado com sucesso!",
      });
      await onListTransaction()
    } catch (error) {
      const notify = () => toast.error("Ocorreu um erro ao atualizar");
      notify();
    } finally {
      setLoading(false);
    }
  };

  const onRemoveTransaction = async (id) => {
    const token = localStorage.getItem("@NEX_TOKEN");
    api.defaults.headers.user_access_token = `${token}`;
    setLoading(true);
    try {
      await toast.promise(api.delete(`/transactions/${id}`), {
        pending: "Deletando a transação",
        success: "Transação deletado com sucesso!",
      });
      await onListTransaction()
    } catch (error) {
      const notify = () => toast.error("Ocorreu um erro ao deletar");
      notify();
    } finally {
      setLoading(false);
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        loading,
        showTransactionModal,
        showFilterTransactionModal,
        transaction,
        setTransaction,
        transactions,
        setTransactions,
        setShowTransactionModal,
        setShowFilterTransactionModal,
        onCreateTransaction,
        onUpdateTransaction,
        onRemoveTransaction,
        onListTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );

}