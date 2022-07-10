import React, { useLayoutEffect, useState } from "react";
import api from "../../services";
import { Container, Input, Wrapper } from "./style";

function SaleComponent() {
  const [sales, setSales] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [clients, setClients] = useState([]);
  const [data, setData] = useState({
    cod_vendedor: "",
    cpf_cliente: "",
    cod_veiculo: "",
    data_venda: "",
  });

  console.log("data", data);

  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const getAllSales = async () => {
    const response = await api.sales().getAllSales();
    console.log("Sales", response);
    setSales(response);
  };

  const getData = async () => {
    const clients = await api.clients().getAllClients();
    const sellers = await api.sellers().getAllSellers();
    const vehicles = await api.vehicle().getAllVehicles();
    setClients(clients);
    setSellers(sellers);
    setVehicles(vehicles);
  };

  const saveSale = async (event) => {
    event.preventDefault();
    if (edit) {
      const response = await api.sales().updateSale(data);
      console.log("update", response);
    } else {
      const response = await api.sales().saveSale(data);
      console.log("Sale", response);
    }
    setData({
      cod_vendedor: "",
      cpf_cliente: "",
      cod_veiculo: "",
      data_venda: "",
    });
    getAllSales();
  };

  const deleteSale = async (id) => {
    const response = await api.sales().deleteSale(id);
    console.log("delete", response);
    getAllSales();
  };

  useLayoutEffect(() => {
    getAllSales();
    getData();
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
          <span>Vendas</span>
          <button onClick={openModal} id="new">
            Adicionar
          </button>
        </div>

        <div class="divTable">
          <table>
            <thead>
              <tr>
                <th>Código do vendedor</th>
                <th>Cpf do cliente</th>
                <th>Código do carro</th>
                <th>Data da venda</th>
                <th class="acao">Editar</th>
                <th class="acao">Excluir</th>
              </tr>
            </thead>
            <tbody>
              {sales?.map((sale) => (
                <>
                  <tr>
                    <td>{sale.vendedor_fk_cod_vendedor}</td>
                    <td>{sale.cliente_fk_cpf}</td>
                    <td>{sale.veiculo_fk_cod_veiculo}</td>
                    <td>{sale.data_venda}</td>

                    <td class="acao">
                      <button
                        onClick={() => {
                          setData({
                            cod_vendedor: sale?.vendedor_fk_cod_vendedor,
                            cpf_cliente: sale?.cliente_fk_cpf,
                            cod_veiculo: sale?.veiculo_fk_cod_veiculo,
                            data_venda: sale?.data_venda,
                          });
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
                          deleteSale(sale?.veiculo_fk_cod_veiculo);
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
              <label for="tipo_vendedor">Vendedor</label>
              <br />
              <select
                name="cod_vendedor"
                value={data?.cod_vendedor}
                onChange={handleChange}
                id="tipo_vendedor"
              >
                {sellers.map((seller) => {
                  return (
                    <>
                      <option value={seller.cod_vendedor}>{seller.nome}</option>
                    </>
                  );
                })}
              </select>
              <br />
              <br />

              <label for="tipo_cliente">Cliente</label>
              <br />
              <select
                name="cpf_cliente"
                value={data?.cpf_cliente}
                onChange={handleChange}
                id="tipo_cliente"
              >
                {clients.map((client) => {
                  return (
                    <>
                      <option value={client.cpf}>{client.nome}</option>
                    </>
                  );
                })}
              </select>
              <br />
              <br />

              <label for="tipo_carro">Veiculo</label>
              <br />
              <select
                name="cod_veiculo"
                value={data?.cod_veiculo}
                onChange={handleChange}
                id="tipo_carro"
              >
                {vehicles.map((client) => {
                  return (
                    <>
                      <option value={client.cod_veiculo}>
                        {client.modelo}
                      </option>
                    </>
                  );
                })}
              </select>
              <br />
              <br />

              <label for="data_venda">Data da venda</label>
              <Input
                name="data_venda"
                value={data?.data_venda}
                onChange={handleChange}
                id="data_venda"
                required
              />
              <button
                onClick={async (event) => {
                  closeModal();
                  await saveSale(event);
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

export default SaleComponent;
