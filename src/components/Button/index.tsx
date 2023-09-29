import { IButtonProps } from "../../interfaces";
import { Container } from "./style";

const Button = ({
  children,
  color,
  size,
  disabled,
  type,
  onClick,
}: IButtonProps) => {
  return (
    <Container
      color={color}
      size={size}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export { Button };
