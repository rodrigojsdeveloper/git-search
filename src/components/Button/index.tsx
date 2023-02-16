import { Container } from "./style";

interface IButton {
  children: React.ReactNode;
  color: string;
  size: string;
}

const Button = ({ children, color, size }: IButton) => {
  return (
    <Container color={color} size={size}>
      {children}
    </Container>
  );
};

export { Button };
