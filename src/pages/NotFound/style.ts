import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  max-width: 919px;
  min-height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  margin: 0 auto;

  & > div {
    width: 100%;
    max-width: 342px;

    & > h2 {
      font-weight: 700;
      font-size: 38px;
      line-height: 50px;

      margin-bottom: 20.07px;
    }

    & > p {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;

      margin-bottom: 9.33px;
    }

    & > button {
      height: 50px;
    }
  }

  @media (max-width: 850px) {
    & > svg {
      display: none;
    }
  }
`;
export { Container };
