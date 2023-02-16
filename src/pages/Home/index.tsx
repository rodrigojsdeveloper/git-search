import { Button } from "../../components/Button";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <div>
        <div>
          <h1>Git Search</h1>

          <p>Encontre e se conecte com profissionais de forma rápida e fácil</p>
        </div>
      </div>

      <div>
        <h2>Procurar por um usuário</h2>

        <Button color="colorHome" size="home">
          Ver perfil do github
        </Button>
      </div>
    </Container>
  );
};

export { Home };
