import Link from "next/link";
import React, { useState } from "react";
import { Container, Input } from "./style";
import api from "../../services";
import { useRouter } from "next/router";

function RegistrationComponent() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  console.log("data", data);

  const handleChange = (event) => {
    setData({ ...data, [event?.target?.name]: event?.target?.value });
  };

  const handleSignUp = async () => {
    const response = await api.users().signUp({
      email: data?.email,
      senha: data?.password,
      nome: data?.name,
    });
    if (response?.email) {
      return router.push("/login");
    }
    window.alert("invalid!")
    console.log("response", response);
  };

  return (
    <Container>
      <div class="card">
        <h1>Cadastro</h1>

        <div id="msgErro"></div>
        <div id="msgSucesso"></div>

        <div class="label-float">
          <Input
            name="name"
            value={data?.name}
            onChange={handleChange}
            type="text"
            id="nome"
            paceholder=""
            required
          />
          <label id="labelnome" for="nome">
            Nome
          </label>
        </div>

        <div class="label-float">
          <Input
            name="email"
            value={data?.email}
            onChange={handleChange}
            type="text"
            id="email"
            paceholder="Email"
            required
          />
          <label id="labelemail" for="email">
            Email
          </label>
        </div>

        <div class="label-float">
          <Input
            name="password"
            value={data?.password}
            onChange={handleChange}
            type="password"
            id="senha"
            paceholder=""
            required
          />
          <label id="labelsenha" for="email">
            Senha
          </label>
        </div>

        <div class="label-float">
          <Input
            name="confirmPassword"
            value={data?.confirmPassword}
            onChange={handleChange}
            type="password"
            id="confirmsenha"
            paceholder=""
            required
          />
          <label id="labelconfirmsenha" for="confirmsenha">
            Confirmar Senha
          </label>
        </div>

        <div class="justify-center">
          <button onClick={handleSignUp}>Cadastrar</button>
        </div>

        <div class="justify-center">
          <hr />
        </div>

        <p>
          Já possui uma conta?
          <Link href="/login">
            <a style={{ margin: "0 0 0 10px" }}>Login</a>
          </Link>
        </p>
      </div>
    </Container>
  );
}

export default RegistrationComponent;
