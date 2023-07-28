import styled from "styled-components";

export const StyledCardTransaction = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  background-color: var(--color-grey-4);
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;