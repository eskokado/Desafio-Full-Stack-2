import { css } from "styled-components";

export const buttonstyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 0.4rem;
  text-decoration: none;

  &:hover {
    filter: brightness(1.2);
  }

  ${({ buttonwidth }) => {
    if (buttonwidth === "max") {
      return css`
        width: 100%;
      `;
    }
  }}

  ${({ buttonstyle }) => {
    if (buttonstyle === "default") {
      return css`
        padding: 0 2.2rem;
        height: 4.8rem;
      `;
    } else if (buttonstyle === "small") {
      return css`
        padding: 0 1.6rem;
        height: 3.2rem;
      `;
    } else if (buttonstyle === "icon") {
      return css`
        height: 3.2rem;
      `;
    }
  }}

  ${({ buttoncolor }) => {
    if (buttoncolor === "primary") {
      return css`
        background: var(--color-primary);
        border: 0.625rem solid var(--color-primary);
        color: var(--color-text);
        &:hover {
          background: var(--color-primary-50);
          border: 0.625rem solid var(--color-primary-50);
          color: var(--color-text);
        }
      `;
    } else if (buttoncolor === "primary50") {
      return css`
        background: var(--color-primary-50);
        border: 0.625rem solid var(--color-primary-50);
        color: var(--color-text);
        &:hover {
          background: var(--color-primary);
          border: 0.625rem solid var(--color-primary);
          color: var(--color-text);
        }
      `;
    } else if (buttoncolor === "primaryDisable") {
      return css`
        background: var(--color-primary-disable);
        border: 0.625rem solid var(--color-primary-disable);
        color: var(--color-text);
      `;
    } else if (buttoncolor === "disabled") {
      return css`
        background: var(--color-grey-1);
        border: 0.625rem solid var(--color-grey-1);
        color: var(--color-text);

        &:hover {
          background: var(--color-grey-2);
          border: 0.625rem solid var(--color-grey-2);
          color: var(--color-text);
        }
      `;
    } else if (buttoncolor === "grey") {
      return css`
        background: var(--color-grey-3);
        border: 0.625rem solid var(--color-grey-3);
        color: var(--color-text);

        &:hover {
          background: var(--color-grey-2);
          border: 0.625rem solid var(--color-grey-2);
          color: var(--color-text);
        }
      `;
    } else if (buttoncolor === "grey1") {
      return css`
        background: var(--color-grey-2);
        border: 0.625rem solid var(--color-grey-2);
        color: var(--color-text);

        &:hover {
          background: var(--color-grey-3);
          border: 0.625rem solid var(--color-grey-3);
          color: var(--color-text);
        }
      `;
    }
  }}
`;