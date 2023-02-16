import styled from "styled-components";

const Container = styled.div`
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

  & > div:nth-child(1) {
    background-color: var(--color-brand-1);

    & > div {
      width: 100%;
      max-width: 384px;
      height: 127px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      & > h1 {
        font-size: 2rem;
        font-weight: 600;
      }

      & > p {
        font-size: 1.25rem;
        font-weight: 400;
      }
    }
  }

  & > div:nth-child(2) {
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
        font-size: 1.25rem;
        font-weight: 500;
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

  @media (max-width: 425px) {
    flex-direction: column;

    & > div:nth-child(1) {
      & > div {
        & > p {
          font-size: 1rem;
        }
      }
    }
  }
`;

export { Container };
