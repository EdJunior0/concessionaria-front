import Link from "next/link";
import React from "react";
import { Container } from "./style";

function ChoiceComponent() {
  return (
    <Container>
      <div class="card">
        <h1>Escolha a opção que deseja:</h1>

        <div class="justify-center">
          <Link href="/vehicle">
            <p>
              <button>Veiculos</button>
            </p>
          </Link>
        </div>

        <div class="justify-center">
          <Link href="/seller">
            <p>
              <button>Vendedores</button>
            </p>
          </Link>
        </div>

        <div class="justify-center">
          <Link href="/client">
            <p>
              <button>Clientes</button>
            </p>
          </Link>
        </div>

        <div class="justify-center">
          <Link href="/sale">
            <p>
              <button>Vendas</button>
            </p>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default ChoiceComponent;
