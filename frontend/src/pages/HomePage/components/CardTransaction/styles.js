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
    & > .cpf {
      width: 15%;
      margin-left: 2rem;
    }
    & > .description {
      width: 35%;
      margin-left: 2rem;
    }
    & > .date {
      width: 15%;
      margin-left: 2rem;
    }
    & > .point {
      width: 15%;
      margin-left: 2rem;
    }
    & > .value {
      width: 15%;
      text-align: end;
      margin-left: 2rem;
    }
    & > .status {
      width: 15%;
      margin-left: 2rem;
    }
  }
`;
