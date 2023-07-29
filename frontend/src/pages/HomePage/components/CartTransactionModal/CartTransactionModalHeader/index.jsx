import { useContext } from "react";
import { TransactionContext } from "../../../../../contexts/TransactionContext";
import { Button } from "../../../../../styles/buttons";
import { Typography } from "../../../../../styles/typography";
import { StyledCartTransactionModalHeader } from "./styles";

export const CartTransactionModalHeader = () => {
  const { setShowCartTransactionModal, cartTransaction } = useContext(TransactionContext);
  return (
    <StyledCartTransactionModalHeader>
      <Typography fonttype="title3" fontcolor="grey0" fontweight="semibold">
        {"Carteira de aprovados"}
      </Typography>
      <Button buttoncolor="grey1" onClick={() => setShowCartTransactionModal(false)}>
        X
      </Button>
    </StyledCartTransactionModalHeader>
  );
};