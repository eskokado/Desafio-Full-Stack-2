import styled from "styled-components";

export const StyledInputPassword = styled.div`
  width: 100%;
  position: relative;
  & > input {
    margin-top: 1rem;
    margin-bottom: 0.7rem;
    width: 100%;
  }
  & > i {
    cursor: pointer;
    position: absolute;
    top: 2.5rem;
    right: 1rem;
  }
`;