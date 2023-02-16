import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface IDashboard {
  user: any;
}

const Dashboard = ({ user }: IDashboard) => {
  const token = sessionStorage.getItem("Git Search: username");

  const navigate = useNavigate();

  const [repos, setRepos] = useState<Array<boolean>>([]);

  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    api
      .get(`${token}/repos`)
      .then((res) => setRepos(res.data))
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  }, []);

  if (!token) {
    return navigate("/");
  }

  return (
    <Container>
      <div>
        <div>
          <img src={user.avatar_url} alt={user.login} />
          <h2>{user.name}</h2>
        </div>

        <Button
          color="colorDashboard"
          size="dashboard"
          onClick={() => {
            history.back();

            sessionStorage.removeItem("Git Search: name");
          }}
        >
          Trocar usuário
        </Button>
      </div>

      <menu>
        {repos.map((repo) => (
          <Card repo={repo} />
        ))}
      </menu>
    </Container>
  );
};

export { Dashboard };
