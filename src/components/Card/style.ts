import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 381px;
  height: 243px;

  padding: 41px 27px;
  border: 2px solid var(--color-grey-3);

  & > h3,
  & > p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 24.2px;

    -webkit-line-clamp: 1;
    margin-bottom: 21px;
  }

  & > p {
    height: 63px;

    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: var(--color-grey-5);

    -webkit-line-clamp: 3;
    margin-bottom: 27px;
  }

  & > a {
    padding: 8px;

    color: var(--color-white);
    background-color: var(--transparent);
    border: 1px solid var(--color-grey-6);

    transition: 0.5s;

    &:hover {
      border-color: var(--color-brand-2);
      background-color: var(--color-brand-2);
    }
  }
`;

export { Container };
