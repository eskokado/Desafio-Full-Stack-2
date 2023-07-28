import { FormTransactionModalContent } from "./FormTransactionModalContent";
import { FormTransactionModalHeader } from "./FormTransactionModalHeader";
import { StyledFormTransactionModal } from "./styles";

export const FormTransactionModal = () => {
  return (
    <StyledFormTransactionModal>
      <FormTransactionModalHeader />
      <FormTransactionModalContent />
    </StyledFormTransactionModal>
  );
};
