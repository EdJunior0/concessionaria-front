import React, { useLayoutEffect, useState } from "react";
import api from "../../services";
import { Container, Input, Wrapper } from "./style";
import Head from "next/head";

function VehicleComponent() {
  const [vehicles, setVehicles] = useState([]);
  const [data, setData] = useState({
    modelo: "",
    preco: "",
    car_type: "carro",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  console.log("isOpen", isOpen);
  console.log("data", data);

  const getAllVehicles = async () => {
    const response = await api.vehicle().getAllVehicles();
    setVehicles(response);
    console.log("all vehicles", response);
  };

  const deleteVehicle = async (id) => {
    const response = await api.vehicle().deleteVehicle(id);
    console.log("delete", response);
    getAllVehicles();
  };

  const saveVehicle = async (event) => {
    event.preventDefault();
    if (edit) {
      const response = await api.vehicle().updateVehicle(data);
      console.log("update", response);
    } else {
      const response = await api.vehicle().saveVehicle(data);
      console.log("vehicle", response);
    }
    getAllVehicles();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setData({
      modelo: "",
      preco: "",
      car_type: "carro",
    });
  };

  const handleChange = (event) => {
    setData({ ...data, [event?.target?.name]: event?.target?.value });
  };

  useLayoutEffect(() => {
    getAllVehicles();
  }, []);

  return (
    <Wrapper>
      <Container>
        <div class="header">
          <span>Cadastro de Veiculos</span>
          <button onClick={openModal} id="new">
            Incluir
          </button>
        </div>

        <div class="divTable">
          <table>
            <thead>
              <tr>
                <th>Modelo</th>
                <th>Preço</th>
                <th>Função</th>
                <th class="acao">Editar</th>
                <th class="acao">Excluir</th>
              </tr>
            </thead>
            <tbody>
              {vehicles?.map((vehicle) => {
                return (
                  <>
                    <tr>
                      <td>{vehicle.modelo}</td>
                      <td>R$ {vehicle.preco}</td>
                      <td>{vehicle.car_type}</td>

                      <td class="acao">
                        <button
                          onClick={() => {
                            setData(vehicle);
                            openModal();
                            setEdit(true);
                          }}
                        >
                          <i class="bx bx-edit"></i>
                        </button>
                      </td>
                      <td class="acao">
                        <button
                          onClick={async () =>
                            await deleteVehicle(vehicle.cod_veiculo)
                          }
                        >
                          <i class="bx bx-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>

        <div class={`modal-container ${isOpen ? `active` : ``}`}>
          <div class="modal">
            <form>
              <label for="Modelo_veiculo">Modelo</label>
              <Input
                name="modelo"
                value={data?.modelo}
                onChange={handleChange}
                id="Modelo_veiculo"
                type="text"
                required
              />

              <label for="Preço_veiculo">Preço</label>
              <Input
                name="preco"
                value={data?.preco}
                onChange={handleChange}
                id="Preço_veiculo"
                type="number"
                required
              />

              <select
                name="car_type"
                value={data?.car_type}
                onChange={handleChange}
                id="Tipos"
              >
                <option value="carro">Carro</option>
                <option value="caminhao">Caminhão</option>
                <option value="utilitario">Utilitarios</option>
              </select>
              <br />
              <br />

              {data?.car_type === "carro" && (
                <>
                  <label>Tamanho do motor</label>
                  <Input
                    name="tamanho_motor"
                    value={data?.tamanho_motor}
                    onChange={handleChange}
                    id="Tipo_extra"
                    type="text"
                    required
                  />
                </>
              )}

              {data?.car_type === "caminhao" && (
                <>
                  <label>Capacidade de peso</label>
                  <Input
                    name="capacidade_peso"
                    value={data?.capacidade_peso}
                    onChange={handleChange}
                    id="Tipo_extra"
                    type="text"
                    required
                  />
                </>
              )}

              {data?.car_type === "utilitario" && (
                <>
                  <label>Número de assentos</label>
                  <Input
                    name="nr_assentos"
                    value={data?.nr_assentos}
                    onChange={handleChange}
                    id="Tipo_extra"
                    type="text"
                    required
                  />
                </>
              )}

              <button
                onClick={async (e) => {
                  closeModal();
                  await saveVehicle(e);
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

export default VehicleComponent;
