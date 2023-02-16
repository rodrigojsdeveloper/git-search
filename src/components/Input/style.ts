import styled from "styled-components";

const Container = styled.input`
  & > label {
    font-weight: 500;
    font-size: 0.875rem;
    margin-bottom: 16px;

    & > span {
    }
  }
`;

const InputContainer = styled.input`
  height: 38px;
  width: 96.8%;
  background-color: var(--grey-1);
  border: 1px solid var(--grey-3);
  border-radius: var(--shadow-1);
  color: var(--color-grey-7);
  margin-bottom: 18px;
  padding-left: 12px;
`;

export { Container, InputContainer };
