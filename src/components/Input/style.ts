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
    }
  }
`;

const InputContainer = styled.input`
  width: 100%;
  height: 38px;

  background-color: var(--color-grey-1);
  border: 1.5px solid var(--color-grey-4);
  border-radius: 4px;
  color: var(--color-grey-7);
  padding: 8px;
`;

export { Container, InputContainer };
