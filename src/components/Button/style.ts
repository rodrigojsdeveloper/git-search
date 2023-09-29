import { IButtonStyle } from "../../interfaces";
import styled, { css } from "styled-components";

const Container = styled.button<IButtonStyle>`
  width: 100%;
  height: 38px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: var(--color-white);

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ size }) => {
    switch (size) {
      case "169px":
        return css`
          max-width: 169px;
        `;

      default:
        return false;
    }
  }}

  ${({ color }) => {
    switch (color) {
      case "pink":
        return css`
          background-color: var(--color-brand-1);
          border: 1.5px solid var(--color-brand-1);

          &:hover {
            background-color: var(--color-brand-2);
            border: 1.5px solid var(--color-brand-2);
          }

          &:active {
            background-color: var(--color-brand-active);
            border: 1.5px solid var(--color-brand-active);
          }
        `;

      case "grey":
        return css`
          background-color: var(--color-grey-3);
          border: 1.5px solid var(--color-grey-3);

          &:hover {
            background-color: var(--color-grey-4);
            border: 1.5px solid var(--color-grey-4);
          }
        `;

      default:
        return false;
    }
  }}
`;

export { Container };
