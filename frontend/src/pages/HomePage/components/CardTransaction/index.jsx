import { Typography } from "../../../../styles/typography";
import { StyledCardTransaction } from "./styles";
import { useContext } from "react";
import { TransactionContext } from "../../../../contexts/TransactionContext";

export const CardTransaction = ({ transaction }) => {
  const { setShowTransactionModal, setTransaction } = useContext(TransactionContext);
  const handleShowModal = () => {
    setTransaction(transaction);
    setShowTransactionModal(true);
  };

  return (
    <StyledCardTransaction onClick={handleShowModal}>
      <div>
        <Typography fonttype="title3" fontcolor="grey0">
          {transaction.title}
        </Typography>
        <Typography fonttype="headline" fontcolor="grey1">
          {transaction.status}
        </Typography>
      </div>
    </StyledCardTransaction>
  );
};