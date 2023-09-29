import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 315px;
  height: 70px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 20px;

  & > label {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;

    & > span {
      color: var(--color-red);
    }
  }
`;

const InputContainer = styled.input`
  width: 100%;
  height: 38px;

  background-color: var(--color-grey-1);
  border: 1.5px solid var(--color-grey-4);

  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: var(--color-white);

  padding: 8px 13px;

  &:focus::placeholder {
    color: var(--transparent);
  }
`;

export { Container, InputContainer };
