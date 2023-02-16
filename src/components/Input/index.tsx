import { FieldValues, UseFormRegister } from "react-hook-form";
import { Container, InputContainer } from "./style";

interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  name: string;
  autoComplete?: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  label?: string;
  error?: any;
  required?: boolean | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}

const Input = ({
  type,
  name,
  register,
  autoComplete,
  error,
  placeholder,
  required,
  onChange,
  disabled,
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
        disabled={disabled}
      />
    </Container>
  );
};

export { Input };
