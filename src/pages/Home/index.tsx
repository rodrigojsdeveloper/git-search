import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { IHome } from "../../interfaces";
import { Container } from "./style";
import { useState } from "react";
import * as yup from "yup";

const Home = ({ setUser }: IHome) => {
  const navigate = useNavigate();

  const [load, setLoad] = useState<boolean>(false);

  const [error, setError] = useState<boolean>(false);

  const schema = yup.object().shape({
    owner: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunc = (data: any) => {
    setLoad(true);

    api
      .get(`${data.owner}`)
      .then((res) => {
        setUser(res.data);

        sessionStorage.setItem("Git Search: username", res.data.login);

        navigate("/dashboard");
      })
      .catch((error) => {
        setError(true);

        console.error(error);
      })
      .finally(() => setLoad(false));
  };

  return (
    <Container>
      <div>
        <div>
          <h1>Git Search</h1>

          <p>Encontre e se conecte com profissionais de forma rápida e fácil</p>
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmitFunc)}>
          <h2>Procurar por um usuário</h2>

          <Input
            name="owner"
            register={register}
            error={error}
            onClick={() => setError(false)}
          />

          <Button color="colorHome" size="home" type="submit" disabled={load}>
            {load ? "Procurando..." : "Ver perfil do github"}
          </Button>
        </form>
      </div>
    </Container>
  );
};

export { Home };
