import { useContext } from "react";
import { TransactionContext } from "../../../../contexts/TransactionContext";
import { Container } from "../../../../styles/container";
import { FormTransactionModal } from "../FormTransactionModal";
import { FormFilterTransactionModal } from "../FormFilterTransactionModal";
import { StyledModalWrapper } from "../FormTransactionModal/styles";
import { MainContent } from "../MainContent";
import { MainTop } from "../MainTop";
import { StyledMainHome } from "./styles";

export const MainHome = () => {
  const { showTransactionModal, showFilterTransactionModal } = useContext(TransactionContext);
  return (
    <>
      <StyledMainHome>
        <section>
          <Container>
            <MainTop />
            <MainContent />
          </Container>
        </section>
      </StyledMainHome>
      {showTransactionModal && (
        <StyledModalWrapper>
          <FormTransactionModal></FormTransactionModal>
        </StyledModalWrapper>
      )}
      {showFilterTransactionModal && (
        <StyledModalWrapper>
          <FormFilterTransactionModal></FormFilterTransactionModal>
        </StyledModalWrapper>
      )}
    </>
  );
};