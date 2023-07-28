import { Button } from "../../../../styles/buttons";
import { Typography } from "../../../../styles/typography";
import { StyledMainTop } from "./styles";
import { FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { TransactionContext } from "../../../../contexts/TransactionContext";

export const MainTop = () => {
  const { setShowTransactionModal, setTransaction } = useContext(TransactionContext);
  const handleShowModal = () => {
    setTransaction(null);
    setShowTransactionModal(true);
  };

  return (
    <>
      <StyledMainTop>
        <Typography fontweight="semibold" fontcolor="grey0" fonttype="title2">
          Transação
        </Typography>
        <Button buttonstyle="icon" buttoncolor="grey" onClick={handleShowModal}>
          <FaPlus />
        </Button>
      </StyledMainTop>
    </>
  );
};