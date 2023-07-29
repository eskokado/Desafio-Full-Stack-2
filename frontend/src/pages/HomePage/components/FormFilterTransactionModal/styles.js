import styled from "styled-components";

export const StyledFormFilterTransactionModal = styled.section`
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-2);
  width: 50%;
  border-radius: 0.5rem;
  @media (max-width: 400px) {
    width: 100%;
    margin: 1rem;
  }
`;

export const StyledModalWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  @media (max-width: 400px) {
    padding: 1rem;
  }
`;