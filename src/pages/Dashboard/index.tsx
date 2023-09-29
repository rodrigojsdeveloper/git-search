import { sortByMostRecent } from "../../utils/formatDate";
import { IDashboard, IRepo } from "../../interfaces";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

const Dashboard = ({ user }: IDashboard) => {
  const token = sessionStorage.getItem("Git Search: username");

  const navigate = useNavigate();

  const [repos, setRepos] = useState<Array<IRepo>>([]);

  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    setLoad(true);

    api
      .get(`${token}/repos`)
      .then((res) => setRepos(res.data))
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  }, []);

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  }, []);

  const formattedRepos: IRepo[] = sortByMostRecent(repos);

  return (
    <Container>
      <div>
        <div>
          <img src={user.avatar_url} alt={user.login} />
          <h2>{user.name}</h2>
        </div>

        <Button
          color="grey"
          size="169px"
          onClick={() => {
            history.back();

            sessionStorage.removeItem("Git Search: username");
          }}
        >
          Trocar usuário
        </Button>
      </div>

      <menu>
        {formattedRepos.map((repo: IRepo) => (
          <Card repo={repo} key={repo.id} />
        ))}
      </menu>
    </Container>
  );
};

export { Dashboard };
