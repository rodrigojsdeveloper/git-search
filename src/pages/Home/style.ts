import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: row;

  & > div {
    width: 50%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 20px;
  }

  & > .header {
    background-color: var(--color-brand-1);

    & > .header-container {
      width: 100%;
      max-width: 431px;

      & > h1 {
        font-weight: 600;
        font-size: 32px;
        line-height: 48px;

        margin-bottom: 37px;
      }

      & > p {
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;

        @media (max-width: 425px) {
          font-size: 16px;
        }
      }
    }
  }

  & > .main {
    background-color: var(--color-grey-2);

    & > form {
      width: 100%;
      max-width: 315px;
      height: 198px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      & > h2 {
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;

        margin-bottom: 45px;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    & > div {
      width: 100%;
      height: 50vh;
    }
  }
`;

export { Container };
