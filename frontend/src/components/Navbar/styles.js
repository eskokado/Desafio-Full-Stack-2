import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 37rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  @media (max-width: 400px) {
    min-width: 90%;
    width: 90%;
  }
`;