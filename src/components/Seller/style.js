import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(69, 77, 86);
`;

export const Container = styled.div`
  width: 90%;
  height: 80%;
  border-radius: 10px;
  background: rgb(50, 53, 55);

  button {
    color: #ffffff;
    padding: 7px;
    font-weight: bold;
    font-size: 12pt;
    margin-top: 20px;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    transition: all 0.3s ease-out;
  }

  .header {
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto 12px;
  }

  .header span {
    color: #ffffff;
    font-weight: 900;
    font-size: 20px;
    word-break: break-all;
  }

  #new {
    font-size: 16px;
    padding: 8px;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: rgb(81, 81, 81);
    border-color: #6c6c6c;
  }

  .divTable {
    padding: 10px;
    width: auto;
    height: inherit;
    overflow: auto;
  }

  table {
    width: 100%;
    border-spacing: 10px;
    word-break: break-all;
    border-collapse: collapse;
  }

  thead {
    background-color: rgba(7, 7, 7, 0.288);
  }

  tr {
    border-bottom: 1px solid rgb(252, 252, 252) !important;
  }

  td {
    color: #ffffff;
    vertical-align: text-top;
    padding: 6px;
    max-width: 50px;
  }

  th {
    color: #ffffff;
    padding: 5px;
    text-align: start;
    margin-bottom: 50px;
  }

  tr {
    margin-bottom: 50px;
  }

  .acao {
    width: 100px !important;
    text-align: center;
  }

  .acao {
    text-align: center;
  }

  @media (max-width: 700px) {
    body {
      font-size: 10px;
    }

    .header span {
      font-size: 15px;
    }

    #new {
      padding: 5px;
      font-size: 10px;
    }

    .acao {
      width: auto !important;
    }

    i {
      font-size: 20px !important;
    }

    i:first-child {
      margin-right: 0;
    }

    .modal {
      width: 90% !important;
    }

    .modal label {
      font-size: 12px !important;
    }
  }

  .modal-container {
    color: #ffffff;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    z-index: 999;
    align-items: center;
    justify-content: center;
  }

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    background-color: rgb(69, 77, 86);
    border-radius: 10px;
    width: 50%;
  }

  .modal label {
    font-size: 14px;
    width: 100%;
  }

  .modal input {
    background-color: rgba(167, 167, 167, 0.296);
    width: 100%;
    outline: none;
    padding: 5px 10px;
    width: 100%;
    margin-bottom: 20px;
    border-top: none;
    border-left: none;
    border-right: none;
    color: #ffffff;
  }

  .modal button {
    width: 100%;
    margin: 10px auto;
    outline: none;
    border-radius: 20px;
    padding: 5px 10px;
    width: 100%;
    border: none;
    background-color: rgb(35, 35, 35);
    color: white;
  }

  .active {
    display: flex;
  }

  .active .modal {
    animation: modal 0.4s;
  }

  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(0, -60px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  td button {
    border: none;
    outline: none;
    background: transparent;
  }

  td button i {
    font-size: 25px;
  }

  td button i:first-child {
    margin-right: 10px;
  }
`;

export const Input = styled.input``;
