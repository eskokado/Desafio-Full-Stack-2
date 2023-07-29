import { CartTransactionModalContent } from "./CartTransactionModalContent";
import { CartTransactionModalHeader } from "./CartTransactionModalHeader";
import { StyledCartTransactionModal } from "./styles";

export const CartTransactionModal = () => {
  return (
    <StyledCartTransactionModal>
      <CartTransactionModalHeader />
      <CartTransactionModalContent />
    </StyledCartTransactionModal>
  );
};
