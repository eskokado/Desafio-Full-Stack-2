import { useContext } from "react";
import { EmptyTransaction } from "../EmptyTransaction";
import { CardTransaction } from "../CardTransaction";
import { StyledCardListTransaction } from "./styles";
import { TransactionContext } from "../../../../contexts/TransactionContext";

export const CardListTransaction = () => {
  const { transactions } = useContext(TransactionContext);
  return (
    <StyledCardListTransaction>
      {transactions.length > 0 ? (
        transactions.map((transaction) => <CardTransaction key={transaction.id} transaction={transaction} />)
      ) : (
        <EmptyTransaction />
      )}
    </StyledCardListTransaction>
  );
};