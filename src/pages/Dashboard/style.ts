import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 800px;

  margin: 0 auto;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 65px 0;

    & > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      & > img {
        width: 80px;
        height: 80px;
        border: 2px solid var(--color-brand-2);
        border-radius: 150px;
        margin-right: 20px;
      }

      & > h2 {
        font-size: 1.5rem;
        font-weight: 600;
      }
    }
  }

  & > menu {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
  }
`;

export { Container };
