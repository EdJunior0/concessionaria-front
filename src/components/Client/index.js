import React, { useLayoutEffect, useState } from "react";
import api from "../../services";
import { Container, Input, Wrapper } from "./style";

function ClientComponent() {
  const [clients, setClients] = useState([]);
  const [data, setData] = useState({
    cpf: "",
    nome: "",
    endereco: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const getAllClients = async () => {
    const response = await api.clients().getAllClients();
    console.log("sellers", response);
    setClients(response);
  };

  const saveClient = async (event) => {
    event.preventDefault();
    if (edit) {
      const response = await api.clients().updateClient(data);
      console.log("update", response);
    } else {
      const response = await api.clients().saveClient(data);
      console.log("seller", response);
    }
    setData({
      cpf: "",
      nome: "",
      endereco: "",
    });
    getAllClients();
  };

  const deleteClient = async (id) => {
    const response = await api.clients().deleteClient(id);
    console.log("delete", response);
    getAllClients();
  };

  useLayoutEffect(() => {
    getAllClients();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (event) => {
    setData({ ...data, [event?.target?.name]: event?.target?.value });
  };

  return (
    <Wrapper>
      <Container>
        <div class="header">
          <span>Cadastro de Clientes</span>
          <button onClick={openModal} id="new">
            Incluir
          </button>
        </div>

        <div class="divTable">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Endereço</th>
                <th class="acao">Editar</th>
                <th class="acao">Excluir</th>
              </tr>
            </thead>
            <tbody>
              {clients?.map((client) => (
                <>
                  <tr>
                    <td>{client.nome}</td>
                    <td>{client.cpf}</td>
                    <td>{client.endereco}</td>

                    <td class="acao">
                      <button
                        onClick={() => {
                          setData(client);
                          setEdit(true);
                          openModal();
                        }}
                      >
                        <i class="bx bx-edit"></i>
                      </button>
                    </td>
                    <td class="acao">
                      <button
                        onClick={() => {
                          deleteClient(client?.cpf);
                        }}
                      >
                        <i class="bx bx-trash"></i>
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>

        <div class={`modal-container ${isOpen ? `active` : ``} `}>
          <div class="modal">
            <form>
              <label for="Nome_cliente">Nome</label>
              <Input
                name="nome"
                value={data?.nome}
                onChange={handleChange}
                id="Nome_cliente"
                type="text"
                required
              />

              <label for="cpf_cliente">CPF</label>
              <Input
                name="cpf"
                value={data?.cpf}
                onChange={handleChange}
                id="cpf_cliente"
                type="number"
                required
              />

              <label for="end_cliente">Endereço</label>
              <Input
                name="endereco"
                value={data?.endereco}
                onChange={handleChange}
                id="end_cliente"
                type="text"
                required
              />

              <button
                onClick={async (e) => {
                  closeModal();
                  await saveClient(e);
                  setEdit(false);
                }}
                id="btnSalvar"
              >
                Salvar
              </button>
            </form>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

export default ClientComponent;
