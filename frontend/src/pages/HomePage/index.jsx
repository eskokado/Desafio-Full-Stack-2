import React, { useContext } from 'react'
import { StyledHomePage } from "./styles";
import { Container } from "../../styles/container";
import { UserContext } from '../../contexts/UserContext'
import { Navbar } from '../../components/Navbar'

export const HomePage = () => {
  const { onLogout, loading } = useContext(UserContext);

  if (loading) {
    return null;
  }

  return (
    <StyledHomePage>
      <section>
        <Container>
          <Navbar labelButton="Sair" onClick={onLogout} />
        </Container>
      </section>
      <section>
        <Container>
        </Container>
      </section>
    </StyledHomePage>
  )
}
