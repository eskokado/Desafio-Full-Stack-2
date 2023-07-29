/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect } from 'react'
import { StyledHomePage } from "./styles";
import { Container } from "../../styles/container";
import { UserContext } from '../../contexts/UserContext'
import { Navbar } from '../../components/Navbar'
import { Header } from '../../components/Header'
import { MainHome } from './components/MainHome'
import { TransactionContext } from '../../contexts/TransactionContext'

export const HomePage = () => {
  const { onLogout, loading } = useContext(UserContext);
  const { onListTransaction } = useContext(TransactionContext);

  if (loading) {
    return null;
  }

  useEffect(() => {
    const listTransaction = async () => {
      await onListTransaction()
    }
    listTransaction();
  }, []);

  return (
    <StyledHomePage>
      <section>
        <Container>
          <Navbar labelButton="Sair" onClick={onLogout} />
        </Container>
      </section>
      <section>
        <Container>
          <Header />
        </Container>
      </section>
      <MainHome />
    </StyledHomePage>
  )
}
