import styled from "styled-components";

export const StyledCardForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 37rem;
  max-width: 37rem;
  padding: 4.2rem 2.2rem;
  background-color: var(--color-grey-3);
  align-items: center;
  gap: 2.6rem;
  & > input {
    width: 100%;
  }
  @media (max-width: 400px) {
    min-width: 90%;
    width: 90%;
    justify-content: center;
  }
`;