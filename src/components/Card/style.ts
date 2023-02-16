import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 390px;
  height: 212px;

  padding: 40px 20px;
  border: 2px solid var(--color-grey-3);
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 20px;

  & > h3,
  & > p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > h3 {
    font-size: 1.25rem;
    font-weight: 500;

    -webkit-line-clamp: 1;
  }

  & > p {
    font-weight: 400;
    font-size: 1rem;
    color: var(--color-grey-5);

    -webkit-line-clamp: 2;
  }

  & > a {
    border-radius: 4px;
    padding: 8px;

    background-color: transparent;
    border: 1px solid var(--color-grey-6);
    color: var(--color-grey-7);

    transition: 0.5s;

    :hover {
      background-color: var(--color-brand-2);
      border-color: var(--color-brand-2);
    }
  }
`;

export { Container };
