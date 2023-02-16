import { Container, InputContainer } from "./style";
import { InputProps } from "../../interfaces";

const Input = ({
  type,
  name,
  register,
  autoComplete,
  error,
  placeholder,
  required,
  onChange,
  label,
}: InputProps) => {
  return (
    <Container>
      <label>
        {label} {!!error && <span> - {error}</span>}
      </label>

      <InputContainer
        type={type}
        {...register(name)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </Container>
  );
};

export { Input };
