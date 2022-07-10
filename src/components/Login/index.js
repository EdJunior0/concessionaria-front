import Link from "next/link";
import React, { useState } from "react";
import { Container, Input } from "./style";
import api from "../../services";
import { Router, useRouter } from "next/router";

function LoginComponent() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  console.log("data", data);

  const handleChange = (event) => {
    setData({ ...data, [event?.target?.name]: event?.target?.value });
  };

  const handleLogin = async () => {
    const response = await api.users().signIn({
      email: data?.email,
      senha: data?.password,
    });
    if (response?.email) {
      return router.push("/choice");
    }
    window.alert("User or password invalid");
    console.log("response", response);
  };

  return (
    <Container>
      <div class="card">
        <h1>Entrar</h1>

        <div id="msgErro"></div>
        <div id="msgSucesso"></div>

        <div class="label-float">
          <Input
            name="email"
            value={data?.email}
            onChange={handleChange}
            type="text"
            id="email"
            paceholder=""
            required
          />
          <label id="emaillabel" for="email">
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
          <label id="senhalabel" for="senha">
            Senha
          </label>
        </div>

        <div class="justify-center">
          <button onClick={handleLogin}>Entrar</button>
        </div>

        <div class="justify-center">
          <hr />
        </div>

        <p>
          Não tem uma conta?
          <Link href="/registration">
            <a style={{ margin: "0 0 0 10px" }}>Cadastre-se</a>
          </Link>
        </p>
      </div>
    </Container>
  );
}

export default LoginComponent;
