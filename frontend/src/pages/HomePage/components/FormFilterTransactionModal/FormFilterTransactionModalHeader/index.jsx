import { useContext } from "react";
import { TransactionContext } from "../../../../../contexts/TransactionContext";
import { Button } from "../../../../../styles/buttons";
import { Typography } from "../../../../../styles/typography";
import { StyledFormFilterTransactionModalHeader } from "./styles";

export const FormFilterTransactionModalHeader = () => {
  const { setShowFilterTransactionModal, transaction } = useContext(TransactionContext);
  return (
    <StyledFormFilterTransactionModalHeader>
      <Typography fonttype="title3" fontcolor="grey0" fontweight="semibold">
        {transaction ? "Transação Detalhes" : "Cadastrar Transação"}
      </Typography>
      <Button buttoncolor="grey1" onClick={() => setShowFilterTransactionModal(false)}>
        X
      </Button>
    </StyledFormFilterTransactionModalHeader>
  );
};