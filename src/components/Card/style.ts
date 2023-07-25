import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 360px;
  height: 212px;

  padding: 40px 20px;
  border: 2px solid var(--color-grey-3);

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
    font-weight: 500;
    font-size: 1.25rem;

    -webkit-line-clamp: 1;
  }

  & > p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 20px;
    color: var(--color-grey-5);

    -webkit-line-clamp: 2;
  }

  & > a {
    padding: 8px;

    color: var(--color-grey-7);
    background-color: var(--transparent);
    border: 1px solid var(--color-grey-6);

    transition: 0.5s;

    :hover {
      border-color: var(--color-brand-2);
      background-color: var(--color-brand-2);
    }
  }
`;

export { Container };
