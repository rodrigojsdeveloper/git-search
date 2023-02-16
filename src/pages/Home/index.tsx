import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { Container } from "./style";
import * as yup from "yup";

const Home = () => {
  const schema = yup.object().shape({
    owner: yup.string().required("Campo obrogatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunc = (data: any) => {
    api
      .get(`${data.owner}/repos`)
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error));
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
            autoComplete="off"
            error={errors.owner?.message}
            label="Usuário github"
            type="text"
            placeholder="Digite um usuário do github aqui..."
            required={true}
          />

          <Button color="colorHome" size="home" type="submit">
            Ver perfil do github
          </Button>
        </form>
      </div>
    </Container>
  );
};

export { Home };