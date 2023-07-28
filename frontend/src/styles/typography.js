/* eslint-disable default-case */
import styled, { css } from "styled-components";
import { BaseFont } from "./components/BaseFont";

export const Typography = styled(BaseFont)`
  ${({ fontweight }) => {
    if (fontweight === "body") {
      return css`
        font-weight: 700;
      `;
    } else if (fontweight === "semibody") {
      return css`
        font-weight: 600;
      `;
    } else if (fontweight === "medium") {
      return css`
        font-weight: 500;
      `;
    } else {
      return css`
        font-weight: 400;
      `;
    }
  }}
  ${({ fontstyle }) => {
    if (fontstyle === "italic") {
      return css`
        font-style: italic;
      `;
    } else {
      return css`
        font-style: normal;
      `;
    }
  }}
  ${({ fontcolor }) => {
    if (fontcolor === "primary")
      return css`
        color: var(--color-primary);
      `;
    else if (fontcolor === "primary50")
      return css`
        color: var(--color-primary-50);
      `;
    else if (fontcolor === "primaryDisable")
      return css`
        color: var(--color-primary-disable);
      `;
    else if (fontcolor === "grey4")
      return css`
        color: var(--color-grey-4);
      `;
    else if (fontcolor === "grey3")
      return css`
        color: var(--color-grey-3);
      `;
    else if (fontcolor === "grey2")
      return css`
        color: var(--color-grey-2);
      `;
    else if (fontcolor === "grey1")
      return css`
        color: var(--color-grey-1);
      `;
    else if (fontcolor === "grey0")
      return css`
        color: var(--color-grey-0);
      `;
    else if (fontcolor === "success")
      return css`
        color: var(--color-success);
      `;
    else if (fontcolor === "warning")
      return css`
        color: var(--color-warning);
      `;
    else if (fontcolor === "negative")
      return css`
        color: var(--color-negative);
      `;
    else if (fontcolor === "red")
      return css`
        color: var(--color-red);
      `;
    else
      return css`
        color: #ffffff;
      `;
  }}
  ${({ fonttype }) => {
    if (fonttype === "title1") {
      return css`
        font-size: 1.8rem;
        line-height: 2.8rem;
      `;
    } else if (fonttype === "title2") {
      return css`
        font-size: 1.6rem;
        line-height: 2.6rem;
      `;
    } else if (fonttype === "title3") {
      return css`
        font-size: 1.4rem;
        line-height: 2.4rem;
      `;
    } else if (fonttype === "headline") {
      return css`
        font-size: 1.2rem;
        line-height: 1.8rem;
      `;
    } else if (fonttype === "helper") {
      return css`
        font-size: 1rem;
        line-height: 1.6rem;
      `;
    }
  }}
`;