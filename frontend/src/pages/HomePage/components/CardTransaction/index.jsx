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
        <div className='cpf'>
          <Typography fonttype="title3" fontcolor="grey0">
            {transaction.cpf}
          </Typography>
        </div>
        <div className='description'>
          <Typography fonttype="headline" fontcolor="grey1">
            {transaction.description}
          </Typography>
        </div>
        <div className='date'>
          <Typography fonttype="headline" fontcolor="grey1">
            {transaction.date}
          </Typography>
        </div>
        <div className='point'>
          <Typography fonttype="headline" fontcolor="grey1">
            {transaction.point}
          </Typography>
        </div>
        <div className='value'>
          <Typography fonttype="headline" fontcolor="grey1">
            {transaction.value}
          </Typography>
        </div>
        <div className='status'>
          <Typography fonttype="headline" fontcolor="grey1">
            {transaction.status}
          </Typography>
        </div>
      </div>
    </StyledCardTransaction>
  );
};