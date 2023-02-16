import { Container } from "./style";

interface ICard {
  repo: any;
}

const Card = ({ repo }: ICard) => {
  return (
    <Container>
      <h3>{repo.name}</h3>

      <p>{repo.description}</p>

      <a href={repo.html_url} target="_blank">
        Repositório
      </a>
    </Container>
  );
};

export { Card };
