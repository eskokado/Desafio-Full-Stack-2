import { FormFilterTransactionModalContent } from "./FormFilterTransactionModalContent";
import { FormFilterTransactionModalHeader } from "./FormFilterTransactionModalHeader";
import { StyledFormFilterTransactionModal } from "./styles";

export const FormFilterTransactionModal = () => {
  return (
    <StyledFormFilterTransactionModal>
      <FormFilterTransactionModalHeader />
      <FormFilterTransactionModalContent />
    </StyledFormFilterTransactionModal>
  );
};
