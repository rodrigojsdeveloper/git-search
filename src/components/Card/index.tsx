import { ICard } from "../../interfaces";
import { Container } from "./style";

const Card = ({ repo }: ICard) => {
  return (
    <Container>
      <h3>{repo.name}</h3>

      <p>{repo.description ? repo.description : "Sem descrição"}</p>

      <a href={repo.html_url} target="_blank">
        Repositório
      </a>
    </Container>
  );
};

export { Card };
