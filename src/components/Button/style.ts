import styled, { css } from "styled-components";

interface IButtonStyled {
  color: string;
  size: string;
}

const Container = styled.button<IButtonStyled>`
  width: 100%;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  transition: 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-grey-7);

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ size }) => {
    switch (size) {
      case "home":
        return css`
          height: 38px;
          max-width: 315px;
        `;

      case "dashboard":
        return css`
          padding: 8px 16px;
        `;

      default:
        return false;
    }
  }}
  ${({ color }) => {
    switch (color) {
      case "colorHome":
        return css`
          background-color: var(--color-brand-1);
          border: 1.5px solid var(--color-brand-1);

          :hover {
            background-color: var(--color-brand-2);
            border: 1.5px solid var(--color-brand-2);
          }
        `;

      case "colorDashboard":
        return css`
          background-color: var(--color-grey-4);
          border: 1.5px solid var(--color-grey-4);

          :hover {
            background-color: var(--color-grey-5);
            border: 1.5px solid var(--color-grey-5);
          }
        `;

      default:
        return false;
    }
  }}
`;

export { Container };
