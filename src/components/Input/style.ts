import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 315px;
  height: 70px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  & > label {
    font-weight: 500;
    font-size: 0.875rem;

    & > span {
      color: var(--color-red);
    }
  }
`;

const InputContainer = styled.input`
  width: 100%;
  height: 38px;

  color: var(--color-grey-7);
  border: 1.5px solid var(--color-grey-4);
  background-color: var(--color-grey-1);

  padding: 8px;

  &:focus::placeholder {
    color: var(--transparent);
  }
`;

export { Container, InputContainer };
