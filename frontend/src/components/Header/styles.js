import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  margin-top: 3rem;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1rem;
    & > p {
      margin-top: 1rem;
    }
  }
`;