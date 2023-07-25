import { Container, InputContainer } from "./style";
import { InputProps } from "../../interfaces";

const Input = ({ name, register, error, onClick }: InputProps) => {
  return (
    <Container>
      <label>
        Usuário GitHub {!!error && <span> - Usuário não encontrado</span>}
      </label>

      <InputContainer
        type="text"
        {...register(name)}
        autoComplete="off"
        placeholder="Digite um usuário do github aqui..."
        required={true}
        onClick={onClick}
      />
    </Container>
  );
};

export { Input };
