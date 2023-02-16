import { Container } from "./style";

interface IButton {
  children: React.ReactNode;
  color: string;
  size: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, color, size, disabled, type }: IButton) => {
  return (
    <Container color={color} size={size} disabled={disabled} type={type}>
      {children}
    </Container>
  );
};

export { Button };
