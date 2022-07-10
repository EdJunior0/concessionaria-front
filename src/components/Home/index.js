import Link from "next/link";
import React from "react";
import { Container } from "./style";

function HomeComponent() {
  return (
    <Container>
      <div class="card">
        <h1>Seja Bem Vindo!</h1>

        <div class="justify-center">
          <Link href="/login">
            <p>
              <button>Entrar</button>
            </p>
          </Link>
        </div>

        <div class="justify-center">
          <Link href="/registration">
            <p>
              <button>Cadastrar</button>
            </p>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default HomeComponent;
