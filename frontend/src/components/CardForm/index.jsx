import { StyledCardForm } from "./styles";

export const CardForm = ({ children, onSubmit }) => {
  return <StyledCardForm onSubmit={onSubmit}>{children}</StyledCardForm>;
};