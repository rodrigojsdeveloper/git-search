import { Container } from "./style";

interface IButton {
  children: React.ReactNode;
  color: string;
  size: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  children,
  color,
  size,
  disabled,
  type,
  onClick,
}: IButton) => {
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
