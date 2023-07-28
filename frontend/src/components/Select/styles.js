import styled from "styled-components";

export const StyledSelect = styled.select`
  padding: 0 1.6rem;
  font-size: 1.625rem;
  border-radius: 0.4rem;
  border-color: 0.122rem solid var(--color-grey-2);
  background-color: var(--color-grey-2);
  color: var(--color-text);
  height: 4.8rem;
  &:hover {
    filter: brightness(1.2);
  }
`;