import styled from "styled-components";

export const StyledFormFilterTransactionModalContent = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-3);
  width: 100%;
  padding: 1rem 2rem;
  gap: 1rem;
  & > div {
    display: flex;
    justify-content: space-between;
  }
  & > button {
    margin: 0;
  }
`;