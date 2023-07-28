import { useContext } from "react";
import { TransactionContext } from "../../../../../contexts/TransactionContext";
import { Button } from "../../../../../styles/buttons";
import { Typography } from "../../../../../styles/typography";
import { StyledFormTransactionModalHeader } from "./styles";

export const FormTransactionModalHeader = () => {
  const { setShowTransactionModal, transaction } = useContext(TransactionContext);
  return (
    <StyledFormTransactionModalHeader>
      <Typography fonttype="title3" fontcolor="grey0" fontweight="semibold">
        {transaction ? "Transação Detalhes" : "Cadastrar Transação"}
      </Typography>
      <Button buttoncolor="grey1" onClick={() => setShowTransactionModal(false)}>
        X
      </Button>
    </StyledFormTransactionModalHeader>
  );
};