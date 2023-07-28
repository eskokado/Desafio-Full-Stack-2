/* eslint-disable default-case */
import { Link } from "react-router-dom";
import styled from "styled-components";
import { buttonstyle } from "./buttonstyle";
import { BaseButton } from "./components/BaseButton";

export const ButtonLink = styled(Link)`
  ${() => buttonstyle}
`;

export const Button = styled(BaseButton)`
  ${() => buttonstyle}
`;