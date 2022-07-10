import React, { useLayoutEffect, useState } from "react";
import api from "../../services";
import { Container, Input, Wrapper } from "./style";

function SellerComponent() {
  const [sellers, setSellers] = useState([]);
  const [data, setData] = useState({
    nome: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const getAllSellers = async () => {
    const response = await api.sellers().getAllSellers();
    console.log("sellers", response);
    setSellers(response);
  };

  const saveSeller = async (event) => {
    event.preventDefault();
    if (edit) {
      const response = await api.sellers().updateSeller(data);
      console.log("update", response);
    } else {
      const response = await api.sellers().saveSeller(data);
      console.log("seller", response);
    }
    setData({
      nome: "",
    });
    getAllSellers();
  };

  const deleteSeller = async (id) => {
    const response = await api.sellers().deleteSeller(id);
    console.log("delete", response);
    getAllSellers();
  };

  useLayoutEffect(() => {
    getAllSellers();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setData({
      nome: "",
    });
  };

  const handleChange = (event) => {
    setData({ ...data, [event?.target?.name]: event?.target?.value });
  };

  return (
    <Wrapper>
      <Container>
        <div class="header">
          <span>Cadastro de Vendedores</span>
          <button onClick={openModal} id="new">
            Adicionar
          </button>
        </div>

        <div class="divTable">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Codigo do vendedor</th>
                <th class="acao">Editar</th>
                <th class="acao">Excluir</th>
              </tr>
            </thead>
            <tbody>
              {sellers?.map((seller) => (
                <>
                  <tr>
                    <td>{seller.nome}</td>
                    <td>{seller.cod_vendedor}</td>

                    <td class="acao">
                      <button
                        onClick={() => {
                          setData(seller);
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
                          deleteSeller(seller?.cod_vendedor);
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
            <form style={{ width: "100%" }}>
              <label for="Nome_vend">Nome</label>
              <Input
                name="nome"
                value={data?.nome}
                onChange={handleChange}
                id="Nome_vend"
                type="text"
                required
              />

              <button
                onClick={async (event) => {
                  closeModal();
                  await saveSeller(event);
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

export default SellerComponent;
