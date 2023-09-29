import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  max-width: 784px;

  padding: 20px;
  margin: 0 auto;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 61px 0 70px;

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

        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  & > menu {
    display: grid;
    grid-template-columns: repeat(2, minmax(0px, 381px));
    grid-gap: 22px;
  }

  @media (max-width: 768px) {
    & > div {
      flex-direction: column;

      & > div {
        margin-bottom: 20px;
      }
    }

    & > menu {
      grid-template-columns: repeat(1, minmax(0px, 381px));

      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export { Container };
